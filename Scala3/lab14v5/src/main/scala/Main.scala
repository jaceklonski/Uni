import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}
import javax.sound.midi.Receiver

class Szef extends Actor { 
  def receive: Receive = init(10,10)

  def init(pracA: Int, pracB: Int): Receive = {
    case Init(liczbaZleceń: Int) =>
      val magazyn = context.actorOf(Props[Magazyn](), "magazyn")
      magazyn ! Init(liczbaZleceń)
      val monter = context.actorOf(Props[Monter](), "monter")
      monter ! InitA(magazyn)

      val pracownicyA = (1 to pracA).map{i => 
        val pracownik = context.actorOf(Props[PracownikA](), s"prA$i")
        pracownik ! InitA(monter)
        pracownik}.toList

      val pracownicyB = (1 to pracB).map{i => 
        val pracownik = context.actorOf(Props[PracownikB](), s"prB$i")
        pracownik ! InitA(monter)
        pracownik}.toList

      for (i <- 1 to liczbaZleceń) self ! Zlecenie

      context.become(gotowy(pracownicyA, pracA, pracownicyB, pracB, 0))
  }

  def gotowy(listaA: List[ActorRef], lA: Int, listaB: List[ActorRef], lB: Int, index: Int): Receive = {
    case Zlecenie => listaA(index%lA) ! Wykonaj
    listaB(index%lB) ! Wykonaj
    context.become(gotowy(listaA, lA, listaB, lB, index + 1))
  }
 }
class PracownikA extends Actor { 
  def receive: Receive ={
    case InitA(a: ActorRef) => context.become(obrobka(a))
  }

  def obrobka(a: ActorRef): Receive = {
    case Wykonaj => a ! ProduktA
  }
 }
class PracownikB extends Actor { 
    def receive: Receive ={
    case InitA(a: ActorRef) => context.become(obrobka(a))
  }

    def obrobka(a: ActorRef): Receive = {
    case Wykonaj => a ! ProduktB
  }
 }

class Magazyn extends Actor with ActorLogging { 
  def receive: Receive = {
    case Init(i: Int) => context.become(gotowy(1, i))
  }

  def gotowy(przyjete: Int, wyslane: Int): Receive = {
    case Produkt =>
      if (przyjete == wyslane) { log.info(s"Stan Magazynu: $przyjete/$wyslane") 
    context.system.terminate()}
      else { log.info(s"Stan Magazynu: $przyjete/$wyslane")
      context.become(gotowy(przyjete + 1, wyslane))}
    }
 }
class Monter extends Actor { 
  def receive: Receive = {
    case InitA(a: ActorRef) => context.become(gotowy(a, 0, 0))
  }

  def gotowy(a: ActorRef, prodA: Int, prodB: Int):Receive = {
    case ProduktA => if (prodB > 0) {a ! Produkt
      context.become(gotowy(a, prodA, prodB -1))}
      else context.become(gotowy(a, prodA + 1, prodB))

    case ProduktB => if (prodA > 0) {a ! Produkt
      context.become(gotowy(a, prodA - 1, prodB))}
      else context.become(gotowy(a, prodA, prodB + 1))
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
def lesssgooooooooo: Unit = {
  val system = ActorSystem("szefura")
  val szef = system.actorOf(Props[Szef](), "szef")
  szef ! Init(2000)
}