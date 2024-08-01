import org.apache.pekko
import pekko.actor.{ActorSystem, Actor, ActorLogging, ActorRef, Props}

case class Graj01(przeciwnik: ActorRef)
case object Piłeczka

class Gracz01 extends Actor with ActorLogging{
    def receive: Receive = {
      case Graj01(przeciwnik: ActorRef) => 
        przeciwnik ! Piłeczka
        context.become(pong)
      
      case Piłeczka => 
        log.info("Ping")
        sender() ! Piłeczka
      
    }

    def pong: Receive = {
      case Piłeczka =>
      log.info("Pong")
      sender() ! Piłeczka
    }
}

@main
def Gra01: Unit = {
  val system = ActorSystem("PingPong1")
  val grajek1 = system.actorOf(Props[Gracz01](), "Grajek")
  val grajek2 = system.actorOf(Props[Gracz01](), "Grajek2")
  grajek1 ! Graj01(grajek2)
}

//======================================================================================
case class Graj02(przeciwnik: ActorRef, maks: Int)

class Gracz02 extends Actor with ActorLogging {
   def receive: Receive = {
      case Graj02(przeciwnik: ActorRef, maks: Int) => 
        przeciwnik ! Piłeczka
        context.become(pong(1, maks/2))
      
      case Piłeczka => 
        log.info("Ping")
        sender() ! Piłeczka
      
    }

    def pong(a: Int, b: Int): Receive = {
      case Piłeczka =>
      if (a < b) {
      log.info(s"Pong ${a*2}" )
      sender() ! Piłeczka
      context.become(pong(a+1,b))}
      else {
        log.info(s"Pong ${a*2}" )
        context.system.terminate()}

    }
}

@main
def Gra02: Unit = {
  val system = ActorSystem("PingPong1")
  val grajek1 = system.actorOf(Props[Gracz02](), "Grajek")
  val grajek2 = system.actorOf(Props[Gracz02](), "Grajek2")
  grajek1 ! Graj02(grajek2, 6)
}

//======================================================================================
case class Graj03(target: ActorRef )

class Gracz03 extends Actor with ActorLogging{
  def receive: Receive = {
    case Graj03(target: ActorRef) => context.become(gierka(target))
  }

  def gierka(target: ActorRef): Receive = {
    case Piłeczka =>
      log.info("ping")
      target ! Piłeczka
  }
}

@main
def Gra03: Unit = {
  val system = ActorSystem("PingPong3")
  val grajek1 = system.actorOf(Props[Gracz03](), "Grajek")
  val grajek2 = system.actorOf(Props[Gracz03](), "Grajek2")
  val grajek3 = system.actorOf(Props[Gracz03](), "Grajek3")
  grajek1 ! Graj03(grajek2)
  grajek2 ! Graj03(grajek3)
  grajek3 ! Graj03(grajek1)
  grajek1 ! Piłeczka
}

//======================================================================================
case class Graj04( target: ActorRef )

class Gracz04 extends Actor {
    def receive: Receive = {
    case Graj03(target: ActorRef) => context.become(gierka(target))
  }

  def gierka(target: ActorRef): Receive = {
    case Piłeczka =>
      log.info("ping")
      target ! Piłeczka
  }
}

@main def Gra04:Unit = {
  val system = ActorSystem("PingPongCircleSystem")

  val liczbaGraczy = 9

  val gracze = (1 to liczbaGraczy).map { i =>
    system.actorOf(Props[Gracz01](), s"gracz$i")
  }.toList

  for (i <- 0 until liczbaGraczy) {
    val nastepnyIndex = (i + 1) % liczbaGraczy
    gracze(i) ! Graj03(gracze(nastepnyIndex))
  }

  gracze(0) ! Piłeczka
}