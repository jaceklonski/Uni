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



class Szef extends Actor with ActorLogging { 
  def receive: Receive = init(2, 2)

  def init(liczba_A: Int, liczba_B: Int): Receive = {
    case Init(liczbaZleceń: Int) =>
      val magazyn = context.actorOf(Props[Magazyn](), s"magazyn")
      magazyn ! Init(liczbaZleceń)
      val monter = context.actorOf(Props[Monter](), s"monter")
      monter ! InitA(magazyn)
      val pracownicyA = (0 until liczba_A).map{i => 
        val pracownik = context.actorOf(Props[PracownikB](), s"prA$i")
        pracownik ! InitA(monter)
        pracownik 
      }.toList

      val pracownicyB = (0 until liczba_B).map{i => 
        val pracownik = context.actorOf(Props[PracownikB](), s"prB$i")
        pracownik ! InitA(monter)
        pracownik 
      }.toList

      (1 to liczbaZleceń).map{i => self ! Zlecenie}

      context.become(ready(pracownicyA, liczba_A, pracownicyB, liczba_B, 0))
  }

  def ready(pracownicyA: List[ActorRef], lenA: Int, pracownicyB: List[ActorRef], lenB: Int, index: Int): Receive = {
    case Zlecenie => 
    log.info("Otrzymałem Zlecenie")  
    pracownicyA(index%lenA) ! Wykonaj
    pracownicyB(index%lenB) ! Wykonaj
    context.become(ready(pracownicyA, lenA, pracownicyB, lenB, index +1))
  }
 }

class PracownikA extends Actor with ActorLogging { 
  def receive: Receive = {
  case InitA(act: ActorRef) => context.become(produkcja(act))
} 
  def produkcja(act: ActorRef): Receive = {
    case Wykonaj => 
      log.info("Wykonuję")
      act ! ProduktA
  }

}

class PracownikB extends Actor with ActorLogging {   
  def receive: Receive = {
  case InitA(act: ActorRef) => context.become(produkcja(act))
} 
  def produkcja(act: ActorRef): Receive = {
    case Wykonaj => 
      log.info("Wykonuję")
      act ! ProduktB
  } }

class Magazyn extends Actor with ActorLogging{ 
  def receive: Receive = {
    case Init(liczbaZleceń: Int) => 
      log.info("rozpoczynam przyjmowanie produktów")
      context.become(produkcja(liczbaZleceń, 0))
} 
  def produkcja(lz: Int, przyjete: Int): Receive = {
    case Produkt => 
      log.info(s"stan magazynu: ${przyjete+1} / $lz")
      if (lz == przyjete) context.system.terminate()
      else context.become(produkcja(lz, przyjete + 1))
  }
 }

class Monter extends Actor with ActorLogging {   
  
  def receive: Receive = {
  case InitA(lz: ActorRef) => context.become(produkcja(lz, 0, 0))
} 
  def produkcja(lz: ActorRef, pA: Int, pB: Int): Receive = {
    case ProduktA => if (pB > 0) { 
      log.info("Produkt wysłany na magazyn")
      lz ! Produkt
      context.become(produkcja(lz, pA, pB -1))}
      else {
        context.become(produkcja(lz, pA + 1, pB)
      )}

    case ProduktB => if (pA > 0) { 
      log.info("Produkt wysłany na magazyn")
      lz ! Produkt
      context.become(produkcja(lz, pA -1, pB))}
      else {
        context.become(produkcja(lz, pA + 1, pB)
      )} }

}

case class Init(liczbaZleceń: Int)
case class InitA(actor: ActorRef)
case object Zlecenie
case object Wykonaj
case object ProduktA
case object ProduktB
case object Produkt

@main
def main: Unit = {
  val system = ActorSystem("manufaktura")
  val szef = system.actorOf(Props[Szef](), "szef")
  szef ! Init(10)
}