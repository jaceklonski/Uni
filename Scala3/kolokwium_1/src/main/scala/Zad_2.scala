// //======================================================================================
// // Definicje aliasów „Lokata” i „Filtr” oraz funkcji „dane” znajdują się w plikach
// // „Aliasy.scala” oraz „Funkcje.scala”. Zawartości tych plików nie wolno modyfikować.
// //======================================================================================

// // Jedyna rzecz do zaimplementowania, czyli funkcja „oczyść”:
// def oczyść(lista: List[Lokata], wzorzec: String, filtr: Filtr): List[Lokata] = {
//   require(wzorzec.length == 5)
//   require(filtr.toList.forall(el => Set(0, 1, 2).contains(el)))
//   // Poniżej, zamiast Nil oczywiście należy umieścić rozwiązanie zadania
//   val wzor = wzorzec.split("").toList
//   lista.filter((elem) => elem._2.contains(filtr.map((i) => wzorzec(i)))) //??
// }

// //======================================================================================
// //  UWAGA! Poprawność rozwiązania należy testować (z poziomu SBT) poleceniem:
// //
// //    testOnly Test2
// //
// //======================================================================================

// @main def zad_2: Unit = {
//   // „program główny” ma znaczenie czysto pomocnicze
//   // do przetestowania działania funkcji można wykorzystać dane poniżej
//   val lista = dane.map(s => (0, s, 0.0))
//   // dane z zadania Zad_1 pozwalają na ciekawsze zastosowania
//   //val lista = sortuj
//   println(oczyść(lista, "great", (2, 2, 2, 2, 2)))
// }
