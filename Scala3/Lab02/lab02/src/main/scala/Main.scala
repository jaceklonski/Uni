import javax.management.ValueExp

def parzysta(n: Int): Boolean = {
  if n % 2 == 0 then true
  else false
}


@main
def zadanie_01: Unit = {
  println(s"8 ${parzysta(8)}")
  println(s"6 ${parzysta(6)}")
  println(s"7 ${parzysta(7)}")
  println(s"5 ${parzysta(5)}")
  println(s"3 ${parzysta(3)}")
}


@main
def zadanie_02: Unit = {
  println(s"32 40 NWD:${nwd(32, 40)}")
  println(s"50 40 NWD:${nwd(50, 40)}")
  println(s"32 64 NWD:${nwd(32, 64)}")
  println(s"64 40 NWD:${nwd(64, 40)}")
}

@annotation.tailrec
def nwd(a: Int, b: Int): Int = {
  if (a != b) {
    if (a < b){
      nwd(a, b - a)
    }
    else{
      nwd(a - b, b)
    }
  } 
  else {a}
}


def pierwsza(n: Int): Boolean = {
    assert(n >= 2)
    for (i <- 2 to math.sqrt(n).toInt){
      if (n%i == 0){
        return false
      }
    }
    return true
}

@main
def zadanie_03(liczba: Int): Unit = {
    println(s"$liczba pierwsza? ${pierwsza(liczba)}")
    println(s"18 pierwsza? ${pierwsza(18)}")
}

def hipoteza(n: Int): Unit = {
  val wynik = skladniki(n-2, 2)
  if (wynik > 0){
  print(wynik)}
  else{print(n)}
}

@annotation.tailrec
def skladniki (a: Int, b: Int): Int = {
  if (pierwsza(a) && pierwsza(b)){a}
  else {skladniki(a-1, b+1)}
}

@main
def zadanie_04(n: Int): Unit = {
  println(f"${hipoteza(n)} + ${n - hipoteza(n)}")

    // if (n%2 == 0 && n>2){
    //   if (hipoteza(n) != false){
    //     println(s"TAK -> ${n} = ${hipoteza(n)} + ${n - hipoteza(n)}")
    //   }
    // }
    // else {
    //   println("NIE")
    // }
    // Sprawdzamy czy n jest parzysta i większa od 2
    //   TAK -> wywołujemy hipoteza(n)
    //   NIE -> kończymy z odpowiednim komunikatem.
}