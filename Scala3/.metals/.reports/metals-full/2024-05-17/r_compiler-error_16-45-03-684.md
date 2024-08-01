file://<WORKSPACE>/2022-2023/kolokwium_1/src/main/scala/Zad_2.scala
### dotty.tools.dotc.core.TypeError$$anon$1: Toplevel definition reverse is defined in
  <WORKSPACE>/kolekcjerekurencyjnie/src/main/scala/Main.scala
and also in
  <WORKSPACE>/2021-2022/kolokwium_1/src/main/scala/Zad02.scala
One of these files should be removed from the classpath.

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.3
Classpath:
<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.3/scala3-library_3-3.3.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.12/scala-library-2.13.12.jar [exists ]
Options:



action parameters:
offset: 1254
uri: file://<WORKSPACE>/2022-2023/kolokwium_1/src/main/scala/Zad_2.scala
text:
```scala
//==========================================================================
// Metoda porównuje napisy zgodnie z polskim porządkiem alfabetycznym
// Jedyna zmiana jaka może być tutaj potrzebna to „zamiana komentarzy”
// w linijkach 9 oraz 10.
//--------------------------------------------------------------------------
def ltePL(s1: String, s2: String) = {
  import java.util.Locale
  import java.text.Collator
  val locale = new Locale("pl", "PL") // dla starszych wersji JRE/JDK
  // val locale = Locale.of("pl", "PL") // dla nowszych wersji JRE/JDK
  Collator.getInstance(locale).compare(s1, s2) <= 0
}

// Metoda nie wymaga zmian. Wczytuje dane z pliku i zwraca listę linii
def dane: List[String] = {
  import scala.io.Source
  val plik = Source.fromFile("src/main/resources/machiavelli.txt", "UTF-8")
  plik.getLines.toList
}
//==========================================================================

// Jedyna rzecz do zaimplementowania, czyli metoda „wynik”:
def wynik: List[(String, List[Int])] = {
  val lines = dane
  val wynik = lines.foldLeft(List.empty[List[String]]){(acc, elem) => elem.split("\\s+").toList +: acc}.foldLeft(List.empty[List[String]]){(acc, elem) => elem.map(_.filter(c => c.isLetter).toLowerCase) +: acc}
  val dist = @@wynik .foldLeft(List.empty[String]){(acc, elem) => elem ++ acc}.distinct
  val szkoda = wynik.zipWithIndex
  dist.map(a => (a, szkoda.filter(_._1.contains(a)).map(_._2 + 1).sorted)).sortWith {case ((word1, _), (word2, _)) => ltePL(word1, word2)}
}
// sortWith((a,b) => ltePL(a._1, b._1))
/*
  Poprawność rozwiązania należy testować (z poziomu SBT) poleceniem:
  testOnly Test2
*/

@main def zad_2: Unit = {
  // „program główny” ma znaczenie czysto pomocnicze
  if ltePL("a", "ą") then println("OK")
  else println("to nie powinno się zdarzyć…")
}

```



#### Error stacktrace:

```

```
#### Short summary: 

dotty.tools.dotc.core.TypeError$$anon$1: Toplevel definition reverse is defined in
  <WORKSPACE>/kolekcjerekurencyjnie/src/main/scala/Main.scala
and also in
  <WORKSPACE>/2021-2022/kolokwium_1/src/main/scala/Zad02.scala
One of these files should be removed from the classpath.