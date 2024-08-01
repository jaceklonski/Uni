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

case object Piłeczka
case class Graj01(przeciwnik: ActorRef)
case class Graj02(przeciwnik: ActorRef, maks: Int)
case class Graj03(przeciwnik: ActorRef)

class Gracz01 extends Actor with ActorLogging {
  
  def receive: Receive = {
    case Graj03(przeciwnik: ActorRef) =>
      log.info("Rozpoczynam grę.")
      context.become(zagraj(przeciwnik))
    
    
    case Graj02(przeciwnik, maks) =>
      log.info(s"Serwis odbic $maks")
      przeciwnik ! Piłeczka
      context.become(odbicie(przeciwnik, maks, 1))

    case Graj01(przeciwnik: ActorRef) =>
      log.info("Rozpoczynam grę.")
      przeciwnik ! Piłeczka
      context.become(zagraj(przeciwnik))

    case Piłeczka =>
      log.info("Ping")
      sender() ! Piłeczka
  }
  
  def zagraj(przeciwnik: ActorRef): Receive = {
    case Piłeczka => {
      log.info("Pong")
      przeciwnik ! Piłeczka
    }
  }

  def odbicie(przeciwnik: ActorRef, maks: Int, licznik: Int): Receive = {
    case Piłeczka =>
      if (licznik < maks) {
      log.info(s"odbicie $licznik")
      przeciwnik ! Piłeczka
      context.become(odbicie(przeciwnik, maks, licznik + 1))}
      
      else{
      log.info(s"odbicie $licznik koniec.")
      context.system.terminate()}
  }}



@main def mainPong: Unit = {
  val system = ActorSystem("PingPongSystem")
  val gracz1 = system.actorOf(Props[Gracz01](), "gracz1")
  val gracz2 = system.actorOf(Props[Gracz01](), "gracz2")
  val gracz3 = system.actorOf(Props[Gracz01](), "gracz3")

  // gracz1 ! Graj01(gracz2)
  // gracz1 ! Graj02(gracz2, 5)}

  gracz1 ! Graj03(gracz2)
  gracz2 ! Graj03(gracz3)
  gracz3 ! Graj03(gracz1)
  gracz1 ! Piłeczka
}

@main def PainPong:Unit = {
  val system = ActorSystem("PingPongCircleSystem")

  val liczbaGraczy = 7

  val gracze = (1 to liczbaGraczy).map { i =>
    system.actorOf(Props[Gracz01](), s"gracz$i")
  }.toList

  for (i <- 0 until liczbaGraczy) {
    val nastepnyIndex = (i + 1) % liczbaGraczy
    gracze(i) ! Graj03(gracze(nastepnyIndex))
  }

  gracze.head ! Piłeczka
}