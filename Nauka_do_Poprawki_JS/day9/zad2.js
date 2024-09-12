// Zadanie 2.
// Napisz funkcję:
const poKolei = (fun1, fun2, fun3, cb) => {
fun1().then(res => fun2(res).then(res => fun3(res).then(res => cb(res))))
};
// taką, że:
// • jej trzema pierwszymi argumentami są funkcje zwracające promise –
// możesz założyć, że funkcje te muszą być przygotowane na przyjęcie
// określonej listy argumentów, z których korzystać będzie po kolei
// • funkcja poKolei powinna zapewnić, że fun3 wykona się po fun2, które
// to wykona się zawsze po fun1. Wyniki wygenerowane przez fun1 zostaną
// przekazane do fun2, a wynik fun2 zostanie przekazany do fun3
// • czwartym argumentem jest „callback” cb, czyli funkcja, której zadaniem
// jest przetworzenie wyników zwracanych przez fun3
// • jeżeli któryś z promise'ów zakończy się porażką, funkcja ma dalej
// kontynuować swoje zadanie

const fun1 = () => new Promise(resolve => setTimeout(() => (resolve(1)),1000))

const fun2 = (a) => new Promise(resolve => setTimeout(() => (resolve(a + 1)),1000))

const fun3 = (a) => new Promise(resolve => setTimeout(() => (resolve(a + 1)),1000))

poKolei(fun1, fun2, fun3, (a) => {console.log(a)})