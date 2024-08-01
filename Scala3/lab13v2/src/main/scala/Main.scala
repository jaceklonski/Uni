import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}

val system = ActorSystem("Firma")



//========================Szef================================

class Szef extends Actor with ActorLogging { 
  def receive: Receive = {
    case Init(l: Int) => 
      context.become(gotowość(tworzenie(l, Nil), l))
  }

  def gotowość(listA: List[ActorRef], l: Int): Receive = {
    case Zlecenie(listS: List[String]) => rozeslij(listA, listS, l)
    context.become(oczekuj(0, listA.length, 0, listA))
  }

  def oczekuj(przyjete: Int, wyslane: Int, acc: Int, aktorzy: List[ActorRef]): Receive = {
    case Wynik( wynik: Int ) => 
      if (przyjete == wyslane) {log.info(s"słów: ${acc + wynik}")
      context.become(gotowość(aktorzy, aktorzy.length))}
      else context.become(oczekuj(przyjete + 1, wyslane, acc + wynik, aktorzy))
  }

  def rozeslij(pracownicy: List[ActorRef], list: List[String], l: Int): Unit = list match {
    case head :: next =>
      pracownicy(list.length % l) ! Wykonaj(head)
      rozeslij(pracownicy, next, l)
    case Nil =>
}

  @annotation.tailrec
  private def tworzenie(l: Int, acc: List[ActorRef]): List[ActorRef] = {
    if (l == 0) acc
    else tworzenie(l - 1, system.actorOf(Props[Pracownik](), s"pracownik$l") :: acc)
  }}


 //======================Pracownik==================================

class Pracownik extends Actor { 
  def receive: Receive = {
    case Wykonaj(tekst: String) =>
    sender() ! Wynik(tekst.split(" ").toList.length)
  }
 }
 //==========================Main==============================
case class Init(liczbaPracowników: Int)
case class Zlecenie(tekst: List[String])
case class Wykonaj(str: String )
case class Wynik( wynik: Int )

@main
def Szefowanie: Unit = {
  val slowa = List ("mama ma mame", "tata ma tate", "Czaka laka szoko bons", "mam nadzieje że to nie było podane i nie piszę tego na manre", "szkoda by było jakby tak było", "ale wole nie sprawdzać", "bo tak przynajmniej się nie zawiodę", "terapeutka mi mówi że to nie dobrze ale się tym nie przejmuję", "bo szybko to zmienie jak się okaże że", "wyrazenia sa podane", "a co jeśli się okaże że nie można używać varów", "i będę musiał jakieś funkcje wymyślać")
  val szefito = system.actorOf(Props[Szef](), "szefito")
  szefito ! Init(7)
  szefito ! Zlecenie(slowa)
}