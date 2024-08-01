import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}
import javax.sound.midi.Receiver

case class Init(liczbaPracowników: Int)
case class Zlecenie(tekst: List[String])
case class Wykonaj( str: String )
case class Wynik( wynik: Int )

class Szef extends Actor with ActorLogging{ 
  def receive: Receive = {
    case Init(lp: Int) => 
      val pracownicy = for(i <- 1 to lp) yield context.actorOf(Props[Pracownik](), s"prac$i")
      context.become(gotowy(pracownicy.toList, lp))}

  def gotowy(lista: List[ActorRef], lp: Int): Receive = {
    case Zlecenie(str: List[String]) => str.zipWithIndex.map{ case (elem, index) => lista(index%lp) ! Wykonaj(elem)}
    context.become(przyjmuj(0, str.length, 0, lista))}

  def przyjmuj(przyjete: Int, wyslane: Int, acc: Int, lista: List[ActorRef]): Receive = {
    case Wynik(wynik: Int) =>
    if (przyjete == wyslane - 1) {log.info(s"słów: ${acc + wynik}")
  context.become(gotowy(lista, lista.length))}
    else context.become(przyjmuj(przyjete + 1, wyslane, acc + wynik, lista))}
 }

class Pracownik extends Actor { 
  def receive: Receive = {
    case Wykonaj(str: String) => sender() ! Wynik(str.split(" ").toList.length)}}

@main
def Licznik: Unit = {
  val system = ActorSystem("licznik")
  val slowa = List ("mama ma mame", "tata ma tate", "Czaka laka szoko bons", "mam nadzieje że to nie było podane i nie piszę tego na manre", "szkoda by było jakby tak było", "ale wole nie sprawdzać", "bo tak przynajmniej się nie zawiodę", "terapeutka mi mówi że to nie dobrze ale się tym nie przejmuję", "bo szybko to zmienie jak się okaże że", "wyrazenia sa podane", "a co jeśli się okaże że nie można używać varów", "i będę musiał jakieś funkcje wymyślać")
  val szefito = system.actorOf(Props[Szef](), "Szefito")
  szefito ! Init(4)
  szefito ! Zlecenie(slowa)}