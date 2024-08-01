file://<WORKSPACE>/powtorka/src/main/scala/Main.scala
### java.lang.IllegalArgumentException: Comparison method violates its general contract!

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.3
Classpath:
<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.3/scala3-library_3-3.3.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.12/scala-library-2.13.12.jar [exists ]
Options:



action parameters:
offset: 3570
uri: file://<WORKSPACE>/powtorka/src/main/scala/Main.scala
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
  def usunpom[A](l: List[A], acc: List[A] el: A): List[A] = l match {
    case Nil => acc
    case x :: ogon => if (x == el) usunpom(ogon, a@@) 

  }
}
```



#### Error stacktrace:

```
java.base/java.util.TimSort.mergeLo(TimSort.java:781)
	java.base/java.util.TimSort.mergeAt(TimSort.java:518)
	java.base/java.util.TimSort.mergeCollapse(TimSort.java:448)
	java.base/java.util.TimSort.sort(TimSort.java:245)
	java.base/java.util.Arrays.sort(Arrays.java:1233)
	scala.collection.SeqOps.sorted(Seq.scala:728)
	scala.collection.SeqOps.sorted$(Seq.scala:719)
	scala.collection.immutable.List.scala$collection$immutable$StrictOptimizedSeqOps$$super$sorted(List.scala:79)
	scala.collection.immutable.StrictOptimizedSeqOps.sorted(StrictOptimizedSeqOps.scala:78)
	scala.collection.immutable.StrictOptimizedSeqOps.sorted$(StrictOptimizedSeqOps.scala:78)
	scala.collection.immutable.List.sorted(List.scala:79)
	scala.meta.internal.pc.completions.Completions.completions(Completions.scala:210)
	scala.meta.internal.pc.completions.CompletionProvider.completions(CompletionProvider.scala:86)
	scala.meta.internal.pc.ScalaPresentationCompiler.complete$$anonfun$1(ScalaPresentationCompiler.scala:147)
```
#### Short summary: 

java.lang.IllegalArgumentException: Comparison method violates its general contract!