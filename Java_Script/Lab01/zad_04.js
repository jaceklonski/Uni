let lista = [27, 9, 63];
let check = 0;

for ( let o in lista) {
    let val = lista[o];
    if (val > 0) { check += 1;};
    if (o > 2) { 
        check = 0;
        break; };
  }

  if ( check == 3) { 
    lista.sort(function(a, b){return a - b});
    console.log(lista)
    
    if (lista[0] + lista[1] <= lista[2]){
        console.log('Nie można stworzyć trójkąta z tych boków')
    }
    else {
        console.log('Można stworzyć trójkąt z tych boków')
    }

} 
  else { let er = 'Podane liczby nie spełniają wymagań';
    console.log(er) }