file://<WORKSPACE>/2021-2022/kolokwium_1/src/main/scala/Zad01.scala
### java.lang.AssertionError: NoDenotation.owner

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.3
Classpath:
<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.3/scala3-library_3-3.3.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.12/scala-library-2.13.12.jar [exists ]
Options:



action parameters:
offset: 643
uri: file://<WORKSPACE>/2021-2022/kolokwium_1/src/main/scala/Zad01.scala
text:
```scala
/*
  UWAGA! Uzupełnij kod funkcji „ranking” zgodnie z treścią zadania.
         Z poziomu SBT wydaj polecenie „test” żeby sprawdzić, czy
         Twoje rozwiązanie przechodzi przygotowane testy jednostkowe.
         Możesz dzięki temu nie tworzyć „programu głównego”.
*/

// def ranking(): List[(Int, Int)] = {
//   val input = io.Source
//     .fromResource("test.txt")
//     .getLines()
//     .toList
  
// }

@main
def zadanie_1: Unit = {


val input = io.Source
.fromResource("test.txt")
.getLines()
.toList

val input_bezID = input.drop(1)
val listy_z_input = input_bezID.map(element => element.split(" ").toList.drop(1))
val pierwsze_[@@]
val curr = (1, listy_z_input.fold(List.empty[Int]){(aacc, element) => element.head :: aacc})


    
  // """
  // Nie ma potrzeby definiowania ani uruchamiania funkcji @main.

  //   Zamiast polecenia „run” możesz wykorzystać polecenie „test”, które
  //   sprawdzi poprawność Twoich rozwiązań i zgłosi ewentualne problemy.

  // Oczywiście jeśli bardzo chcesz to możesz użyć funkcji @main
  // do „ręcznego” sprawdzania swoich rozwiązań.
  // """
  println(curr)
}

```



#### Error stacktrace:

```
dotty.tools.dotc.core.SymDenotations$NoDenotation$.owner(SymDenotations.scala:2607)
	scala.meta.internal.pc.SignatureHelpProvider$.isValid(SignatureHelpProvider.scala:83)
	scala.meta.internal.pc.SignatureHelpProvider$.notCurrentApply(SignatureHelpProvider.scala:96)
	scala.meta.internal.pc.SignatureHelpProvider$.$anonfun$1(SignatureHelpProvider.scala:48)
	scala.collection.StrictOptimizedLinearSeqOps.dropWhile(LinearSeq.scala:280)
	scala.collection.StrictOptimizedLinearSeqOps.dropWhile$(LinearSeq.scala:278)
	scala.collection.immutable.List.dropWhile(List.scala:79)
	scala.meta.internal.pc.SignatureHelpProvider$.signatureHelp(SignatureHelpProvider.scala:48)
	scala.meta.internal.pc.ScalaPresentationCompiler.signatureHelp$$anonfun$1(ScalaPresentationCompiler.scala:414)
```
#### Short summary: 

java.lang.AssertionError: NoDenotation.owner