console.log("Hello world!")

let a = 4;
const b = 3;

a = 3;
// b = 4; // stałej nie można zmianiać

let arr = [1, 2, 3];
arr.lengt; // jak jest literówka to nie wyświetla błędu

// waga nie jest przywiązywana do tego jakiego typu jest zmienna
// wszystkie liczby są jako Number ( nie istnieje np int)

let x = 5; // nie podajemy typu bo JS się domyśla że to liczba
console.log(x, typeof x);

x = x + ""; // zmieni automatycznie na String
console.log(x, typeof x);

x = +x; // znowu będzie liczbą
console.log(x, typeof x); //trzeba być uważnym na jakim typie wykonujemy operacje

// 2+2 = 4
// "2"+"2"="22"
// 2 + 2 - 2 = 2
// "2" + "2" - "2" = 20