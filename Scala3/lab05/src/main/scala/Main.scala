// Laboratorium 05

// Uwaga! Rozwiązując poniższe zadania wykorzystaj mechanizmy dopasowania wzorca. Nie używaj operacji head ani tail.

// Zadanie 1. Korzystając z rekurencji ogonowej zdefiniuj generyczną funkcję:

// def oczyść[A](l: List[A]): List[A] = {
//     Nil
// }

// która w liście l zamienia wszystkie podciągi powtarzających się elementów ich pojedynczymi wystąpieniami.

// Przykład:

// val lista = List(1, 1, 2, 4, 4, 4, 1, 3)
// oczyść(lista) // ==> List(1, 2, 4, 1, 3)

// Zadanie 2.

// Korzystając z rekurencji ogonowej zdefiniuj generyczną funkcję:

// def skompresuj[A](l: List[A]): List[(A, Int)] = {
//     Nil
// }

// która zastępuje każdy „podciąg” powtarzających się wystąpień elementu el na liście l parą (el, długość_podciągu).

// Przykład:

// val lista = List('a', 'a', 'b', 'c', 'c', 'c', 'a', 'a', 'b', 'd')
// skompresuj(lista) // ==> List(('a', 2), ('b', 1), ('c', 3), ('a', 2), ('b', 1), ('d', 1))

// Zadanie 3.

// Zdefiniuj generyczną funkcję rekurencyjną:

// def isOrdered[A](leq: (A, A) => Boolean)(l: List[A]): Boolean = {
//     true
// }

// która, dla zadanego porządku leq, sprawdzi czy elementy listy l ułożone są zgodnie z nim. W definicji użyj rekurencji ogonowej.

// Przykład:

// val lt = (m: Int, n: Int) => m < n
// val lte = (m: Int, n: Int) => m <= n
// val lista = List(1, 2, 2, 5)
// isOrdered(lt)(lista) // ==> false
// isOrdered(gte)(lista) // ==> true

// Zadanie 4.

// Korzystając z rekurencji ogonowej zdefiniuj funkcję:

// def applyForAll[A, B](f: A => B)(l: List[A]): List[B] = = {
//     Nil
// }

// która do wszystkich elementów l stosuje funkcję f.

// Przykład:

// val lista = List(1, 3, 5)
// val f = (n: Int) => n + 3
// applyForAll(lista)(f) // ==> List(4, 6, 8)s


def oczysc[A](l: List[A]): List[A] = {
    @annotation.tailrec
    def pomoc_oczysc[A](l:List[A], acc:List[A] ): List[A] = l match {
      case Nil => acc
      case x :: ogon => if (acc.contains(x)) pomoc_oczysc(ogon, acc)
      else pomoc_oczysc(ogon, x +: acc)
    }
  pomoc_oczysc(l, Nil) 
}


val lista = List(1, 1, 2, 4, 4, 4, 1, 3)

@main
def zadanie01: Unit = {
  println(oczysc(lista))
}

val lista3 = List('a', 'a', 'b', 'c', 'c', 'c', 'a', 'a', 'b', 'd')

def skompresuj[A](l: List[A]): List[(A, Int)] = {
   def pomoc_skompresuj[A](l: List[A], acc: List[(A, Int)]): List[(A, Int)] = l match {
    case Nil => acc
    case x :: ogon => 
      val (span, ogon1) = ogon.span(_ == x)
      pomoc_skompresuj(ogon1, (x, span.length + 1) +: acc)
   }
  
   pomoc_skompresuj(l, Nil)
}

@main
def zadanie02: Unit = {
  println(skompresuj(lista3))
}

val lt = (m: Int, n: Int) => m < n
val lte = (m: Int, n: Int) => m <= n
val li = List(1, 2, 2, 5)

def isOrdered[A](leq: (A, A) => Boolean)(l: List[A]): Boolean = {
   true
}

