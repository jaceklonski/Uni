//lepsze rozw niżej

function checkExchange(arr) {
  const kasa = arr.reduce((kasetka, banknot) => {
    if (banknot == 5) {
      kasetka.push(5);
    }
    if (banknot == 10) {
      if (kasetka.some((element) => element === 5)) {
        kasetka.push(10);
        const indexPierwszejPiatki = kasetka.indexOf(5);
        kasetka[indexPierwszejPiatki] = 0;
        return kasetka;
      } else {
        kasetka.push(666);
        return kasetka;
      }
    }
    if (banknot == 20) {
      if (
        kasetka.some((element) => element === 10) &&
        kasetka.some((element) => element === 5)
      ) {
        kasetka.push(20);
        const indexPierwszejPiatki = kasetka.indexOf(5);
        const indexPierwszejDyszki = kasetka.indexOf(10);
        kasetka[indexPierwszejPiatki] = 0;
        kasetka[indexPierwszejDyszki] = 0;
        return kasetka;
      } else {
        kasetka.push(666);
        return kasetka;
      }
    }

    return kasetka;
  }, []);

  return kasa.some((element) => element === 666);
}

// Przykład działania
console.log(checkExchange([5, 5, 5, 10, 20])); // => true
console.log(checkExchange([5, 5, 10, 10, 20])); // => false
console.log(checkExchange([10, 10])); // => false
console.log(checkExchange([5, 5, 10])); // => true

// function getCounter(min, max) {
//     let acc = min;
//     return function () {
//       if (acc <= max) {
//         return acc++;
//       } else {
//         return undefined;
//       }
//     };
//   }

//lepiej zrobić tak ogólnie:

// function checkExchange(arr) {
//     const banknoty = {
//       5: 0,
//       10: 0,
//       20: 0
//     };

//     return arr.reduce((czyPoprawnaWymiana, banknot) => {
//       if (banknot === 5) {
//         banknoty[5]++;
//       } else if (banknot === 10) {
//         if (banknoty[5] > 0) {
//           banknoty[5]--;
//           banknoty[10]++;
//         } else {
//           czyPoprawnaWymiana = false;
//         }
//       } else if (banknot === 20) {
//         if (banknoty[10] > 0 && banknoty[5] > 0) {
//           banknoty[10]--;
//           banknoty[5]--;
//           banknoty[20]++;
//         } else if (banknoty[5] >= 3) {
//           banknoty[5] -= 3;
//           banknoty[20]++;
//         } else {
//           czyPoprawnaWymiana = false;
//         }
//       } else {
//         czyPoprawnaWymiana = false; // Nieobsługiwany nominał
//       }

//       return czyPoprawnaWymiana;
//     }, true);
//   }
