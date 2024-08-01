import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}
import javax.sound.midi.Receiver

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
  def receive: Receive = init(2,2)

  def init(lA: Int, lB: Int): Receive = {
    case Init(lz: Int) =>
      val magazyn = context.actorOf(Props[Magazyn](), "Magazyn")
      magazyn ! Init(lz)

      val monter = context.actorOf(Props[Monter](), "Monter")
      monter ! InitA(magazyn)

      val prcA = (1 to lA).map{i => val pracownik = context.actorOf(Props[PracownikA](), s"PrA$i")
        pracownik ! InitA(monter)
        pracownik
        }.toList

      val prcB = (1 to lB).map{i => val pracownik = context.actorOf(Props[PracownikB](), s"PrB$i")
        pracownik ! InitA(monter)
        pracownik
        }.toList

      for(i <- 1 to lz) self ! Zlecenie

      context.become(zlec(prcA, lA, prcB, lB, 0))
  }

    def zlec(prA: List[ActorRef], lA: Int, prB: List[ActorRef], lB: Int, acc: Int): Receive = {
      case Zlecenie => prA(acc%lA) ! Wykonaj
        prB(acc%lB) ! Wykonaj
    }

 }

class PracownikA extends Actor { 
  def receive: Receive = {
    case InitA(a: ActorRef) => context.become(gotowy(a))
  }

  def gotowy(act: ActorRef): Receive = {
    case Wykonaj => act ! ProduktA
  }
 }

class PracownikB extends Actor {   
  def receive: Receive = {
    case InitA(a: ActorRef) => context.become(gotowy(a))
  }

  def gotowy(act: ActorRef): Receive = {
    case Wykonaj => act ! ProduktB
  } }

class Magazyn extends Actor with ActorLogging { 
  def receive: Receive = {
    case Init(i: Int) => context.become(gotowy(1, i))
  }

  def gotowy(przyjete: Int, wyslane: Int): Receive = {
    case Produkt => if (przyjete == wyslane) {log.info(s"stan $przyjete/$wyslane")
      context.system.terminate()}
      else {log.info(s"stan $przyjete/$wyslane")
        context.become(gotowy(przyjete+1, wyslane)) }
  }
 }

class Monter extends Actor { 
  def receive: Receive = {
    case InitA(a: ActorRef) => context.become(gotowy(a, 0, 0))
  }

  def gotowy(a: ActorRef, pa: Int, pb: Int): Receive = {
    case ProduktA => if (pb > 0) {
      a ! Produkt
      context.become(gotowy(a, pa, pb - 1))
    }
      else {context.become(gotowy(a, pa + 1, pb))}

    case ProduktB => if (pa > 0) {
      a ! Produkt
      context.become(gotowy(a, pa - 1, pb))
    }
      else {context.become(gotowy(a, pa, pb + 1))}
  }
 }

case class Init(lz: Int)
case class InitA(a : ActorRef)
case object Zlecenie
case object Wykonaj
case object ProduktA
case object ProduktB
case object Produkt

@main
def lesssgooooooooo: Unit = {
  val system = ActorSystem("szefura")
  val szef = system.actorOf(Props[Szef](), "szef")
  szef ! Init(500)
}