file://<WORKSPACE>/powtorka/powtorka/src/main/scala/Main.scala
### java.lang.IndexOutOfBoundsException: 0

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.3
Classpath:
<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.3/scala3-library_3-3.3.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.12/scala-library-2.13.12.jar [exists ]
Options:



action parameters:
offset: 7601
uri: file://<WORKSPACE>/powtorka/powtorka/src/main/scala/Main.scala
text:
```scala
import scala.annotation.tailrec
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

def freqMax[A](list: List[A]): (Set[A], Int) = {
  val sortedList = list.sorted

  val compressed = sortedList.foldLeft(List.empty[(A, Int)]) {
    case (Nil, element) => List(@@)
  }

  val maxFreq = compressed.map(_._2).max

  val maxElements = compressed.filter(_._2 == maxFreq).map(_._1).toSet

  (maxElements, maxFreq)}
```



#### Error stacktrace:

```
scala.collection.LinearSeqOps.apply(LinearSeq.scala:131)
	scala.collection.LinearSeqOps.apply$(LinearSeq.scala:128)
	scala.collection.immutable.List.apply(List.scala:79)
	dotty.tools.dotc.util.Signatures$.countParams(Signatures.scala:501)
	dotty.tools.dotc.util.Signatures$.applyCallInfo(Signatures.scala:186)
	dotty.tools.dotc.util.Signatures$.computeSignatureHelp(Signatures.scala:94)
	dotty.tools.dotc.util.Signatures$.signatureHelp(Signatures.scala:63)
	scala.meta.internal.pc.MetalsSignatures$.signatures(MetalsSignatures.scala:17)
	scala.meta.internal.pc.SignatureHelpProvider$.signatureHelp(SignatureHelpProvider.scala:51)
	scala.meta.internal.pc.ScalaPresentationCompiler.signatureHelp$$anonfun$1(ScalaPresentationCompiler.scala:414)
```
#### Short summary: 

java.lang.IndexOutOfBoundsException: 0