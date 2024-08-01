import scala.annotation.tailrec
import scala.io.Source
import scala.compiletime.ops.string

@main
def mainProg: Unit = {
  println("Hello World!")
}

def parzysta(n: Int): Boolean = {
  if (n%2 == 0) {true}
  else false
}

@main
def zad1: Unit = {
  println(parzysta(2))
}


def nwd(a: Int, b: Int): Int = {
  if(a>b){nwd(a-b, b)}
  else{
    if (a<b) nwd(a, b-a)
  else a}
}

@main
def zad2: Unit = {
  println(nwd(105,15))
}

def pierwsza(n: Int): Boolean = {
  def pomoc(a: Int, acc: Int): Boolean = {
    if(acc<=math.sqrt(a)){
    if(a%acc != 0){
      pomoc(a, acc+1)
    }
    else false}
  else true}

  pomoc(n,2)
}

@main
def zad3: Unit = {
  println(pierwsza(17159))
}


def hipoteza(n:Int): Boolean = {
  def pomocnicza(a: Int, b:Int): Boolean = {
    if(a>b) {
    if(pierwsza(a) && pierwsza(b)){
      println(a)
      println(b)
      true
    }
    else pomocnicza(a-1, b+1)
  }
    else false}
  
  if (n%2 == 0){
    pomocnicza(n-2, 2)
  }
  else false
}

@main
def zad4: Unit = {
  println(hipoteza(125367192))
}

def reverse(str: String): String = {
  @annotation.tailrec
  def helprev(st: String, acc: String): String = {
    if(st.isEmpty) acc
    else{helprev(st.tail, st.head + acc)}
  }

  helprev(str, "")
}

@main
def zad1lab3: Unit = {
  println(reverse("abcdef"))
}

def ciag(n: Int): Int = {
  @annotation.tailrec
  def pomociag (a: Int, b:Int, n:Int): Int = {
    if (n == 0){a
    }
    else pomociag(b, a+b, n-1)
  }

  pomociag(2,1,n)
}

@main
def zad2lab3: Unit = {
  println(ciag(7))
  println(ciag(0))
  println(ciag(1))
}

def tasuj(l1: List[Int], l2: List[Int]): List[Int] = {
  @annotation.tailrec
  def pomoctas(lista: List[Int], listb: List[Int], acc: List[Int]): List[Int] = (lista, listb) match {
    case (Nil,Nil) => acc
    case (x :: ogon, Nil) => pomoctas(ogon, Nil, acc :+ x)
    case (Nil, x :: ogon) => pomoctas(ogon, Nil, acc :+ x)
    case (x :: ogon1, y :: ogon2) => if (x == y) pomoctas(ogon1, ogon2, acc :+ x) else {
      if (x < y) pomoctas(ogon1, listb, acc :+ x) else pomoctas(lista, ogon2, acc :+ y)
    }
  }

  pomoctas(l1,l2,Nil)
}

@main
def zad3lab2: Unit = {
  val lista1 = List(2, 4, 3, 5)
  val lista2 = List(1, 2, 2, 3, 1, 5)
  println(tasuj(lista1,lista2))
}

val lista = List(Some(4.0), Some(-3.0), None, Some(1.0), Some(0.0))

def sumuj(l: List[Option[Double]]): Option[Double] = {
    @annotation.tailrec
    def sumpom(l: List[Option[Double]], acc: Double): Option[Double] = l match {
      case Nil => if(acc == 0.0) None else Some(acc)
      case None :: tail => sumpom(tail, acc)
      case Some(x) :: tail => if (x > 0) sumpom(tail, acc + x) else sumpom(tail, acc)
    }

  sumpom(l, 0.0)
}


@main
def zad1lab4: Unit = {
  val lista = List(Some(4.0), Some(-3.0), None, Some(1.0), Some(0.0))
  println(sumuj(lista))
}

def maksimum(l1: List[Double], l2: List[Double]): List[Double] = {
    def makspomoc (l1: List[Double], l2: List[Double], acc: List[Double]): List[Double] = (l1, l2) match {
      case (Nil, Nil) => acc
      case (Nil, x :: ogon) => makspomoc(Nil, ogon, acc :+ x)
      case (x :: ogon, Nil) => makspomoc(ogon, Nil, acc :+ x)
      case (x :: ogon, y :: ogonek) => if(x>y) makspomoc(ogon, ogonek, acc :+ x) else makspomoc(ogon, ogonek, acc :+ y)
    }
  makspomoc(l1,l2,Nil)
}

@main
def zad2lab4: Unit = {
  val lista1 = List(2.0, -1.6, 3.2, 5.4, -8.4)
  val lista2 = List(3.3, -3.1, 3.2, -4.1, -0.4, 5.5)
  println(maksimum(lista1, lista2))
}

def usun[A](l: List[A], el: A): List[A] = {
  def usunpom[A](l: List[A], acc: List[A], el: A): List[A] = l match {
    case Nil => acc
    case x :: ogon => if (x == el) usunpom(ogon, acc, el) else  usunpom(ogon, acc :+ x, el)
  }

  usunpom(l, Nil, el)
}

@main
def zad3lab4: Unit = {
  val lista = List(2, 1, 4, 1, 3, 3, 1, 2)
  println(usun(lista, 1))
}

def divide[A](l: List[A]): (List[A], List[A]) = {
  @annotation.tailrec
  def divideHelper(list: List[A], oddIndexed: List[A], evenIndexed: List[A], index: Int): (List[A], List[A]) = list match {
    case Nil => (evenIndexed.reverse, oddIndexed.reverse)
    case head :: tail =>
      if (index % 2 == 0) divideHelper(tail, oddIndexed, head :: evenIndexed, index + 1)
      else divideHelper(tail, head :: oddIndexed, evenIndexed, index + 1)
  }

  divideHelper(l, Nil, Nil, 0)
}

@main
def zad4lab4: Unit = {
  val lista = List(1, 3, 5, 6, 7)
  println(divide(lista))
}

def oczyść[A](l: List[A]): List[A] = {
  def pomococzysc[A](l: List[A], acc: List[A]): List[A] = (l, acc) match {
     case (Nil, _ ) => acc.reverse
     case (x :: ogon, Nil) => pomococzysc(ogon, x :: acc)
     case (x:: ogon, y :: ogonek) => if (x == y) pomococzysc(ogon, acc) else pomococzysc(ogon, x :: acc)
  }

  pomococzysc(l, Nil)
}

@main
def zad1lab5: Unit = {
  val lista = List(1, 1, 2, 4, 4, 4, 1, 3)
  println(oczyść(lista))
}

def skompresuj[A](l: List[A]): List[(A, Int)] = {
  @annotation.tailrec
  def compressHelper(currentList: List[A], currentElement: Option[A], count: Int, acc: List[(A, Int)]): List[(A, Int)] = currentList match {
    case Nil => 
      currentElement match {
        case Some(el) => (el, count) :: acc
        case None => acc
      }
    case h :: t =>
      currentElement match {
        case Some(el) if el == h => compressHelper(t, currentElement, count + 1, acc)
        case Some(el) => compressHelper(t, Some(h), 1, (el, count) :: acc)
        case None => compressHelper(t, Some(h), 1, acc)
      }
  }

  compressHelper(l, None, 0, Nil)
}

@main
def zad2lab5: Unit = {
val lista = List('a', 'a', 'b', 'c', 'c', 'c', 'a', 'a', 'b', 'd')
println(skompresuj(lista))}

def isOrdered[A](leq: (A, A) => Boolean)(l: List[A]): Boolean = {
  @annotation.tailrec
  def checkOrdered(prev: A, list: List[A]): Boolean = list match {
    case Nil => true
    case head :: tail => 
      if (leq(prev, head)) checkOrdered(head, tail)
      else false }

  l match {
    case head :: tail => checkOrdered(head, tail)
}}

def zad3lab5: Unit = {
val lt = (m: Int, n: Int) => m < n
val lte = (m: Int, n: Int) => m <= n
val lista = List(1, 2, 2, 5)
isOrdered(lt)(lista)
isOrdered(lte)(lista)}

def applyForAll[A, B](f: A => B)(l: List[A]): List[B] = {
  @annotation.tailrec
  def helpapply(l: List[A], acc: List[B]): List[B] = l match {
    case Nil => acc.reverse
    case h :: t => helpapply(t, f(h) :: acc)
  }

  helpapply(l, Nil)
}

@main
def zad4lab5: Unit = {
  val lista = List(1, 3, 5)
  val f = (n: Int) => n + 3
  println(applyForAll(f)(lista))
}


def subseq[A](list: List[A], begIdx: Int, endIdx: Int): List[A] = {
   list.drop(begIdx).take(endIdx - begIdx)
}

@main
def zad1lab6: Unit = {
  val lista = List(1, 2, 3, 4, 5, 6)
  println(subseq(lista, 2, 5))
}

def pairPosNeg(list: List[Double]): (List[Double], List[Double]) = {
  val nonZeros = list.filter(_ != 0.0)
  val (negatives, positives) = nonZeros.partition(_ < 0)
  (negatives, positives)
}

@main
def zad2lab6: Unit = {
val numbers = List(-3.5, 0.0, 4.5, -1.0, 0.0, 2.2, -0.1)
println(pairPosNeg(numbers))}

def deStutter[A](list: List[A]): List[A] = {
  list.foldLeft(List.empty[A]){(acc, elem) => if (acc.isEmpty || acc.head != elem ) elem :: acc else acc
  }
}

@main
def zad3lab6: Unit = {
val l = List(1, 1, 2, 4, 4, 4, 1, 3)
println(deStutter(l))}

def remElems[A](list: List[A], k: Int): List[A] = {
   val essa = list.zipWithIndex.filter{case (_ , x) => x%2 == 0}.map{case (x , _) => x}
   {essa}
}


@main
def zad4lab6: Unit = {
val l = List(1, 1, 2, 4, 4, 4, 1, 3)
println(remElems(l,2))}

// def freqMax[A](list: List[A]): (Set[A], Int) = {
//   val sortedList = list.sorted

//   val compressed = sortedList.foldLeft(List.empty[(A, Int)]) { (acc, elem, index) =>
//     case (Nil, element, acc)
    
//   }

//   val maxFreq = compressed.map(_._2).max

//   val maxElements = compressed.filter(_._2 == maxFreq).map(_._1).toSet

//   (maxElements, maxFreq)}

def sumOpts(l: List[Option[Double]]): Option[Double] = {
    l.foldRight(Option.empty[Double]) {
      case (Some(elem), Some(acc)) => Some(acc + elem)
      case (None, acc) => acc
      case (Some(elem), None) => Some(elem)
    }
}


@main
def zad1lab7: Unit = {
  val lista = List(Some(5.4), Some(-2.0), Some(1.0), None, Some(2.6))
println( sumOpts(lista))
println( sumOpts(List()))            
println( sumOpts(List(None, None)))
}

def position[A](l: List[A], el: A): Option[Int] = {
    l.zipWithIndex.foldLeft(Option.empty[Int]) {
      case (acc, (element, index)) if acc.isEmpty =>
        if (element == el) Some(index) else None
      case (acc, _) => acc
    }
}

@main
def zad2lab7: Unit = {
val lista = List(2, 1, 1, 5)
println(position(lista, 1)) // ==> Some(1)
println(position(lista, 3)) // ==> None
}

def indices[A](l: List[A], el: A): Set[Int] = {
    l.zipWithIndex.foldLeft(Set.empty[Int]) {
      case (acc, (element, index)) => if (element == el) acc + index else acc
      case (acc, _) => acc
    }
}

@main
def zad3lab7: Unit = {
val lista = List(1, 2, 1, 1, 5)
println(indices(lista, 1)) // ==> Set(0, 2, 3).
println(indices(lista, 7)) // ==> Set()
}

def swap[A](l: List[A]): List[A] = {
  val indexed = l.zipWithIndex
  val (odd, even) = indexed.partition(_._2 % 2 == 1)
  val swappedPairs = odd.map { case (elem, idx) => (elem, idx - 1) } ++ even.map { case (elem, idx) => (elem, idx + 1) }
  swappedPairs.sortBy(_._2).map(_._1)
}

@main
def zad4lab7: Unit = {
  val lista = List(1, 2, 3, 4, 5)
  println(swap(lista))
} 


def freq[A](l: List[A]): List[(A, Int)] = {
  val grouped = l.groupBy(identity)
  val frequencies = grouped.map { case (element, occurrences) => (element, occurrences.size) }
  frequencies.toList.sortBy(-_._2)
}


@main
def zad6lab7(): Unit = {
  val lista = List('a', 'b', 'a', 'c', 'c', 'a')
  println(freq(lista)) // ==> List(('a', 3), ('c', 2), ('b', 1))
}


def Entry(zawodnik: (String, String), wdziek: List[Int], spryt: List[Int]): (String, String, Double, Double) = {
  val noty_w = wdziek.length
  val noty_s = spryt.length
  val pkt_wdziek = wdziek.foldLeft(0)(_ + _)
  val pkt_spryt = spryt.foldLeft(0)(_ + _)
  val avg_wdziek = if (noty_w != 0) pkt_wdziek.toDouble / noty_w else 0.0
  val avg_spryt = if (noty_s != 0) pkt_spryt.toDouble / noty_s else 0.0
  (zawodnik._1, zawodnik._2, avg_wdziek, avg_spryt)
}

@main
def zad2lab8: Unit ={
  val zawodnicy = List(
  (("Jan", "Kowalski"), List(7, 8, 9), List(6, 7, 8)),
  (("Jacek", "Kloss"), List(8, 6, 7), List(9, 7, 6)),
  (("Anna", "Nowak"), List(9, 9, 8), List(8, 8, 7)),
  (("Maria", "Wiśniewska"), List(6, 7, 6), List(7, 8, 8)),
  (("Piotr", "Zieliński"), List(8, 7, 9), List(9, 9, 8))
)
  val entries = zawodnicy.foldLeft(List.empty[(String, String, Double, Double)]){
    (acc, elem) => Entry(elem._1, elem._2, elem._3) :: acc
  }
  
  println(entries.sortBy(entry => -entry._3 - entry._4).zipWithIndex.map(elem => (elem._1, elem._2 + 1)))
}

// def freqzad9[A](l: List[A]): List[A] = {
//   val grouped = l.groupBy(identity)
//   grouped.map { case (element, occurrences) => (element, occurrences) }.foldLeft(List.empty[Char]){ (acc, elem) =>._2 :: acc
//   }
// }


def czestotliwosc[A](l: List[A]): List[(A, Int)] = {
  val grouped = l.groupBy(identity)
  val frequencies = grouped.map { case (element, occurrences) => (element, occurrences.size) }
  frequencies.toList.sortBy(-_._2)
}


@main
def zad1lab9: Unit ={
val line = Source.fromFile("nazwiska.txt").getLines().toList.map{nazwisko => nazwisko.split(" ").last.toLowerCase}
val line_val = line.foldLeft(List.empty[(String, Int)]){ (acc, element) =>  (element, element.toList.distinct.length) :: acc
}.sortBy(_._2)
val intera = line_val.head._2
val odp = line_val.filter(_._2 == intera).foldLeft(List.empty[String]){(acc, element) => element._1 :: acc}
println(odp)

val placeholder = czestotliwosc(Source.fromFile("nazwiska.txt").toList.filter(_.isLetter).map(_.toLower)).foldLeft("")((acc, elem) => acc + elem._1.toString + ": " + ("*" * elem._2)+ "\n")

println(placeholder)
}

