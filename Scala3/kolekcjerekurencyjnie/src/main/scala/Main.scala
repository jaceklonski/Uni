@main
def mainProg: Unit = {
  val l = List(1, 1, 2, 4, 4, 4, 1, 3)
  println(drop(l, 4))
  println(reverse(l))
  println(take(l, 3))
  println(filter(l)(_%2 == 0))
  println(partition(l)(_%2 == 0))
  println(foldLeft(l, List.empty[Int]){(acc, elem) => if (acc.isEmpty || acc.head != elem ) elem :: acc else acc
  })
  println(map(l)(n => n*2))
  println(zipWithIndex(l))
}

def reverse[A](list: List[A]): List[A] = {
  @annotation.tailrec
  def pomocrev[A](list: List[A], acc: List[A]):List[A] = (list) match {
    case Nil => acc
    case head :: t =>  pomocrev(t, head :: acc)
  }

  pomocrev(list, Nil)
}


def drop[B](list: List[B], index: Int): List[B] = {
  @annotation.tailrec
  def pomocdrop[B](list: List[B], acc: List[B], index: Int): List[B] = (list) match {
    case (Nil) => if (index <= 0) acc else Nil
    case (x :: ogon) => if (index > 0) pomocdrop(ogon, acc, index - 1) else pomocdrop(ogon, x :: acc, index -1)
  }

  reverse(pomocdrop(list, Nil, index))
}


def take[B](list: List[B], index: Int): List[B] = {
  @annotation.tailrec
  def pomoctake[B](list: List[B], acc: List[B], index: Int): List[B] = (list) match {
    case (Nil) => reverse(acc)
    case (x :: ogon) => if (index >= 0) pomoctake(ogon, x :: acc, index - 1) else pomoctake(ogon, acc, index -1)
  }

  reverse(pomoctake(list, Nil, index))
}


def filter[A](list: List[A])(warunek: A => Boolean): List[A] = {
  @annotation.tailrec
  def filterHelper(l: List[A], acc: List[A]): List[A] = l match {
    case Nil => acc
    case head :: tail =>
      if (warunek(head)) filterHelper(tail, head :: acc)
      else filterHelper(tail, acc)
  }

  filterHelper(list, Nil)
}


def partition[A](list: List[A])(warunek: A => Boolean): (List[A], List[A]) = {
  @annotation.tailrec
  def partitionHelper(l: List[A], acc: List[A], aacc: List[A]): (List[A],List[A]) = l match {
    case Nil => (reverse(aacc), reverse(acc))
    case head :: tail =>
      if (warunek(head)) partitionHelper(tail, head :: acc, aacc)
      else partitionHelper(tail, acc, head :: aacc)
  }

  partitionHelper(list, Nil, Nil)
}


def foldLeft[A, B](list: List[A], wartosc_startowa: B)(f: (B, A) => B): B = {
  @annotation.tailrec
  def foldHelper(l: List[A], acc: B): B = l match {
    case Nil => acc
    case head :: tail => foldHelper(tail, f(acc, head))
  }

  foldHelper(list, wartosc_startowa)
}

def map[A](l: List[A])(f: A => A): List[A] = {
  @annotation.tailrec
  def mapHelper(l: List[A], acc: List[A]): List[A] = l match {
    case Nil => acc
    case head :: tail => mapHelper(tail, f(head) :: acc)
  }

  mapHelper(l, Nil)
}

def zipWithIndex[A](l: List[A]): List[(A, Int)] = {
  def zipHelper(l:List[A], acc: List[(A, Int)], index: Int): List[(A, Int)] = l match {
    case Nil => acc
    case head :: next => zipHelper(next, (head, index) :: acc, index + 1)
  }

  zipHelper(l, List.empty[(A, Int)], 0)
}


