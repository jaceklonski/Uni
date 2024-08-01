file://<WORKSPACE>/powtorka/src/main/scala/Main.scala
### java.lang.AssertionError: NoDenotation.owner

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.3
Classpath:
<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.3/scala3-library_3-3.3.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.12/scala-library-2.13.12.jar [exists ]
Options:



action parameters:
offset: 1624
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
  def pomoctas(lista: List[Int], lista: Lista[@@])
}
```



#### Error stacktrace:

```
dotty.tools.dotc.core.SymDenotations$NoDenotation$.owner(SymDenotations.scala:2607)
	scala.meta.internal.pc.SignatureHelpProvider$.isValid(SignatureHelpProvider.scala:83)
	scala.meta.internal.pc.SignatureHelpProvider$.notCurrentApply(SignatureHelpProvider.scala:94)
	scala.meta.internal.pc.SignatureHelpProvider$.$anonfun$1(SignatureHelpProvider.scala:48)
	scala.collection.StrictOptimizedLinearSeqOps.dropWhile(LinearSeq.scala:280)
	scala.collection.StrictOptimizedLinearSeqOps.dropWhile$(LinearSeq.scala:278)
	scala.collection.immutable.List.dropWhile(List.scala:79)
	scala.meta.internal.pc.SignatureHelpProvider$.signatureHelp(SignatureHelpProvider.scala:48)
	scala.meta.internal.pc.ScalaPresentationCompiler.signatureHelp$$anonfun$1(ScalaPresentationCompiler.scala:414)
```
#### Short summary: 

java.lang.AssertionError: NoDenotation.owner