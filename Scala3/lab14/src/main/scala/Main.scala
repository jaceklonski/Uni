import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}

val system = ActorSystem("Montowniaaaaaa")

case class Init(liczbaZleceń: Int)
case class InitA(target: ActorRef)
case class InitB(target: ActorRef)
case object Zlecenie
case object Wykonaj
case object ProduktA
case object ProduktB
case object Produkt

class Szef extends Actor {
  def receive: Receive = initiale

  def initiale: Receive = {
    case Init(liczbaZleceń: Int) =>
      val pracownikA = context.actorOf(Props[PracownikA](), "PracownikA")
      val pracownikB = context.actorOf(Props[PracownikB](), "PracownikB")
      val monter = context.actorOf(Props[Monter](), "Monter")
      val magazyn = context.actorOf(Props[Magazyn](), "Magazyn")

      magazyn ! Init(liczbaZleceń)
      pracownikA ! InitA(monter)
      pracownikB ! InitA(monter)
      monter ! InitB(magazyn)

      (1 to liczbaZleceń).foreach { _ =>
        pracownikA ! Zlecenie
        pracownikB ! Zlecenie
      }
  }
}

class PracownikA extends Actor {
  def receive: Receive = {
    case InitA(target) => context.become(gotowosc(target))
  }

  def gotowosc(target: ActorRef): Receive = {
    case Zlecenie =>
      target ! ProduktA
  }
}

class PracownikB extends Actor {
  def receive: Receive = {
    case InitA(target) => context.become(gotowosc(target))
  }

  def gotowosc(target: ActorRef): Receive = {
    case Zlecenie =>
      target ! ProduktB
  }
}

class Magazyn extends Actor {
  def receive: Receive = {
    case Init(liczbaZleceń: Int) => context.become(magazyn(0, liczbaZleceń))
  }

  def magazyn(stan: Int, zlecenia: Int): Receive = {
    case Produkt =>
      if (stan == zlecenia - 1) {
        context.system.terminate()
      } else {
        context.become(magazyn(stan + 1, zlecenia))
      }
  }
}

class Monter extends Actor {
  def receive: Receive = {
    case InitB(targ) => context.become(montaz(0, 0, targ))}

  def montaz(a: Int, b: Int, magazyn: ActorRef): Receive = {
    case ProduktA =>
      if (b >= 1) {
        magazyn ! Produkt
        context.become(montaz(a - 1, b - 1, magazyn))
      } else {
        context.become(montaz(a + 1, b, magazyn))
      }

    case ProduktB =>
      if (a >= 1) {
        magazyn ! Produkt
        context.become(montaz(a - 1, b - 1, magazyn))
      } else {
        context.become(montaz(a, b + 1, magazyn))
      }
  }
}

@main def Firma: Unit = {
  val szef = system.actorOf(Props[Szef](), "Szef")
  szef ! Init(10)
}
