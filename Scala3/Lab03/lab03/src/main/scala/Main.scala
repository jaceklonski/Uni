
// z1

@main
def zadanie01: Unit = {
  println(reverse("essa"))

}


def reverse(str: String): String ={
  def rev(str: String, acc: String): String = {
    if (str.isEmpty) acc
    else rev(str.tail, str.head + acc)
  }
  rev (str, "")}

@main
def zadanie02: Unit = {
  println(pierwsza(1001))
}

def pierwsza(int: Int): Boolean = {
  def acc (int: Int, dzielnik: Int): Boolean = {
      if (dzielnik > math.sqrt(int)) true
      else if (int%dzielnik == 0) false
      else acc(int, dzielnik + 1)
    } 
    acc(int, 2)
}

@main
def zadanie03: Unit = {
  println(ciag(6))
}

def ciag(n: Int): Int = {
    @annotation.tailrec
    def fibo(n: Int, a: Int, b: Int): Int = {
        if (n <= 0) a
        else fibo(n - 1, b, a + b)
    }

    fibo(n, 2, 1)
}

// Zadanie 04. Stosując rekurencję ogonową (i nie używając zmiennych) zdefiniuj funkcję:

// def tasuj(l1: List[Int], l2: List[Int]): List[Int] = {
//     Nil
// }

// łączącą ze sobą listy liczb całkowitych z zachowaniem porządku rosnącego (a ściślej „niemalejącego”). W szczególności oznacza to, że jeśli l1 i l2 będą uporządkowane to wynik również będzie uporządkowany. W wyniku „kolejno” nie powinny pojawiać się identyczne elementy.

// Przykład:




@main
def zadanie04: Unit = {
  val lista1 = List(2, 4, 3, 5)
  val lista2 = List(1, 2, 2, 3, 1, 5)
  println(tasuj(lista1, lista2))
}


def tasuj(l1: List[Int], l2: List[Int]): List[Int] = {
    def pomoc_tasuj(l1: List[Int], l2: List[Int], i: Int, l3: List[Int], l4: List[Int] ): List[Int] = {
    l4 :+ l1[i]
    }
}




// def tasuj(l1: List[Int], l2: List[Int]): List[Int] = {
//     def pomoc_tasuj(l1: List[Int], l2: List[Int], index1:Int, l3: List[Int], l4: List[Int] ): List[Int] = {
//     if(index1 > l1.length) l3
//     else if(l3.contains(l1[index1])) pomoc_tasuj(l1, l2, index1 + 1, l3)
//     else l3 :+ l1[index1] 
//     pomoc_tasuj(l1, l2, index1 + 1, l3)
//     }
// }







// zadanie03 pytania???

// def ciag(n: Int): Int = {
//     @annotation.tailrec
//     def fibo(n: Int): Int = {
//         if (n == 0) 2
//         else if (n == 1) 3
//         else fibo(n - 1) + fibo(n - 2) <= swiat bylby lepszy gdyby to dzialalo
//     }

//     fibo(n)
// }

// def ciag(int: Int): Int = {
//     @annotation.tailrec
//     def fibo (n: Int): Int = {
//       if (n >= 2) fibo(n-1) + fibo(n-2) <= czy ja nie moge uzyc 2 wywolan rekurencji?
//       else if (n == 1) fibo(0) + 1 <= czy wywolanie rekurencji moze byc tylko 1?
//       else if (n == 0) 2
//       else 0
//     }
//     fibo(int)
// }