file://<WORKSPACE>/2021-2022/kolokwium_1/src/main/scala/Zad02.scala
### java.lang.AssertionError: assertion failed: phase parser has already been used once; cannot be reused

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.3
Classpath:
<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.3/scala3-library_3-3.3.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.12/scala-library-2.13.12.jar [exists ]
Options:



action parameters:
uri: file://<WORKSPACE>/2021-2022/kolokwium_1/src/main/scala/Zad02.scala
text:
```scala
import javax.swing.text.html.HTML
/*
  UWAGA! Uzupełnij kod funkcji „group” zgodnie z treścią zadania.
         Z poziomu SBT wydaj polecenie „test” żeby sprawdzić, czy
         Twoje rozwiązanie przechodzi przygotowane testy jednostkowe.
         Możesz dzięki temu nie tworzyć „programu głównego”.
*/

def group[A](list: List[A])(len: Int, shift: Int = 1): List[List[A]] = {
    @annotation.tailrec
    def grouphelp(rem: List[A], acc: List[A], shift: Int, accList: List[A], result: List[List[A]] ) :  List[List[A]] = rem match {
      case Nil => accList match {case _ => grouphelp(accList, List.empty[A], shift, accList: List[A], acc :: result)
      case Nil => reverse(acc :: result)}
      case h :: tail if (acc.length<len)=> if (shift > acc.length) grouphelp(tail, h :: acc, shift, accList, result ) else grouphelp(tail, h :: acc, shift, h :: accList, result)
      case h :: tail => grouphelp(tail, acc, shift, h :: accList, result )
  }

  grouphelp(list, List.empty[A], shift, List.empty[A], List.empty[List[A]])
}

def reverse[A](list: List[A]): List[A] = {
  @annotation.tailrec
  def pomocrev[A](list: List[A], acc: List[A]):List[A] = (list) match {
    case Nil => acc
    case head :: t => pomocrev(t, head :: acc)
  }

  pomocrev(list, Nil)
}

/*
  SUGESTIA. Być może ułatwisz sobie rozwiązanie zadania, jeśli „wewnątrz”
    funkcji „group” zdefiniujesz pewną liczbę funkcji pomocniczych. Pamiętaj,
    że jeśli będą one używały rekurencji to musi ona być „ogonowa“.
*/

@main def zad2: Unit = {
  val list = List(1,2,3,4,5,6,7)
    println(group(list)(8, 1) == List(list))
    println(group(list)(8, 2) == List(list))
    println(group(list)(8, 7) == List(list))
    println(group(list)(8, 14) == List(list))
}
```



#### Error stacktrace:

```
scala.runtime.Scala3RunTime$.assertFailed(Scala3RunTime.scala:8)
	dotty.tools.dotc.core.Phases$Phase.init(Phases.scala:406)
	dotty.tools.dotc.core.Phases$Phase.init(Phases.scala:420)
	dotty.tools.dotc.core.Phases$PhasesBase.usePhases(Phases.scala:168)
	dotty.tools.dotc.core.Phases$PhasesBase.usePhases$(Phases.scala:37)
	dotty.tools.dotc.core.Contexts$ContextBase.usePhases(Contexts.scala:852)
	dotty.tools.dotc.Run.compileUnits$$anonfun$1(Run.scala:231)
	dotty.tools.dotc.Run.compileUnits$$anonfun$adapted$1(Run.scala:279)
	dotty.tools.dotc.util.Stats$.maybeMonitored(Stats.scala:71)
	dotty.tools.dotc.Run.compileUnits(Run.scala:279)
	dotty.tools.dotc.Run.compileSources(Run.scala:194)
	dotty.tools.dotc.interactive.InteractiveDriver.run(InteractiveDriver.scala:165)
	scala.meta.internal.pc.MetalsDriver.run(MetalsDriver.scala:45)
	scala.meta.internal.pc.SemanticdbTextDocumentProvider.textDocument(SemanticdbTextDocumentProvider.scala:34)
	scala.meta.internal.pc.ScalaPresentationCompiler.semanticdbTextDocument$$anonfun$1(ScalaPresentationCompiler.scala:217)
```
#### Short summary: 

java.lang.AssertionError: assertion failed: phase parser has already been used once; cannot be reused