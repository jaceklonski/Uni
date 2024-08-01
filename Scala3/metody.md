# Kolekcje w Scala 3.4.1

### Sprawdzanie, czy kolekcja jest pusta lub niepusta

- **isEmpty : Boolean**

  - Zwraca `true`, jeśli kolekcja jest pusta, w przeciwnym razie `false`.
  - Przykład: `List.empty[Int].isEmpty` zwraca `true`.

- **nonEmpty : Boolean**
  - Zwraca `true`, jeśli kolekcja nie jest pusta, w przeciwnym razie `false`.
  - Przykład: `List(1, 2, 3).nonEmpty` zwraca `true`.

### Pobieranie rozmiaru kolekcji

- **size : Int**

  - Zwraca liczbę elementów w kolekcji.
  - Przykład: `List(1, 2, 3).size` zwraca `3`.

- **knownSize : Int**
  - Zwraca znaną wielkość kolekcji.
  - Przykład: `List(1, 2, 3).knownSize` zwraca `3`.

### Sprawdzanie, czy wszystkie elementy spełniają warunek

- **exists(p: A ⇒ Boolean): Boolean**

  - Sprawdza, czy w kolekcji istnieje co najmniej jeden element spełniający warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3).exists(_ % 2 == 0)` zwraca `true`, ponieważ liczba 2 spełnia warunek.

- **forall(p: A ⇒ Boolean): Boolean**

  - Sprawdza, czy wszystkie elementy w kolekcji spełniają warunek określony przez funkcję `p`.
  - Przykład: `List(2, 4, 6).forall(_ % 2 == 0)` zwraca `true`, ponieważ wszystkie liczby są parzyste.

- **count(p: A ⇒ Boolean): Int**
  - Liczy liczbę elementów w kolekcji, które spełniają warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3, 4).count(_ % 2 == 0)` zwraca `2`, ponieważ dwie liczby (2 i 4) są parzyste.

## Przekształcanie kolekcji

### Mapowanie elementów

- **map[B](f: A ⇒ B): CC[B]**
  - Tworzy nową kolekcję, stosując funkcję `f` do każdego elementu kolekcji.
  - Przykład: `List(1, 2, 3).map(_ * 2)` zwraca `List(2, 4, 6)`.

### Łączenie kolekcji

- **flatMap[B](f: A ⇒ IterableOnce[B]): CC[B]**
  - Stosuje funkcję `f` do każdego elementu kolekcji i spłaszcza wynikające kolekcje w jedną.
  - Przykład: `List(1, 2, 3).flatMap(x => List(x, x * 2))` zwraca `List(1, 2, 2, 4, 3, 6)`.

### Filtrowanie elementów

- **collect[B](pf: PartialFunction[A, B]): CC[B]**
  - Stosuje częściową funkcję `pf` do elementów kolekcji, zwracając tylko te, dla których `pf` jest zdefiniowana.
  - Przykład: `List(1, 2, 3, 4).collect { case x if x % 2 == 0 => x * 2 }` zwraca `List(4, 8)`.

### Grupowanie elementów

- **scanLeft[B](z: B)(op: (B, A) ⇒ B): CC[B]**
  - Tworzy nową kolekcję, stosując operację binarną `op`, zaczynając od początkowej wartości `z` i kolekcji, tworząc kolejne wartości akumulacyjne.
  - Przykład: `List(1, 2, 3).scanLeft(0)(_ + _)` zwraca `List(0, 1, 3, 6)`.

## Zwijanie i redukowanie kolekcji

### Agregowanie wartości

- **foldLeft[B](z: B)(op: (B, A) ⇒ B): B**

  - Zaczynając od początkowej wartości `z`, przechodzi przez elementy kolekcji od lewej do prawej, stosując operację `op`.
  - Przykład: `List(1, 2, 3).foldLeft(0)(_ + _)` zwraca `6`.

- **foldRight[B](z: B)(op: (A, B) ⇒ B): B**
  - Zaczynając od początkowej wartości `z`, przechodzi przez elementy kolekcji od prawej do lewej, stosując operację `op`.
  - Przykład: `List(1, 2, 3).foldRight(0)(_ + _)` zwraca `6`.

### Redukowanie elementów do jednej wartości

- **reduceLeft[B >: A](op: (B, A) ⇒ B): B**

  - Redukuje elementy kolekcji od lewej do prawej, stosując operację `op`. Wymaga, aby kolekcja nie była pusta.
  - Przykład: `List(1, 2, 3).reduceLeft(_ + _)` zwraca `6`.

- **reduceRight[B >: A](op: (A, B) ⇒ B): B**

  - Redukuje elementy kolekcji od prawej do lewej, stosując operację `op`. Wymaga, aby kolekcja nie była pusta.
  - Przykład: `List(1, 2, 3).reduceRight(_ + _)` zwraca `6`.

- **reduce[B >: A](op: (B, B) ⇒ B): B**

  - Redukuje elementy kolekcji, stosując operację `op`. Wymaga, aby kolekcja nie była pusta.
  - Przykład: `List(1, 2, 3).reduce(_ + _)` zwraca `6`.

- **reduceLeftOption[B >: A](op: (B, A) ⇒ B): Option[B]**

  - Redukuje elementy kolekcji od lewej do prawej, stosując operację `op`, ale zwraca `Option[B]`, aby obsłużyć pustą kolekcję.
  - Przykład: `List(1, 2, 3).reduceLeftOption(_ + _)` zwraca `Some(6)`.

- **reduceRightOption[B >: A](op: (A, B) ⇒ B): Option[B]**

  - Redukuje elementy kolekcji od prawej do lewej, stosując operację `op`, ale zwraca `Option[B]`, aby obsłużyć pustą kolekcję.
  - Przykład: `List(1, 2, 3).reduceRightOption(_ + _)` zwraca `Some(6)`.

- **reduceOption[B >: A](op: (B, B) ⇒ B): Option[B]**
  - Redukuje elementy kolekcji, stosując operację `op`, ale zwraca `Option[B]`, aby obsłużyć pustą kolekcję.
  - Przykład: `List(1, 2, 3).reduceOption(_ + _)` zwraca `Some(6)`.

## Dostęp do elementów

### Dostęp po indeksie

- **apply(idx: Int): A**

  - Zwraca element znajdujący się pod danym indeksem `idx`.
  - Przykład: `List(1, 2, 3)(1)` zwraca `2`.

- **head: A**

  - Zwraca pierwszy element kolekcji. Wymaga, aby kolekcja nie była pusta.
  - Przykład: `List(1, 2, 3).head` zwraca `1`.

- **last: A**
  - Zwraca ostatni element kolekcji. Wymaga, aby kolekcja nie była pusta.
  - Przykład: `List(1, 2, 3).last` zwraca `3`.

### Dostęp do pierwszego i ostatniego elementu

- **headOption: Option[A]**

  - Zwraca pierwszy element kolekcji jako `Option[A]`, obsługując pustą kolekcję.
  - Przykład: `List(1, 2, 3).headOption` zwraca `Some(1)`.

- **lastOption: Option[A]**
  - Zwraca ostatni element kolekcji jako `Option[A]`, obsługując pustą kolekcję.
  - Przykład: `List(1, 2, 3).lastOption` zwraca `Some(3)`.

### Znajdowanie elementów

- **collectFirst(pf: PartialFunction[A, B]): Option[B]**

  - Zwraca pierwszy element, dla którego częściowa funkcja `pf` jest zdefiniowana.
  - Przykład: `List(1, 2, 3).collectFirst { case x if x % 2 == 0 => x * 2 }` zwraca `Some(4)`.

- **find(p: A ⇒ Boolean): Option[A]**
  - Zwraca pierwszy element spełniający warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3).find(_ % 2 == 0)` zwraca `Some(2)`.

### Dostęp do podkolekcji

- **filter(p: A ⇒ Boolean): CC[A]**

  - Zwraca nową kolekcję zawierającą tylko te elementy, które spełniają warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3, 4).filter(_ % 2 == 0)` zwraca `List(2, 4)`.

- **filterNot(p: A ⇒ Boolean): CC[A]**

  - Zwraca nową kolekcję zawierającą tylko te elementy, które nie spełniają warunku określonego przez funkcję `p`.
  - Przykład: `List(1, 2, 3, 4).filterNot(_ % 2 == 0)` zwraca `List(1, 3)`.

- **take(n: Int): CC[A]**

  - Zwraca nową kolekcję zawierającą pierwsze `n` elementów.
  - Przykład: `List(1, 2, 3, 4).take(2)` zwraca `List(1, 2)`.

- **takeWhile(p: A ⇒ Boolean): CC[A]**

  - Zwraca nową kolekcję zawierającą początkowe elementy, które spełniają warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3, 4).takeWhile(_ < 3)` zwraca `List(1, 2)`.

- **drop(n: Int): CC[A]**

  - Zwraca nową kolekcję bez pierwszych `n` elementów.
  - Przykład: `List(1, 2, 3, 4).drop(2)` zwraca `List(3, 4)`.

- **dropWhile(p: A ⇒ Boolean): CC[A]**

  - Zwraca nową kolekcję, w której pominięto początkowe elementy spełniające warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3, 4).dropWhile(_ < 3)` zwraca `List(3, 4)`.

- **slice(from: Int, until: Int): CC[A]**
  - Zwraca podkolekcję zawierającą elementy od indeksu `from` do `until` (bez `until`).
  - Przykład: `List(1, 2, 3, 4).slice(1, 3)` zwraca `List(2, 3)`.

### Dzielenie kolekcji

- **init: CC[A]**

  - Zwraca wszystkie elementy kolekcji poza ostatnim. Wymaga, aby kolekcja nie była pusta.
  - Przykład: `List(1, 2, 3).init` zwraca `List(1, 2)`.

- **inits: Iterator[CC[A]]**

  - Zwraca iterator, który generuje wszystkie inicjalne podkolekcje.
  - Przykład: `List(1, 2, 3).inits.toList` zwraca `List(List(1, 2, 3), List(1, 2), List(1), List())`.

- **tail: CC[A]**

  - Zwraca wszystkie elementy kolekcji poza pierwszym. Wymaga, aby kolekcja nie była pusta.
  - Przykład: `List(1, 2, 3).tail` zwraca `List(2, 3)`.

- **tails: Iterator[CC[A]]**

  - Zwraca iterator, który generuje wszystkie końcowe podkolekcje.
  - Przykład: `List(1, 2, 3).tails.toList` zwraca `List(List(1, 2, 3), List(2, 3), List(3), List())`.

- **takeRight(n: Int): CC[A]**

  - Zwraca nową kolekcję zawierającą ostatnie `n` elementów.
  - Przykład: `List(1, 2, 3, 4).takeRight(2)` zwraca `List(3, 4)`.

- **dropRight(n: Int): CC[A]**
  - Zwraca nową kolekcję bez ostatnich `n` elementów.
  - Przykład: `List(1, 2, 3, 4).dropRight(2)` zwraca `List(1, 2)`.

### Operacje podziału

- **splitAt(n: Int): (CC[A], CC[A])**

  - Dzieli kolekcję na dwie podkolekcje w miejscu `n`.
  - Przykład: `List(1, 2, 3, 4).splitAt(2)` zwraca `(List(1, 2), List(3, 4))`.

- **span(p: A ⇒ Boolean): (CC[A], CC[A])**

  - Dzieli kolekcję na dwie podkolekcje, gdzie pierwsza zawiera elementy spełniające warunek określony przez funkcję `p`, a druga pozostałe elementy.
  - Przykład: `List(1, 2, 3, 4).span(_ < 3)` zwraca `(List(1, 2), List(3, 4))`.

- **partition(p: A ⇒ Boolean): (CC[A], CC[A])**
  - Dzieli kolekcję na dwie podkolekcje: jedna zawiera elementy spełniające warunek określony przez funkcję `p`, a druga pozostałe elementy.
  - Przykład: `List(1, 2, 3, 4).partition(_ % 2 == 0)` zwraca `(List(2, 4), List(1, 3))`.

## Kombinacje numeryczne

### Suma elementów

- **sum[B >: A](implicit math.Numeric[B]): B**
  - Zwraca sumę wszystkich elementów kolekcji.
  - Przykład: `List(1, 2, 3).sum` zwraca `6`.

### Średnia wartości

### Iloczyn elementów

- **product[B >: A](implicit math.Numeric[B]): B**
  - Zwraca iloczyn wszystkich elementów kolekcji.
  - Przykład: `List(1, 2, 3).product` zwraca `6`.

## Kombinacje porządkowe

### Minimalna wartość

- **min[B >: A](implicit math.Ordering[B]): A**

  - Zwraca minimalną wartość w kolekcji.
  - Przykład: `List(1, 2, 3).min` zwraca `1`.

- **minOption[B >: A](implicit math.Ordering[B]): Option[A]**

  - Zwraca minimalną wartość w kolekcji jako `Option[A]`, obsługując pustą kolekcję.
  - Przykład: `List(1, 2, 3).minOption` zwraca `Some(1)`.

- **minBy[B](f: A ⇒ B)(implicit math.Ordering[B]): A**

  - Zwraca minimalną wartość według funkcji `f`.
  - Przykład: `List("apple", "banana", "cherry").minBy(_.length)` zwraca `apple`.

- **minByOption[B](f: A ⇒ B)(implicit math.Ordering[B]): Option[A]**
  - Zwraca minimalną wartość według funkcji `f` jako `Option[A]`, obsługując pustą kolekcję.
  - Przykład: `List("apple", "banana", "cherry").minByOption(_.length)` zwraca `Some(apple)`.

### Maksymalna wartość

- **max[B >: A](implicit math.Ordering[B]): A**

  - Zwraca maksymalną wartość w kolekcji.
  - Przykład: `List(1, 2, 3).max` zwraca `3`.

- **maxOption[B >: A](implicit math.Ordering[B]): Option[A]**

  - Zwraca maksymalną wartość w kolekcji jako `Option[A]`, obsługując pustą kolekcję.
  - Przykład: `List(1, 2, 3).maxOption` zwraca `Some(3)`.

- **maxBy[B](f: A ⇒ B)(implicit math.Ordering[B]): A**

  - Zwraca maksymalną wartość według funkcji `f`.
  - Przykład: `List("apple", "banana", "cherry").maxBy(_.length)` zwraca `banana`.

- **maxByOption[B](f: A ⇒ B)(implicit math.Ordering[B]): Option[A]**
  - Zwraca maksymalną wartość według funkcji `f` jako `Option[A]`, obsługując pustą kolekcję.
  - Przykład: `List("apple", "banana", "cherry").maxByOption(_.length)` zwraca `Some(banana)`.

## „Spinanie” kolekcji

- **zipWithIndex: CC[(A, Int)]**

  - Zwraca nową kolekcję, gdzie każdy element jest połączony ze swoim indeksem.
  - Przykład: `List("a", "b", "c").zipWithIndex` zwraca `List(("a", 0), ("b", 1), ("c", 2))`.

- **zip[B](that: Iterable[B]): CC[(A, B)]**

  - Łączy dwa zbiory w pary elementów. Zatrzymuje się przy krótszej kolekcji.
  - Przykład: `List(1, 2, 3).zip(List("a", "b"))` zwraca `List((1, "a"), (2, "b"))`.

- **zipAll[B](that: Iterable[B], thisElem: A, thatElem: B): CC[(A, B)]**
  - Łączy dwa zbiory w pary elementów. Używa `thisElem` lub `thatElem` jako wartości domyślnych dla brakujących elementów.
  - Przykład: `List(1, 2).zipAll(List("a"), -1, "z")` zwraca `List((1, "a"), (2, "z"))`.

## Konwersje

- **toIndexedSeq: IndexedSeq[A]**

  - Konwertuje kolekcję na `IndexedSeq`.
  - Przykład: `List(1, 2, 3).toIndexedSeq` zwraca `Vector(1, 2, 3)`.

- **toBuffer: mutable.Buffer[A]**

  - Konwertuje kolekcję na `Buffer`.
  - Przykład: `List(1, 2, 3).toBuffer` zwraca `ArrayBuffer(1, 2, 3)`.

- **toArray: Array[A]**

  - Konwertuje kolekcję na tablicę.
  - Przykład: `List(1, 2, 3).toArray` zwraca `Array(1, 2, 3)`.

- **copyToArray(xs: Array[A], start: Int, len: Int): Unit**

  - Kopiuje elementy kolekcji do tablicy `xs` zaczynając od `start` do `len`.
  - Przykład: `List(1, 2, 3).copyToArray(arr, 0, 2)` kopiuje pierwsze dwa elementy do tablicy `arr`.

- **toList: List[A]**

  - Konwertuje kolekcję na listę.
  - Przykład: `Vector(1, 2, 3).toList` zwraca `List(1, 2, 3)`.

- **toSeq: Seq[A]**

  - Konwertuje kolekcję na `Seq`.
  - Przykład: `List(1, 2, 3).toSeq` zwraca `List(1, 2, 3)`.

- **toSet: Set[A]**

  - Konwertuje kolekcję na `Set`.
  - Przykład: `List(1, 2, 2, 3).toSet` zwraca `Set(1, 2, 3)`.

- **toMap[K, V](implicit ev: A <:< (K, V)): Map[K, V]**
  - Konwertuje kolekcję na `Map`, zakładając, że elementy kolekcji są parami `(K, V)`.
  - Przykład: `List((1, "a"), (2, "b")).toMap` zwraca `Map(1 -> "a", 2 -> "b")`.

## Dodawanie/łączenie kolekcji

- **concat[B >: A](suffix: IterableOnce[A]): CC[B]**

  - Dodaje elementy z `suffix` do bieżącej kolekcji.
  - Przykład: `List(1, 2).concat(List(3, 4))` zwraca `List(1, 2, 3, 4)`.

- **++ (suffix: IterableOnce[A]): CC[B]**
  - To samo co `concat`.
  - Przykład: `List(1, 2) ++ List(3, 4)` zwraca `List(1, 2, 3, 4)`.

## Ciągi elementów typu A – kolekcje iterowalne, które posiadają długość i których elementy dostępne są za pomocą indeksów o wartościach startujących od 0.

### Długość

- **length: Int**
  - Zwraca liczbę elementów w kolekcji.
  - Przykład: `List(1, 2, 3).length` zwraca `3`.

### Dostęp do elementu

- **apply(idx: Int): A**
  - Zwraca element znajdujący się pod danym indeksem `idx`.
  - Przykład: `List(1, 2, 3)(1)` zwraca `2`.

### Poszukiwanie indeksu

- **indexOf(elem: A): Int**

  - Zwraca pierwszy indeks, pod którym znajduje się element `elem`.
  - Przykład: `List(1, 2, 3).indexOf(2)` zwraca `1`.

- **indexOf(elem: A, from: Int): Int**

  - Zwraca pierwszy indeks, pod którym znajduje się element `elem`, zaczynając poszukiwania od indeksu `from`.
  - Przykład: `List(1, 2, 3, 2).indexOf(2, 2)` zwraca `3`.

- **indexWhere(p: A ⇒ Boolean): Int**

  - Zwraca pierwszy indeks elementu spełniającego warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3).indexWhere(_ > 1)` zwraca `1`.

- **indexWhere(p: A ⇒ Boolean, from: Int): Int**

  - Zwraca pierwszy indeks elementu spełniającego warunek określony przez funkcję `p`, zaczynając poszukiwania od indeksu `from`.
  - Przykład: `List(1, 2, 3).indexWhere(_ > 1, 2)` zwraca `2`.

- **lastIndexOf(elem: A): Int**

  - Zwraca ostatni indeks, pod którym znajduje się element `elem`.
  - Przykład: `List(1, 2, 3, 2).lastIndexOf(2)` zwraca `3`.

- **lastIndexOf(elem: A, end: Int): Int**

  - Zwraca ostatni indeks, pod którym znajduje się element `elem`, kończąc poszukiwania na indeksie `end`.
  - Przykład: `List(1, 2, 3, 2).lastIndexOf(2, 2)` zwraca `1`.

- **lastIndexWhere(p: A ⇒ Boolean): Int**

  - Zwraca ostatni indeks elementu spełniającego warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3).lastIndexWhere(_ > 1)` zwraca `2`.

- **lastIndexWhere(p: A ⇒ Boolean, from: Int): Int**

  - Zwraca ostatni indeks elementu spełniającego warunek określony przez funkcję `p`, kończąc poszukiwania na indeksie `from`.
  - Przykład: `List(1, 2, 3).lastIndexWhere(_ > 1, 2)` zwraca `2`.

- **prefixLength(p: A ⇒ Boolean): Int**

  - Zwraca długość najdłuższego początkowego prefiksu spełniającego warunek określony przez funkcję `p`.
  - Przykład: `List(1, 2, 3).prefixLength(_ < 3)` zwraca `2`.

- **segmentLength(p: A ⇒ Boolean, from: Int): Int**
  - Zwraca długość najdłuższego początkowego segmentu spełniającego warunek określony przez funkcję `p`, zaczynając od indeksu `from`.
  - Przykład: `List(1, 2, 3).segmentLength(_ < 3, 1)` zwraca `1`.

### Dodawanie elementu, uzupełnianie ciągów

- **+: (elem: A): Seq[A]**

  - Dodaje element `elem` na początku kolekcji.
  - Przykład: `1 +: List(2, 3)` zwraca `List(1, 2, 3)`.

- **:+ (elem: A): Seq[A]**

  - Dodaje element `elem` na końcu kolekcji.
  - Przykład: `List(1, 2) :+ 3` zwraca `List(1, 2, 3)`.

- **padTo(len: Int, elem: A): Seq[A]**
  - Uzupełnia kolekcję do długości `len`, dodając element `elem` na końcu, jeśli jest to konieczne.
  - Przykład: `List(1, 2).padTo(4, 0)` zwraca `List(1, 2, 0, 0)`.

## Modyfikowanie ciągów

### Patchowanie

- **patch(from: Int, that: Seq[A], replaced: Int): Seq[A]**
  - Zastępuje `replaced` elementów, zaczynając od indeksu `from`, elementami z `that`.
  - Przykład: `List(1, 2, 3, 4).patch(1, List(5, 6), 2)` zwraca `List(1, 5, 6, 4)`.

### Aktualizowanie

- **updated(index: Int, elem: A): Seq[A]**
  - Zwraca nową sekwencję z elementem `elem` na pozycji `index`.
  - Przykład: `List(1, 2, 3).updated(1, 5)` zwraca `List(1, 5, 3)`.

## Sortowanie

### Sortowanie domyślne

- **sorted[B >: A](implicit ord: Math.Ordering[B]): Seq[A]**
  - Zwraca sekwencję posortowaną według domyślnego porządku.
  - Przykład: `List(3, 1, 2).sorted` zwraca `List(1, 2, 3)`.

### Sortowanie z funkcją

- **sortWith(lt: (A, A) ⇒ Boolean): Seq[A]**
  - Zwraca sekwencję posortowaną według porządku określonego przez funkcję `lt`.
  - Przykład: `List(3, 1, 2).sortWith(_ < _)` zwraca `List(1, 2, 3)`.

### Sortowanie z kluczem

- **sortBy[B](f: A ⇒ B)(implicit ord: Ordering[B]): Seq[A]**
  - Zwraca sekwencję posortowaną według wartości uzyskanych przez funkcję `f`.
  - Przykład: `List("apple", "banana", "cherry").sortBy(_.length)` zwraca `List("apple", "cherry", "banana")`.

## Odwracanie

- **reverse: Seq[A]**
  - Zwraca sekwencję w odwrotnej kolejności.
  - Przykład: `List(1, 2, 3).reverse` zwraca `List(3, 2, 1)`.

## Porównywanie

### Sprawdzanie prefiksu

- **startsWith[B](that: Seq[B]): Boolean**

  - Sprawdza, czy sekwencja zaczyna się od `that`.
  - Przykład: `List(1, 2, 3).startsWith(List(1, 2))` zwraca `true`.

- **startsWith[B](that: Seq[B], offset: Int): Boolean**
  - Sprawdza, czy sekwencja zaczyna się od `that` na pozycji `offset`.
  - Przykład: `List(1, 2, 3).startsWith(List(2, 3), 1)` zwraca `true`.

### Sprawdzanie sufiksu

- **endsWith[B](that: Seq[B]): Boolean**
  - Sprawdza, czy sekwencja kończy się na `that`.
  - Przykład: `List(1, 2, 3).endsWith(List(2, 3))` zwraca `true`.

### Sprawdzanie zawartości

- **contains(elem: Any): Boolean**

  - Sprawdza, czy sekwencja zawiera element `elem`.
  - Przykład: `List(1, 2, 3).contains(2)` zwraca `true`.

- **containsSlice[B](that: Seq[B]): Boolean**
  - Sprawdza, czy sekwencja zawiera podsekwencję `that`.
  - Przykład: `List(1, 2, 3, 4).containsSlice(List(2, 3))` zwraca `true`.

### Sprawdzanie zgodności elementów

- **corresponds[B](that: Seq[B])(p: (A, B) ⇒ Boolean): Boolean**
  - Sprawdza, czy elementy sekwencji odpowiadają elementom w `that` według predykatu `p`.
  - Przykład: `List(1, 2, 3).corresponds(List(2, 3, 4))(_ + 1 == _)` zwraca `true`.

## Operacje „wielozbiorowe”

### Przecięcie

- **intersect(that: Seq[A]): Seq[A]**
  - Zwraca sekwencję elementów, które są wspólne z `that`.
  - Przykład: `List(1, 2, 3).intersect(List(2, 3, 4))` zwraca `List(2, 3)`.

### Różnica

- **diff(that: Seq[A]): Seq[A]**
  - Zwraca sekwencję elementów, które nie znajdują się w `that`.
  - Przykład: `List(1, 2, 3).diff(List(2, 3, 4))` zwraca `List(1)`.

### Unia

- **union(that: Seq[A]): Seq[A]**
  - Zwraca sekwencję będącą zbiorem elementów z obu sekwencji.
  - Przykład: `List(1, 2).union(List(2, 3))` zwraca `List(1, 2, 2, 3)`.

### Unikalne elementy

- **distinct: Seq[A]**
  - Zwraca sekwencję z unikalnymi elementami.
  - Przykład: `List(1, 2, 2, 3).distinct` zwraca `List(1, 2, 3)`.

## SetOps

### Należenie, podzbiór

- **contains(elem: A): Boolean**

  - Sprawdza, czy zbiór zawiera element `elem`.
  - Przykład: `Set(1, 2, 3).contains(2)` zwraca `true`.

- **subsetOf(that: Set[A]): Boolean**
  - Sprawdza, czy zbiór jest podzbiorem `that`.
  - Przykład: `Set(1, 2).subsetOf(Set(1, 2, 3))` zwraca `true`.

### Dodawanie/usuwanie elementów

- **+(elem: A): Set[A]**

  - Dodaje element `elem` do zbioru.
  - Przykład: `Set(1, 2) + 3` zwraca `Set(1, 2, 3)`.

- **-(elem: A): Set[A]**
  - Usuwa element `elem` ze zbioru.
  - Przykład: `Set(1, 2, 3) - 2` zwraca `Set(1, 3)`.

### Operacje na zbiorach

- **intersect(that: Set[A]): Set[A]**

  - Zwraca zbiór elementów, które są wspólne z `that`. Alternatywna nazwa: `&`.
  - Przykład: `Set(1, 2, 3).intersect(Set(2, 3, 4))` zwraca `Set(2, 3)`.

- **union(that: Set[A]): Set[A]**

  - Zwraca zbiór będący zbiorem elementów z obu zbiorów. Alternatywna nazwa: `|`.
  - Przykład: `Set(1, 2).union(Set(2, 3))` zwraca `Set(1, 2, 3)`.

- **diff(that: Set[A]): Set[A]**
  - Zwraca zbiór elementów, które nie znajdują się w `that`. Alternatywna nazwa: `&~`.
  - Przykład: `Set(1, 2, 3).diff(Set(2, 3, 4))` zwraca `Set(1)`.

## MapOps

### Dostęp

- **apply(key: K): V**

  - Zwraca wartość skojarzoną z kluczem `key`. Rzuca wyjątek, jeśli klucz nie istnieje.
  - Przykład: `Map(1 -> "a", 2 -> "b")(1)` zwraca `"a"`.

- **get(key: K): Option[V]**

  - Zwraca wartość skojarzoną z kluczem `key` jako `Option[V]`, obsługując brak klucza.
  - Przykład: `Map(1 -> "a", 2 -> "b").get(1)` zwraca `Some("a")`.

- **getOrElse(key: K, default: ⇒ V): V**

  - Zwraca wartość skojarzoną z kluczem `key`, a jeśli klucz nie istnieje, zwraca `default`.
  - Przykład: `Map(1 -> "a", 2 -> "b").getOrElse(3, "default")` zwraca `"default"`.

- **isDefinedAt(key: K): Boolean**
  - Sprawdza, czy klucz `key` istnieje w mapie. Alternatywna nazwa: `contains`.
  - Przykład: `Map(1 -> "a", 2 -> "b").isDefinedAt(1)` zwraca `true`.

### Tworzenie nowych kolekcji

- **keys: Iterable[K]**

  - Zwraca iterable z kluczami mapy.
  - Przykład: `Map(1 -> "a", 2 -> "b").keys` zwraca `Iterable(1, 2)`.

- **keySet: Set[K]**

  - Zwraca zbiór kluczy mapy.
  - Przykład: `Map(1 -> "a", 2 -> "b").keySet` zwraca `Set(1, 2)`.

- **values: Iterable[V]**
  - Zwraca iterable z wartościami mapy.
  - Przykład: `Map(1 -> "a", 2 -> "b").values` zwraca `Iterable("a", "b")`.

### Transformacje

- **filterKeys(p: K ⇒ Boolean): Map[K, V]**
  - Zwraca nową mapę zawierającą tylko te pary klucz-wartość, dla których klucz spełnia warunek określony przez funkcję `p`.
  - Przykład: `Map(1 -> "a", 2 -> "b", 3 -> "c").filterKeys(_ % 2 == 0)` zwraca `Map(2 -> "b")`.
