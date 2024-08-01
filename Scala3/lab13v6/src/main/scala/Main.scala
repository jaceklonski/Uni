import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}

case object Oskar

class MovieStar extends Actor with ActorLogging {
  def receive: Receive = {
    case Oskar =>
      log.info("Oskar? No i świetnie! Idę na emeryturę!")
      context.system.terminate()
    case msg => log.info(s"Odebrałem wiadomość: ${msg}")
  }
}

@main 
def mainProg: Unit = {
  val system = ActorSystem("Hollywood")
    val leonardo = system.actorOf(Props[MovieStar](), "leonardo")
    leonardo ! Oskar
}

class Szef extends Actor with ActorLogging { 
  def receive: Receive = {
    case Init(l: Int) => context.become(gotowy((for(i <- 1 to l) yield context.actorOf(Props[Pracownik](), s"prac$i")).toList, l))
  }

  def gotowy(listpr: List[ActorRef], lpr: Int): Receive = {
    case Zlecenie(tekst: List[String]) => tekst.zipWithIndex.map{ case(element, ind) => listpr(ind%lpr) ! Wykonaj(element)}
    context.become(wynik(0, tekst.length, 0, listpr))
  }

  def wynik(otrz: Int, wys: Int, acc: Int , listpr: List[ActorRef]): Receive = {
    case Wynik(i: Int) => if (otrz + 1 == wys) {log.info(s"słów: ${i + acc}")
  context.become(gotowy(listpr, listpr.length))}
    else context.become(wynik(otrz + 1, wys, acc + i, listpr))
  }
 }

class Pracownik extends Actor { def receive: Receive = { case Wykonaj(a: String) => sender() ! Wynik(a.split(" ").toList.length)} }


case class Init(liczbaPracowników: Int)
case class Zlecenie(tekst: List[String])
case class Wykonaj( w: String )
case class Wynik( i: Int )

@main
def Licznik: Unit = {
  val system = ActorSystem("licznik")
  val slowa = List ("mama ma mame", "tata ma tate", "Czaka laka szoko bons", "mam nadzieje że to nie było podane i nie piszę tego na manre", "szkoda by było jakby tak było", "ale wole nie sprawdzać", "bo tak przynajmniej się nie zawiodę", "terapeutka mi mówi że to nie dobrze ale się tym nie przejmuję", "bo szybko to zmienie jak się okaże że", "wyrazenia sa podane", "a co jeśli się okaże że nie można używać varów", "i będę musiał jakieś funkcje wymyślać")
  val szefito = system.actorOf(Props[Szef](), "Szefito")
  szefito ! Init(4)
  szefito ! Zlecenie(slowa)
}