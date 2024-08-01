file://<WORKSPACE>/2021-2022/kolokwium_1/src/main/scala/Zad02.scala
### java.lang.NullPointerException: Cannot invoke "dotty.tools.dotc.core.Phases$Phase.start()" because "phase" is null

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
      case Nil => reverse(acc ::result)}
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
dotty.tools.dotc.core.Contexts$FreshContext.setPhase(Contexts.scala:715)
	dotty.tools.dotc.core.Denotations$SingleDenotation.goForward$1(Denotations.scala:825)
	dotty.tools.dotc.core.Denotations$SingleDenotation.current(Denotations.scala:872)
	dotty.tools.dotc.core.Symbols$Symbol.recomputeDenot(Symbols.scala:120)
	dotty.tools.dotc.core.Symbols$Symbol.computeDenot(Symbols.scala:114)
	dotty.tools.dotc.core.Symbols$Symbol.denot(Symbols.scala:107)
	dotty.tools.dotc.core.Scopes$Scope.denotsNamed(Scopes.scala:154)
	dotty.tools.dotc.core.SymDenotations$ClassDenotation.computeMembersNamed(SymDenotations.scala:2145)
	dotty.tools.dotc.core.SymDenotations$PackageClassDenotation.recur$5(SymDenotations.scala:2502)
	dotty.tools.dotc.core.SymDenotations$PackageClassDenotation.computeMembersNamed(SymDenotations.scala:2564)
	dotty.tools.dotc.core.SymDenotations$ClassDenotation.membersNamed(SymDenotations.scala:2115)
	dotty.tools.dotc.core.SymDenotations$ClassDenotation.findMember(SymDenotations.scala:2166)
	dotty.tools.dotc.core.Types$Type.go$1(Types.scala:721)
	dotty.tools.dotc.core.Types$Type.findMember(Types.scala:900)
	dotty.tools.dotc.core.Types$Type.memberBasedOnFlags(Types.scala:704)
	dotty.tools.dotc.core.Types$Type.member(Types.scala:688)
	dotty.tools.dotc.typer.ProtoTypes$SelectionProto.liftedTree1$1(ProtoTypes.scala:206)
	dotty.tools.dotc.typer.ProtoTypes$SelectionProto.isMatchedBy(ProtoTypes.scala:228)
	dotty.tools.dotc.core.TypeComparer.isMatchedByProto(TypeComparer.scala:2057)
	dotty.tools.dotc.core.TypeComparer.firstTry$1(TypeComparer.scala:339)
	dotty.tools.dotc.core.TypeComparer.recur(TypeComparer.scala:1471)
	dotty.tools.dotc.core.TypeComparer.isSubType(TypeComparer.scala:208)
	dotty.tools.dotc.core.TypeComparer.isSubType(TypeComparer.scala:218)
	dotty.tools.dotc.core.TypeComparer.topLevelSubType(TypeComparer.scala:128)
	dotty.tools.dotc.core.TypeComparer.testSubType(TypeComparer.scala:144)
	dotty.tools.dotc.core.TypeComparer$.testSubType(TypeComparer.scala:2957)
	dotty.tools.dotc.typer.Typer.adaptNoArgsOther$1(Typer.scala:3989)
	dotty.tools.dotc.typer.Typer.adaptNoArgs$1(Typer.scala:4071)
	dotty.tools.dotc.typer.Typer.adapt1(Typer.scala:4277)
	dotty.tools.dotc.typer.Typer.adapt(Typer.scala:3590)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3187)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3191)
	dotty.tools.dotc.typer.Typer.typedExpr(Typer.scala:3303)
	dotty.tools.dotc.typer.Typer.typeSelectOnTerm$1(Typer.scala:755)
	dotty.tools.dotc.typer.Typer.typedSelect(Typer.scala:793)
	dotty.tools.dotc.typer.Typer.typedNamed$1(Typer.scala:3019)
	dotty.tools.dotc.typer.Typer.typedUnadapted(Typer.scala:3114)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3187)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3191)
	dotty.tools.dotc.typer.Typer.typedExpr(Typer.scala:3303)
	dotty.tools.dotc.typer.Typer.typeSelectOnTerm$1(Typer.scala:755)
	dotty.tools.dotc.typer.Typer.typedSelect(Typer.scala:793)
	dotty.tools.dotc.typer.Typer.typedNamed$1(Typer.scala:3019)
	dotty.tools.dotc.typer.Typer.typedUnadapted(Typer.scala:3114)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3187)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3191)
	dotty.tools.dotc.typer.Typer.typedExpr(Typer.scala:3303)
	dotty.tools.dotc.typer.Namer.typedAheadExpr$$anonfun$1(Namer.scala:1656)
	dotty.tools.dotc.typer.Namer.typedAhead(Namer.scala:1646)
	dotty.tools.dotc.typer.Namer.typedAheadExpr(Namer.scala:1656)
	dotty.tools.dotc.typer.Namer$Completer.$anonfun$15(Namer.scala:794)
	dotty.tools.dotc.typer.Typer.typedImportQualifier(Typer.scala:2784)
	dotty.tools.dotc.typer.Namer$Completer.typeSig(Namer.scala:794)
	dotty.tools.dotc.typer.Namer$Completer.completeInCreationContext(Namer.scala:934)
	dotty.tools.dotc.typer.Namer$Completer.complete(Namer.scala:814)
	dotty.tools.dotc.core.SymDenotations$SymDenotation.completeFrom(SymDenotations.scala:174)
	dotty.tools.dotc.core.Denotations$Denotation.completeInfo$1(Denotations.scala:187)
	dotty.tools.dotc.core.Denotations$Denotation.info(Denotations.scala:189)
	dotty.tools.dotc.core.SymDenotations$SymDenotation.ensureCompleted(SymDenotations.scala:393)
	dotty.tools.dotc.typer.Typer.retrieveSym(Typer.scala:2991)
	dotty.tools.dotc.typer.Typer.typedImport(Typer.scala:2787)
	dotty.tools.dotc.typer.Typer.typedUnnamed$1(Typer.scala:3062)
	dotty.tools.dotc.typer.Typer.typedUnadapted(Typer.scala:3115)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3187)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3191)
	dotty.tools.dotc.typer.Typer.traverse$1(Typer.scala:3203)
	dotty.tools.dotc.typer.Typer.typedStats(Typer.scala:3259)
	dotty.tools.dotc.typer.Typer.typedPackageDef(Typer.scala:2812)
	dotty.tools.dotc.typer.Typer.typedUnnamed$1(Typer.scala:3083)
	dotty.tools.dotc.typer.Typer.typedUnadapted(Typer.scala:3115)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3187)
	dotty.tools.dotc.typer.Typer.typed(Typer.scala:3191)
	dotty.tools.dotc.typer.Typer.typedExpr(Typer.scala:3303)
	dotty.tools.dotc.typer.TyperPhase.typeCheck$$anonfun$1(TyperPhase.scala:44)
	dotty.tools.dotc.typer.TyperPhase.typeCheck$$anonfun$adapted$1(TyperPhase.scala:50)
	scala.Function0.apply$mcV$sp(Function0.scala:42)
	dotty.tools.dotc.core.Phases$Phase.monitor(Phases.scala:440)
	dotty.tools.dotc.typer.TyperPhase.typeCheck(TyperPhase.scala:50)
	dotty.tools.dotc.typer.TyperPhase.runOn$$anonfun$3(TyperPhase.scala:84)
	scala.runtime.function.JProcedure1.apply(JProcedure1.java:15)
	scala.runtime.function.JProcedure1.apply(JProcedure1.java:10)
	scala.collection.immutable.List.foreach(List.scala:333)
	dotty.tools.dotc.typer.TyperPhase.runOn(TyperPhase.scala:84)
	dotty.tools.dotc.Run.runPhases$1$$anonfun$1(Run.scala:246)
	scala.runtime.function.JProcedure1.apply(JProcedure1.java:15)
	scala.runtime.function.JProcedure1.apply(JProcedure1.java:10)
	scala.collection.ArrayOps$.foreach$extension(ArrayOps.scala:1323)
	dotty.tools.dotc.Run.runPhases$1(Run.scala:262)
	dotty.tools.dotc.Run.compileUnits$$anonfun$1(Run.scala:270)
	dotty.tools.dotc.Run.compileUnits$$anonfun$adapted$1(Run.scala:279)
	dotty.tools.dotc.util.Stats$.maybeMonitored(Stats.scala:71)
	dotty.tools.dotc.Run.compileUnits(Run.scala:279)
	dotty.tools.dotc.Run.compileSources(Run.scala:194)
	dotty.tools.dotc.interactive.InteractiveDriver.run(InteractiveDriver.scala:165)
	scala.meta.internal.pc.MetalsDriver.run(MetalsDriver.scala:45)
	scala.meta.internal.pc.PcCollector.<init>(PcCollector.scala:44)
	scala.meta.internal.pc.PcSemanticTokensProvider$Collector$.<init>(PcSemanticTokensProvider.scala:61)
	scala.meta.internal.pc.PcSemanticTokensProvider.Collector$lzyINIT1(PcSemanticTokensProvider.scala:61)
	scala.meta.internal.pc.PcSemanticTokensProvider.Collector(PcSemanticTokensProvider.scala:61)
	scala.meta.internal.pc.PcSemanticTokensProvider.provide(PcSemanticTokensProvider.scala:90)
	scala.meta.internal.pc.ScalaPresentationCompiler.semanticTokens$$anonfun$1(ScalaPresentationCompiler.scala:110)
```
#### Short summary: 

java.lang.NullPointerException: Cannot invoke "dotty.tools.dotc.core.Phases$Phase.start()" because "phase" is null