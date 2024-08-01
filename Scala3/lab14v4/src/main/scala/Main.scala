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

class Szef extends Actor { 
  def receive: Receive = init(3,3)

  def init(lA: Int, lB: Int): Receive = {
    case Init(liczbaZleceń: Int) => 
      val magazyn = context.actorOf(Props[Magazyn](), "Magazyn")
      magazyn ! Init(liczbaZleceń)
      val monter = context.actorOf(Props[Monter](), "Monter")
      monter ! InitA(magazyn)
      val pracownicyA = (1 to lA).map{i => 
        val pracownik = context.actorOf(Props[PracownikA](), s"PracA$i")
        pracownik ! InitA(monter)
        pracownik}.toList
      val pracownicyB = (1 to lA).map{i => 
        val pracownik = context.actorOf(Props[PracownikB](), s"PracB$i")
        pracownik ! InitA(monter)
        pracownik}.toList
      
      (1 to liczbaZleceń).map{_ => self ! Zlecenie}

      context.become(wykonywanie(pracownicyA, lA, pracownicyB, lB, 0))
  }

  def wykonywanie(listapA: List[ActorRef], lpA: Int, listapB: List[ActorRef], lpB: Int, acc: Int): Receive = {
    case Zlecenie => 
      listapB(acc%lpB) ! Wykonaj
      listapA(acc%lpA) ! Wykonaj
      context.become(wykonywanie(listapA, lpA, listapB, lpB, acc+1))
  }
 }
class PracownikA extends Actor with ActorLogging{ 
  def receive: Receive = {
    case InitA(a: ActorRef) => log.info("pracownikA gotowy do pracy")
      context.become(gotowy(a))
  }

  def gotowy(a: ActorRef): Receive = {
    case Wykonaj => a ! ProduktA
  }
 }
class PracownikB extends Actor with ActorLogging { 
    def receive: Receive = {
    case InitA(a: ActorRef) => log.info("pracownikB gotowy do pracy")
      context.become(gotowy(a))
  }

    def gotowy(a: ActorRef): Receive = {
    case Wykonaj => a ! ProduktB
  }
 }

class Magazyn extends Actor with ActorLogging{ 
  def receive: Receive = {
    case Init(i: Int) => context.become(gotowy(1, i))
  }

  def gotowy (odebrane: Int, oczekiwane: Int): Receive = {
    case Produkt =>
    if (odebrane == oczekiwane) {
      log.info(s"stan magazynu: $odebrane/$oczekiwane")
      context.system.terminate()}
    else {
      log.info(s"stan magazynu: $odebrane/$oczekiwane")
      context.become(gotowy(odebrane + 1 , oczekiwane))
    }
  }
 }
class Monter extends Actor { 
  def receive: Receive = {
    case InitA(act: ActorRef) => context.become(gotowy(0,0,act))
  }

  def gotowy(proA: Int, proB: Int, a: ActorRef): Receive ={
    case ProduktA => if (proB > 0) {
      a ! Produkt
      context.become(gotowy(proA, proB-1, a))
    }
    else context.become(gotowy(proA + 1, proB, a))

    case ProduktB => if (proA > 0) {
      a ! Produkt
      context.become(gotowy(proA -1, proB, a))
    }
    else context.become(gotowy(proA, proB + 1, a))
  }
 }



case class Init(liczbaZleceń: Int)
case class InitA(a: ActorRef)
case object Zlecenie
case object Wykonaj
case object ProduktA
case object ProduktB
case object Produkt

@main
def lesssgoo: Unit = {
  val system = ActorSystem("manufaktura")
  val szef = system.actorOf(Props[Szef](), "szef")
  szef ! Init(12)
}