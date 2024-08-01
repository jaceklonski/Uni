import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}

import javax.naming.InitialContext

class Serwer extends Actor with ActorLogging {
  def receive: Receive = {
    case Init => context.become(przyjmowanie(Nil, 0, Nil))
  }

  def przyjmowanie(listapracowników: List[ActorRef], indx: Int, zajeci: List[ActorRef]): Receive = {
    case Zlecenie(liczba:Int) =>
      if (listapracowników.length == 0 && listapracowników.length + zajeci.length < 5) {
      val pracownik = context.actorOf(Props[Pracownik](), s"pracownik$indx")
      log.info(s"ja: $self wysyłam oblicz: $liczba do $pracownik")
      pracownik ! Oblicz(liczba)
      context.become(przyjmowanie(listapracowników, indx + 1, pracownik :: zajeci))}
    
      else {
        if (listapracowników.length == 0) self ! Zlecenie(liczba)
        else {
          log.info(s"ja: $self wysyłam oblicz: $liczba do ${listapracowników(0)}")
          listapracowników(0) ! Oblicz(liczba)
          val dostepni = listapracowników.drop(1)
          context.become(przyjmowanie(dostepni, indx, listapracowników(0) :: zajeci))
        }
      }
    

    case Wynik(liczba: Int) => log.info(s"ja: $self otrzymałem wynik $liczba od: ${sender()}")
      context.become(przyjmowanie(sender() :: listapracowników, indx, zajeci.drop(1)))
  }

}
class Pracownik extends Actor {
  def receive: Receive = {
    case Oblicz(liczba: Int) => //log.info("otrzymałem zlecenie")
      sender() ! Wynik(liczba*liczba)
  }
}

case object Init
case class Zlecenie(liczba: Int)
case class Oblicz(liczba: Int)
case class Wynik(liczba: Int)

@main 
def mainProg: Unit = {
  val system = ActorSystem("kolokwium")
  val serwer = system.actorOf(Props[Serwer](), "serwer")
  serwer ! Init
  serwer ! Zlecenie(1)
  //(1 to 10).map{i => println(10 - i)}
  serwer ! Zlecenie(2)
  serwer ! Zlecenie(3)
  serwer ! Zlecenie(4)
  serwer ! Zlecenie(5)
  serwer ! Zlecenie(6)
  serwer ! Zlecenie(7)
  serwer ! Zlecenie(8)
  serwer ! Zlecenie(9)
  serwer ! Zlecenie(10)
  serwer ! Zlecenie(11)
  serwer ! Zlecenie(12)
  serwer ! Zlecenie(13)
  serwer ! Zlecenie(14)
  serwer ! Zlecenie(15)
  serwer ! Zlecenie(1)
  serwer ! Zlecenie(2)
  serwer ! Zlecenie(3)
  serwer ! Zlecenie(4)
  serwer ! Zlecenie(5)
  serwer ! Zlecenie(6)
  serwer ! Zlecenie(7)
  serwer ! Zlecenie(8)
  serwer ! Zlecenie(9)
  serwer ! Zlecenie(10)
  serwer ! Zlecenie(11)
  serwer ! Zlecenie(12)
  serwer ! Zlecenie(13)
  serwer ! Zlecenie(14)
  serwer ! Zlecenie(15)
}