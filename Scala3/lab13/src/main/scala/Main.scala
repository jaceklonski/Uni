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

case class Init(liczbaPracowników: Int)
case class Zlecenie(tekst: List[String])
case class Wykonaj(txt: String)
case class Wynik(wynik: Int)
val system = ActorSystem("FirmaSloweX")

// class Szef extends Actor with ActorLogging {
//   val gracze = List.empty[ActorRef]
//   val acc = 0
//   val liczba_z = 0
  
//   def receive(liczbaPracowników: Int): Receive = {
//     case Init =>
//       gracze.concat((1 to liczbaPracowników).map{ i =>
//       system.actorOf(Props[pracownik](), s"pracownik$i")
//       }.toList)
    
//   }

//   def rozsylanie(tekst: List[String]): Receive = {
//     case Zlecenie =>
//     tekst.zipWithIndex.map { case (task, index) =>
//         gracze(index) ! Wykonaj(task)
//     }}

//   def sumowanie(wynik: Int): Receive = {
//     case Wynik =>
//   }

// }

class Szef extends Actor with ActorLogging {
  var gracze: List[ActorRef] = List.empty
  var acc: Int = 0
  var liczba_z: Int = 0
  var liczba_y: Int = 0

  def receive: Receive = initial

  def initial: Receive = {
    case Init(liczbaPracowników: Int) =>
      gracze = (1 to liczbaPracowników).map { i =>
        context.actorOf(Props[pracownik](), s"pracownik$i")
      }.toList
      context.become(Zlecenia)
  }

  def Zlecenia: Receive = {
    case Zlecenie(tekst: List[String]) =>
      tekst.zipWithIndex.foreach { case (task, index) =>
        gracze(index % gracze.length) ! Wykonaj(task)
        liczba_y += 1
      }

    case Wynik(value) =>
      acc += value
      liczba_z += 1
      if( liczba_z == liczba_y ) {
        println(acc)
        acc = 0
        context.become(initial)}
  }
}


class pracownik extends Actor with ActorLogging {
  def receive: Receive = {
    case Wykonaj(tekst: String) =>
    sender() ! Wynik(tekst.split(" ").toList.length)
  }
}

@main
def Szefowanie: Unit = {
  val slowa = List ("mama ma mame", "tata ma tate", "Czaka laka szoko bons", "mam nadzieje że to nie było podane i nie piszę tego na manre", "szkoda by było jakby tak było", "ale wole nie sprawdzać", "bo tak przynajmniej się nie zawiodę", "terapeutka mi mówi że to nie dobrze ale się tym nie przejmuję", "bo szybko to zmienie jak się okaże że", "wyrazenia sa podane", "a co jeśli się okaże że nie można używać varów", "i będę musiał jakieś funkcje wymyślać")
  val szefito = system.actorOf(Props[Szef](), "Szefito")
  szefito ! Init(7)
  szefito ! Zlecenie(slowa)
}