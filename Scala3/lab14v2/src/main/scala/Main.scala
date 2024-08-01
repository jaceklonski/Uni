import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}
import javax.sound.midi.Receiver

val system = ActorSystem("Manufaktura")

case class Init(liczbaZleceń: Int)
case class InitA(cel: ActorRef)
case class InitB(/* TODO: wymyśl listę parametrów */)
case class InitMonter(/* TODO: wymyśl listę parametrów */)
case class InitMagazyn(/* TODO: wymyśl listę parametrów */)
case object Zlecenie
case object Wykonaj
case object ProduktA
case object ProduktB
case object Produkt

class Szef extends Actor { 
  def receive: Receive = {
    case Init(liczbaZleceń: Int) => 
      val ilosc_A = 1
      val ilosc_B = 1
      val magazyn = system.actorOf(Props[Magazyn](), "magazyn")
      magazyn ! Init(liczbaZleceń)
      val monter = system.actorOf(Props[Monter](), "monter")
      monter ! InitA(magazyn)
      val pracownicyA = (1 to ilosc_A).map { i =>
        val pracownik = context.actorOf(Props[PracownikA](), s"pracownikA-$i")
        pracownik ! InitA(monter)
        pracownik
      }.toList
      val pracownicyB = (1 to ilosc_B).map { i =>
        val pracownik = context.actorOf(Props[PracownikB](), s"pracownikB-$i")
        pracownik ! InitA(monter)
        pracownik
      }.toList

      (1 to liczbaZleceń).map {i => self ! Zlecenie
      }

      context.become(boot(0, pracownicyA.length, pracownicyB.length, pracownicyA, pracownicyB))
  }

  def boot(wkolomacieju: Int, ilosca: Int, iloscb: Int, pracownicyA: List[ActorRef], pracownicyB: List[ActorRef]): Receive = {
    case Zlecenie =>
      pracownicyA(wkolomacieju%ilosca) ! Wykonaj
      pracownicyB(wkolomacieju%iloscb) ! Wykonaj
  }
 }

class PracownikA extends Actor { 
  def receive: Receive = {
    case InitA(t: ActorRef) => context.become(gotowy(t))
  }

  def gotowy(a: ActorRef): Receive = {
    case Wykonaj => a ! ProduktA
  }
}

class PracownikB extends Actor {   
  
  def receive: Receive = {
    case InitA(t: ActorRef) => context.become(gotowy(t))
  }

  def gotowy(a: ActorRef): Receive = {
    case Wykonaj => a ! ProduktB
  }
} 

class Magazyn extends Actor {   
  def receive: Receive = {
  case Init(lz: Int) => context.become(gotowy(0, lz))}

  def gotowy(przyjete: Int, oczekiwane: Int): Receive ={
    case Produkt => {
      if (przyjete == oczekiwane - 1) context.system.terminate()
      else context.become(gotowy(przyjete + 1, oczekiwane))
    }
  }
  }


class Monter extends Actor {   
  def receive: Receive = {
    case InitA(t: ActorRef) => context.become(gotowy(t, 0, 0))
  }

  def gotowy(a: ActorRef, proA: Int, proB: Int): Receive = {
    case ProduktA => 
      if (proB>0) {a ! Produkt}
      else{context.become(gotowy(a, proA + 1, proB))}

    case ProduktB => 
      if (proA>0) {a ! Produkt}
      else{context.become(gotowy(a, proA, proB + 1))}} 
    }


@main
def firma: Unit = {
  val szef = system.actorOf(Props[Szef](), "Szef")
  szef ! Init(10)
}

