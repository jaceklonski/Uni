import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}

val system = ActorSystem("licznik")

class Szef extends Actor with ActorLogging { 
  def receive: Receive = {
    case Init(liczbaPracowników: Int) => 
      val pracownincy = (0 to liczbaPracowników).map{i => system.actorOf(Props[Pracownik](), s"pracownik$i")}.toList
      context.become(gotowość(pracownincy, liczbaPracowników))
  }

  def gotowość(listA: List[ActorRef], l: Int): Receive = {
    case Zlecenie(listS: List[String]) => 
      rozeslij(listA, listS, l, 0)

    context.become(oczekuj(0, listS.length, 0))
  }

  def oczekuj(otrzymane: Int, oczekiwane: Int, acc: Int): Receive = {
    case Wynik(wynik: Int) =>
      if (otrzymane == oczekiwane - 1) {log.info(s"słów ${acc + wynik}")
        context.system.terminate()}
      else context.become(oczekuj(otrzymane + 1, oczekiwane, acc + wynik))}

  def rozeslij(listA: List[ActorRef], listB: List[String], l: Int, index: Int): Unit = listB match {
    case head :: next => listA(index%l) ! Wykonaj(head)
    rozeslij(listA, next, l, index+1)
    case Nil => 
  }
 }

class Pracownik extends Actor { 
  def receive: Receive = {
  case Wykonaj(str: String) =>
    sender() ! Wynik(str.split(" ").toList.length)
  
 }}
case class Init(liczbaPracowników: Int)
case class Zlecenie(tekst: List[String])
case class Wykonaj(str: String)
case class Wynik( wynik: Int)

@main
def liczmislowa: Unit = {
  val slowa = List ("mama ma mame", "tata ma tate", "Czaka laka szoko bons", "mam nadzieje że to nie było podane i nie piszę tego na manre", "szkoda by było jakby tak było", "ale wole nie sprawdzać", "bo tak przynajmniej się nie zawiodę", "terapeutka mi mówi że to nie dobrze ale się tym nie przejmuję", "bo szybko to zmienie jak się okaże że", "wyrazenia sa podane", "a co jeśli się okaże że nie można używać varów", "i będę musiał jakieś funkcje wymyślać")
  val szefito = system.actorOf(Props[Szef](), "Szefito")
  szefito ! Init(7)
  szefito ! Zlecenie(slowa)
}
