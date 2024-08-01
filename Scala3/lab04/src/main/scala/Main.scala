import scala.compiletime.ops.double
// Laboratorium 04 – zadania

// Uwaga! Rozwiązując poniższe zadania nie korzystaj z operacji head oraz tail na listach.

// Zadanie 1. Używając rekurencji ogonowej oraz mechanizmów dopasowania wzorca zdefiniuj funkcję:

// def sumuj(l: List[Option[Double]]): Option[Double] = {
//     None
// }

// zwracającą sumę wszystkich elementów listy l postaci Some(d), gdzie d > 0. Jeśli takich elementów na liście l nie ma, to funkcja powinna zwrócić wartość None.

// Przykład:

// val lista = List(Some(4.0), Some(-3.0), None, Some(1.0), Some(0.0))

// sumuj(lista) // ==> Some(5.0)

// Zadanie 2. Wykorzystując rekurencję ogonową oraz dopasowanie wzorca (nie korzystaj z metod head i tail) zdefiniuj funkcję

// def maksimum(l1: List[Double], l2: List[Double]): List[Double] = {
//     Nil
// }

// która porównuje elementy list będących jej argumentami i „po współrzędnych” tworzy listę składającą się z maksimów. Jeżeli, któraś lista jest dłuższa, jej „nadmiarowe” elementy powinny zostać dodane na koniec listy wynikowej.

// Przykład:

// val lista1 = List(2.0, -1.6, 3.2, 5.4, -8.4)
// val lista2 = List(3.3, -3.1, 3.2, -4.1, -0.4, 5.5)

// maksimum(lista1, lista2) // ==> List(3.3, -1.6, 3.2, 5.4, -0.4, 5.5)

// Zadanie 3. Korzystając z rekurencji ogonowej i dopasowanie wzorca zdefiniuj generyczną funkcję:

// def usun[A](l: List[A], el: A): List[A] = {
//     Nil
// }

// która „usunie” z listy l wszystkie wystąpienia elementu el.

// Przykład:

// val lista = List(2, 1, 4, 1, 3, 3, 1, 2)

// usun(lista, 1) // ==> List(2, 4, 3, 3, 2).

// Zadanie 4. Wykorzystując rekurencję ogonową oraz dopasowanie wzorca zdefiniuj generyczną funkcję:
  
// def divide[A](l: List[A]): (List[A], List[A]) = {
//     Nil
// }

// która dla listy l będącej argumentem zwraca parę (l1, l2) jej „podlist” składających się, odpowiednio, ze wszystkich elementów l o parzystych oraz nieparzystych indeksach.

// Przykład:

// val lista = List(1, 3, 5, 6, 7)

// divide(lista) // ==>  ( List(1, 5, 7), List(3, 6) ).

// Zadanie 5. Niech

// type Pred[A] = A => Boolean

// oznacza zbiór predykatów (własności) elementów typu A.

// Wykorzystując jako „wzór” przykład zademonstrowany podczas ostatniego wykładu:

// def and[A](p: Pred[A], q: Pred[A]): Pred[A] = {
//     a => p(a) && q(a)
// }

// zdefiniuj „spójniki”: alternatywę, negację oraz implikację:

// def or[A](p: Pred[A], q: Pred[A]): Pred[A] = {
//     a => true 
// }

// def not[A](p: Pred[A]): Pred[A] = {
//     a => true
// }

// def imp[A](p: Pred[A], q: Pred[A]): Pred[A] = {
//     a => true
// }

val lista = List(Some(4.0), Some(-3.0), None, Some(1.0), Some(0.0))

@main
def zad01: Unit = {
  println(sumuj(lista))
}

def sumuj(l: List[Option[Double]]): Option[Double] = {
  @annotation.tailrec
  def halp(l: List[Option[Double]], acc: Double): Option[Double] = l match {
    case Nil => if (acc > 0) Some(acc) else None
    case Some(x) :: ogon if x > 0 => halp(ogon, acc + x)
    case _ :: ogon => halp(ogon, acc)
  }
  halp(l, 0.0)
}

val lista1 = List(2.0, -1.6, 3.2, 5.4, -8.4)
val lista2 = List(3.3, -3.1, 3.2, -4.1, -0.4, 5.5)

@main
def zad02: Unit = {
  println(maksimum(lista1, lista2))
}

def maksimum(l1: List[Double], l2: List[Double]): List[Double] = {
  def pomocyplz(l1: List[Double], l2: List[Double], acc: List[Double]): List[Double] = (l1, l2) match{
    case (Nil, Nil) => acc
    case (Nil, (x)) => acc
    case ((x), Nil) => acc
    case ((x) :: ogon1, (y) :: ogon2) if (x >= y) => pomocyplz(ogon1, ogon2, (acc :+ x)) 
    case ((x) :: ogon1, (y) :: ogon2) => pomocyplz(ogon1, ogon2, (acc :+ y))
  }
  pomocyplz(l1, l2, Nil)
}

val listazad3 = List(2, 1, 4, 1, 3, 3, 1, 2)

@main
def zad03: Unit = {
  println(usun(listazad3, 1))
}


def usun[A](l: List[A], el: A): List[A] = {
   @annotation.tailrec
   def pomozusunac[A](l: List[A], el: A, acc: List[A]): List[A] = l match{
    case Nil => acc.reverse
    case x :: ogon => if (x == el) pomozusunac(ogon, el, acc)
    else pomozusunac(ogon, el, x :: acc)
   }
   pomozusunac(l, el, Nil)
}

val listazad4 = List(1, 3, 5, 6, 7)

@main
def zad04: Unit = {
  println(divide(listazad4))
}

def divide[A](l: List[A]): (List[A], List[A]) = {
  @annotation.tailrec
  def pomozpodzielic(l: List[A], acc1: List[A], acc2: List[A], licznik: Int): (List[A], List[A]) = l match {
    case Nil => (acc1, acc2)
    case x :: ogon =>
      if (licznik%2 == 1) pomozpodzielic(ogon, x :: acc1, acc2, licznik + 1)
      else pomozpodzielic(ogon, acc1, x :: acc2, licznik + 1)
  }
  pomozpodzielic(l, Nil, Nil, 0)
}


def and[A](p: Pred[A], q: Pred[A]): Pred[A] = {
  a => p(a) && q(a)
}