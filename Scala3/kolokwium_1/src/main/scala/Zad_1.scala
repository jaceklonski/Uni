//======================================================================================
// Definicje aliasu „Lokata” oraz funkcji „dane” i „częstość” znajdują się w plikach
// „Aliasy.scala” oraz „Funkcje.scala”. Zawartości tych plików nie wolno modyfikować.
//======================================================================================

// Jedyna rzecz do zaimplementowania, czyli funkcja „ranking”:
def ranking: List[Lokata] = {
  
  // Poniżej, zamiast Nil oczywiście należy umieścić rozwiązanie zadania
  @annotation.tailrec
  def pomocranking(list: List[String], acc:List[(String, Double)]):List[(String, Double)] = list match {
    case Nil => acc
    case head :: next => pomocranking(next, (head, wartosc(head.toList, 0.0)) :: acc)
  }
  
  @annotation.tailrec
  def wartosc(list: List[Char], acc: Double): Double = list match {
    case Nil => acc
    case head :: next => wartosc(next, acc + częstość(head))
  }

  // def sortuj(List: List[(String, Double)]) = {}

  pomocranking(dane, Nil)

  def zipWithIndex(l: List[(String, Double)]): List[(Int, String, Double)] = {
  def zipHelper(l:List[String, Double], acc: List[(Int, String, Double)], index: Int): List[(Int, String, Double)] = l match {
    case Nil => acc
    case head :: next => zipHelper(next, (index, head._1, head._2) :: acc, index + 1)
  }

  zipHelper(l, Nil, 1)}

  zipWithIndex(pomocranking(dane, Nil))
}



//======================================================================================
//  UWAGA! Poprawność rozwiązania należy testować (z poziomu SBT) poleceniem:
//
//    testOnly Test1
//
//======================================================================================

@main
def zad_1: Unit = {
  println(ranking)

}
