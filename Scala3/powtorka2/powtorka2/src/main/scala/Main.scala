@main
def lab3: Unit = {
  println(reverse("essa"))
  println(ciąg(4))

  val lista1 = List(2, 4, 3, 5)
val lista2 = List(1, 2, 2, 3, 1, 5)

println(tasuj(lista1, lista2) )// List(1, 2, 3, 1, 4, 3, 5)) // true
}

// Laboratorium 03 – zadania

// Zadanie 01. Korzystając z rekurencji zdefiniuj funkcję

def reverse(str: String): String = {
    def pomocrev(l: List[Char], acc: String): String = l match {
      case head :: next => pomocrev(next, head + acc)
      case Nil => acc
    }

    pomocrev(str.toList, "")
}

// która zwróci odwrócony napis pobrany jako argument.

// Rozwiąż to zadanie bez korzystania ze zmiennych oraz wykorzystaj rekurencję ogonową.

// Zadanie 02. Zaimplementuj (ponownie!) predykat

// def pierwsza(n: Int): Boolean = {
//     true
// }

// sprawdzający, czy argument jest liczba pierwszą. Tym razem rozwiąż to zadanie korzystając z rekurencji ogonowej (i bez użycia zmiennych).

// Zadanie 03. Zdefiniuj funkcję

def ciąg(n: Int): Int = {
    def pomocciag(a: Int, b: Int, c: Int): Int = {
      if (c == 0) b
      else pomocciag(b+a, a, c-1)
    }

    pomocciag(1, 2, n)
}

// zwracającą dla podanej wartości argumentu n, n-ty element ciągu wyrażonego wzorem:

// F(0) = 2
// F(1) = 1
// F(n) = F(n-1) + F(n-2) dla n > 1

// Pierwsze 10 wyrazów ciągu to: 2, 1, 3, 4, 7, 11, 18, 29, 47, 76.

// Rozwiąż to zadanie bez używania zmiennych oraz wykorzystując rekurencję ogonową.

// Zadanie 04. Stosując rekurencję ogonową (i nie używając zmiennych) zdefiniuj funkcję:

def tasuj(l1: List[Int], l2: List[Int]): List[Int] = {
    def pomoctasuj(l1: List[Int], l2: List[Int], acc: List[Int], last: Int): List[Int] = (l1,l2) match {
      case (Nil,Nil) => acc
      case (h::tail, Nil) => pomoctasuj(tail, Nil, h::acc, h)
      case (Nil, h::tail) => pomoctasuj(tail, Nil, h::acc, h)
      case (h1::t1, h2::t2) => if (h1 > h2) if (last == h2) pomoctasuj(l1, t2, acc, last) else pomoctasuj(l1, t2, h2 :: acc, h2)
      else if (h1 == h2) pomoctasuj(t1, t2, h1 :: acc, h1) else pomoctasuj(t1, l2, h1 :: acc, h1)

    }

    pomoctasuj(l1,l2,Nil, 0).reverse
}

// łączącą ze sobą listy liczb całkowitych z zachowaniem porządku rosnącego (a ściślej „niemalejącego”). W szczególności oznacza to, że jeśli l1 i l2 będą uporządkowane to wynik również będzie uporządkowany. W wyniku „kolejno” nie powinny pojawiać się identyczne elementy.

// Przykład:

@main
def lab4: Unit = {
  val lista = List(Some(4.0), Some(-3.0), None, Some(1.0), Some(0.0))
  println(sumuj(lista)) // ==> Some(5.0)

  val lista1 = List(2.0, -1.6, 3.2, 5.4, -8.4)
  val lista2 = List(3.3, -3.1, 3.2, -4.1, -0.4, 5.5)

  println(maksimum(lista1, lista2)) // ==> List(3.3, -1.6, 3.2, 5.4, -0.4, 5.5)

    
  val lista3 = List(2, 1, 4, 1, 3, 3, 1, 2)

  println(usun(lista3, 1)) // ==> List(2, 4, 3, 3, 2).

  val lista4 = List(1, 3, 5, 6, 7)

  println(divide(lista4)) // ==>  ( List(1, 5, 7), List(3, 6) ).
}

// Laboratorium 04 – zadania

// Uwaga! Rozwiązując poniższe zadania nie korzystaj z operacji head oraz tail na listach.

// Zadanie 1. Używając rekurencji ogonowej oraz mechanizmów dopasowania wzorca zdefiniuj funkcję:

def sumuj(l: List[Option[Double]]): Option[Double] = {
    def pomocsumuj(l: List[Option[Double]], acc: Option[Double]): Option[Double] = l match {
      case Nil => acc
      case head :: next => if (head.getOrElse(0.0) > 0.0) pomocsumuj(next, Some(acc.getOrElse(0.0) + head.getOrElse(0.0))) else pomocsumuj(next, acc)
    }

    pomocsumuj(l, None)

    }

// zwracającą sumę wszystkich elementów listy l postaci Some(d), gdzie d > 0. Jeśli takich elementów na liście l nie ma, to funkcja powinna zwrócić wartość None.

// Przykład:

// val lista = List(Some(4.0), Some(-3.0), None, Some(1.0), Some(0.0))

// sumuj(lista) // ==> Some(5.0)

// Zadanie 2. Wykorzystując rekurencję ogonową oraz dopasowanie wzorca (nie korzystaj z metod head i tail) zdefiniuj funkcję

def maksimum(l1: List[Double], l2: List[Double]): List[Double] = {
    def maksipomoc(l1: List[Double], l2: List[Double], acc: List[Double]): List[Double] = (l1,l2) match {
      case (Nil,Nil) => acc
      case (Nil, h :: t) => maksipomoc(Nil, t, h::acc)
      case (h :: t, Nil) => maksipomoc(Nil, t, h:: acc)
      case (h1 :: t1, h2:: t2) => if (h1 > h2) maksipomoc(t1, t2, h1 ::acc) else maksipomoc(t1,t2, h2::acc)
    }

    maksipomoc(l1, l2, Nil).reverse
}

// która porównuje elementy list będących jej argumentami i „po współrzędnych” tworzy listę składającą się z maksimów. Jeżeli, któraś lista jest dłuższa, jej „nadmiarowe” elementy powinny zostać dodane na koniec listy wynikowej.

// Przykład:

// val lista1 = List(2.0, -1.6, 3.2, 5.4, -8.4)
// val lista2 = List(3.3, -3.1, 3.2, -4.1, -0.4, 5.5)

// maksimum(lista1, lista2) // ==> List(3.3, -1.6, 3.2, 5.4, -0.4, 5.5)

// Zadanie 3. Korzystając z rekurencji ogonowej i dopasowanie wzorca zdefiniuj generyczną funkcję:

def usun[A](l: List[A], el: A): List[A] = {
    def pomocusun(l: List[A], el: A, acc: List[A]): List[A] = l match {
      case Nil => acc
      case head :: next => if (head== el) pomocusun(next,el,acc) else pomocusun(next, el, head:: acc)
    }

    pomocusun(l,el, Nil)
}

// która „usunie” z listy l wszystkie wystąpienia elementu el.

// Przykład:

// val lista = List(2, 1, 4, 1, 3, 3, 1, 2)

// usun(lista, 1) // ==> List(2, 4, 3, 3, 2).

// Zadanie 4. Wykorzystując rekurencję ogonową oraz dopasowanie wzorca zdefiniuj generyczną funkcję:

def divide[A](l: List[A]): (List[A], List[A]) = {
  def pomocdiv(l:List[A], acc1:List[A], acc2:List[A], index:Int): (List[A], List[A]) = l match {
    case Nil => (acc1.reverse, acc2.reverse)
    case head :: next => if (index%2 == 0) pomocdiv(next, head::acc1, acc2, index+1) else pomocdiv(next, acc1, head :: acc2, index+1)

  }

  pomocdiv(l, Nil, Nil, 0)
}

// która dla listy l będącej argumentem zwraca parę (l1, l2) jej „podlist” składających się, odpowiednio, ze wszystkich elementów l o parzystych oraz nieparzystych indeksach.

// Przykład:

// val lista = List(1, 3, 5, 6, 7)

// divide(lista) // ==>  ( List(1, 5, 7), List(3, 6) ).

//################################################################################################################################


@main
def lab5: Unit ={
  val lista = List(1, 1, 2, 4, 4, 4, 1, 3)
  println(oczyść(lista)) // ==> List(1, 2, 4, 1, 3)

  val lista1 = List('a', 'a', 'b', 'c', 'c', 'c', 'a', 'a', 'b', 'd')
  println(skompresuj(lista1).reverse) // ==> List(('a', 2), ('b', 1), ('c', 3), ('a', 2), ('b', 1), ('d', 1))

  val lt = (m: Int, n: Int) => m < n
  val gte = (m: Int, n: Int) => m <= n
  val lista2 = List(1, 2, 2, 5)
  println(isOrdered(lt)(lista2)) // ==> false
  println(isOrdered(gte)(lista2)) // ==> true

  val lista3 = List(1, 3, 5)
  val f = (n: Int) => n + 3
  applyForAll(f)(lista3) // ==> List(4, 6, 8)
}

// Laboratorium 05

// Uwaga! Rozwiązując poniższe zadania wykorzystaj mechanizmy dopasowania wzorca. Nie używaj operacji head ani tail.

// Zadanie 1. Korzystając z rekurencji ogonowej zdefiniuj generyczną funkcję:

def oczyść[A](l: List[A]): List[A] = {
    def pomococzysc(l: List[A], acc: List[A]): List[A] = (l,acc) match {
      case (Nil, _) => acc.reverse
      case (h::l1, Nil) => pomococzysc(l1, h::acc)
      case (h1::t1, h2 :: t2) => if (h1 == h2) pomococzysc(t1, acc) else pomococzysc(t1, h1 :: acc)
    }
    pomococzysc(l, Nil)
}

// która w liście l zamienia wszystkie podciągi powtarzających się elementów ich pojedynczymi wystąpieniami.

// Przykład:

// val lista = List(1, 1, 2, 4, 4, 4, 1, 3)
// oczyść(lista) // ==> List(1, 2, 4, 1, 3)

// Zadanie 2.

// Korzystając z rekurencji ogonowej zdefiniuj generyczną funkcję:

def skompresuj[A](l: List[A]): List[(A, Int)] = {
    def pomockomp(l: List[A], acc: List[(A, Int)], curr: List[A], index: Int): List[(A, Int)] = (l,curr) match {
      case (Nil,_) => acc
      case (h::t, h1::t1) => if(h == h1) pomockomp(t, acc, curr, index + 1) else pomockomp(t, (h1, index)::acc, h::curr, 1)
      case (h::t, Nil) => pomockomp(t, acc, h::curr, 1)
    }

    pomockomp(l, Nil, Nil, 0)
}

// która zastępuje każdy „podciąg” powtarzających się wystąpień elementu el na liście l parą (el, długość_podciągu).

// Przykład:

// val lista = List('a', 'a', 'b', 'c', 'c', 'c', 'a', 'a', 'b', 'd')
// skompresuj(lista) // ==> List(('a', 2), ('b', 1), ('c', 3), ('a', 2), ('b', 1), ('d', 1))

// Zadanie 3.

// Zdefiniuj generyczną funkcję rekurencyjną:

def isOrdered[A](leq: (A, A) => Boolean)(l: List[A]): Boolean = {
    def pomocisOrdered(list: List[A]): Boolean = list match {
      case Nil | _ :: Nil => true
      case h :: m :: t => if (leq(h,m)) pomocisOrdered(m :: t) else false
    }

    pomocisOrdered(l)
}

// która, dla zadanego porządku leq, sprawdzi czy elementy listy l ułożone są zgodnie z nim. W definicji użyj rekurencji ogonowej.

// Przykład:

// val lt = (m: Int, n: Int) => m < n
// val gte = (m: Int, n: Int) => m <= n
// val lista = List(1, 2, 2, 5)
// isOrdered(lt)(lista) // ==> false
// isOrdered(gte)(lista) // ==> true

// Zadanie 4.

// Korzystając z rekurencji ogonowej zdefiniuj funkcję:

def applyForAll[A, B](f: A => B)(l: List[A]): List[B] = {
    def pomocapply(l:List[A], acc: List[B]):List[B] = l match {
      case Nil => acc
      case head :: next => pomocapply(next, f(head):: acc)
    }

    pomocapply(l, Nil)
}

// która do wszystkich elementów l stosuje funkcję f.

// Przykład:

// val lista = List(1, 3, 5)
// val f = (n: Int) => n + 3
// applyForAll(lista)(f) // ==> List(4, 6, 8)

//################################################################################################################################

@main
def lab6: Unit = {
  val list = List (1,2,3,4,5,6,7,8,9,10)
  println(subseq(list,3,8))
  println(pairPosNeg(List(1.0,-1.0,0.0,2.0,-2.0)))

  val l = List(1, 1, 2, 4, 4, 4, 1, 3)
  println(deStutter(l).reverse) // ==> true

  println(remElems(List (1,2,3,4,5,6,7,8,9,10), 3))

  val l1 = List(1, 1, 2, 4, 4, 3, 4, 1, 3)
  //println(freqMax(l1)) //== (Set(1,4), 3) ) // ==> true
  println(l1.groupBy(identity).mapValues(_.size).toMap.collect)
}

// Zadanie 01:

// Korzystając z metod drop i take zdefiniuj generyczną funkcję:

def subseq[A](list: List[A], begIdx: Int, endIdx: Int): List[A] = {
  list.take(endIdx).drop(begIdx)
    
}

// zwracającą podciąg listy list, złożony z elementów o indeksach z przedziału od begIdx do endIdx.

// Zadanie 02:

// Korzystając z metod filter i partition zdefiniuj funkcję:

def pairPosNeg(list: List[Double]): (List[Double], List[Double]) = {
    val (list1,list2) = list.filter(elem => elem != 0.0).partition(elem => elem > 0.0)

    (list1,list2)
}

// która podzieli listę list na parę list (negative, positive), zawierających odpowiednio - wszystkie ujemne oraz wszystkie dodatnie elementy z listy list. W wyniki, elementy powinny występować w tej samej kolejności oraz krotności jak na liście list. Liczby równe 0.0 powinny zostać pominięte.

// Zadanie 03:

// Korzystając z metody foldLeft zdefiniuj generyczną funkcję

def deStutter[A](list: List[A]): List[A] = {
    list.foldLeft(List.empty[A])((acc, elem) => acc match {
      case head :: next => if (head == elem) acc else elem :: acc
      case Nil => elem :: acc
    })
}

// usuwającą z listy list wszystkie powtarzające się podciągi.

// Przykład:

// val l = List(1, 1, 2, 4, 4, 4, 1, 3)
// assert( deStutter(l) == List(1, 2, 4, 1, 3) ) // ==> true

// Zadanie 04:

// Używając metod filter, map i zipWithIndex zdefiniuj funkcję:

def remElems[A](list: List[A], k: Int): List[A] = {
    list.zipWithIndex.filter(elem => elem._2%k != k-1).map(elem => elem._1)
}

// usuwającą k-ty element listy list.

// Zadanie 05:

// Używając poznanych na wykładzie metod przetwarzania kolekcji zdefiniuj funkcję:

// def freqMax[A](list: List[A]): (Set[A],Int) = {
//     val gruped = list.groupBy(identity).mapValues(_.size).toMap
// }

// która dla list zwraca parę zawierającą zbiór elementów, których liczba wystapień w list jest maksymalna oraz – jako drugi element pary – tę liczbę.

// Przykład:

// val l = List(1, 1, 2, 4, 4, 3, 4, 1, 3)
// assert( freqMax(l) == (Set(1,4), 3) ) // ==> true
