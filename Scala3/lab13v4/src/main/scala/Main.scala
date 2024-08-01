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
  def receive: Receive = init

  def init: Receive = {
    case Init(liczbaPracowników: Int) => 
      val pracownicy = (1 to liczbaPracowników).map{ i =>
        val pracownik = context.actorOf(Props[Pracownik](), s"praco$i")
        pracownik
      }.toList
      context.become(gotowy(pracownicy, liczbaPracowników))
  }

  def gotowy(list: List[ActorRef], lp: Int): Receive = {
    case Zlecenie(str: List[String]) => str.zipWithIndex.map{ case (elem, index) => list(index%lp) ! Wykonaj(elem)}

    context.become(oczekuj(0, str.length, 0))
  }

  def oczekuj(przyjete: Int, wyslane: Int, acc: Int): Receive = {
    case Wynik(wynik: Int) => if (przyjete == wyslane -1) {log.info(s"słów: ${acc + wynik}")
     context.system.terminate()}
    else context.become(oczekuj(przyjete+1, wyslane, acc + wynik))
  }
 }

class Pracownik extends Actor {
  def receive: Receive = {
    case Wykonaj(str: String) => sender() ! Wynik(str.split(" ").toList.length)
  }
 }


case class Init(liczbaPracowników: Int)
case class Zlecenie(tekst: List[String])
case class Wykonaj( str: String )
case class Wynik( wynik: Int )

@main
def lesssgoooo: Unit = {
  val system = ActorSystem("licznik")
  val szef = system.actorOf(Props[Szef](), "Szef")
  val slowa = List ("mama ma mame", "tata ma tate", "Czaka laka szoko bons", "mam nadzieje że to nie było podane i nie piszę tego na manre", "szkoda by było jakby tak było", "ale wole nie sprawdzać", "bo tak przynajmniej się nie zawiodę", "terapeutka mi mówi że to nie dobrze ale się tym nie przejmuję", "bo szybko to zmienie jak się okaże że", "wyrazenia sa podane", "a co jeśli się okaże że nie można używać varów", "i będę musiał jakieś funkcje wymyślać")
  szef ! Init(8)
  szef ! Zlecenie(slowa)
}