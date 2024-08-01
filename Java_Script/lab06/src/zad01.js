const { lp3 } = require("./toplist");
const _ = require("lodash");

const ListaQueen = _.filter(lp3, { author: "Queen" });
console.log(ListaQueen);

console.log("============================================");

const ListaPinkFl = _.filter(lp3, { author: "Pink Floyd" });
const ListaPinkFl10 = _.filter(ListaPinkFl, (x) => x.change > 10);
console.log(ListaPinkFl10);

console.log("============================================");

const ListaTopChange = _.sortBy(lp3, "change");
const n = 10;
const changeminus10Rekordow = _.slice(
  ListaTopChange,
  0,
  Math.max(lp3.length - n, 0)
);
console.log(changeminus10Rekordow);

console.log("============================================");

// const sec2na10Rekordow = _.slice(lp3, 0, Math.max(10, 0));

// function wyswietlanie(index) {
//   console.log(sec2na10Rekordow[index]);
//   index += 1;
//   if (index < sec2na10Rekordow.length - 1) {
//     _.delay(wyswietlanie, 2000, index + 1);
//   }
// }

// wyswietlanie(0);

console.log("============================================");

const topnaliscie = _.filter(lp3, { place: 1 });
const topnaliscie2 = `${topnaliscie[0].author} : ${topnaliscie[0].song}`;
console.log(topnaliscie2);

console.log("============================================");

let tablica = [4, 3, 7, 2];

function numeryztablicy(tablica, listaprzebojow, index) {
  if (_.every(tablica, _.isNumber) && index < tablica.length) {
    const currentSongs = _.filter(listaprzebojow, { place: tablica[index] });
    const nextSongs = numeryztablicy(tablica, listaprzebojow, index + 1);
    return currentSongs.concat(nextSongs);
  } else {
    return [];
  }
}

console.log(numeryztablicy(tablica, lp3, 0));

console.log("====================( 6 )=======================");

function losowynrazy(n, min, max) {
  return _.times(n, () => _.random(min, max));
}

const losowatab = losowynrazy(3, 1, 5);
console.log(numeryztablicy(losowatab, lp3, 0));

console.log("(@)=================<[( 8 )]>=====================(@)");

const spadki = _.filter(lp3, (x) => x.change < 0);
console.log(spadki);

console.log("(@)=================<[( 9 )]>=====================(@)");

const slowniczek = _.keyBy(lp3, "song");
console.log(slowniczek);

console.log("(@)=================<[(10)]>=====================(@)");

const grupowanie = _.groupBy(lp3, "author");
const autorami = _.mapValues(grupowanie, (songs) =>
  songs.map(({ song, place }) => ({ song, place }))
);

console.log(autorami);

console.log("(@)=================<[(11)]>=====================(@)");
const jakczesto = _.countBy(lp3, "author");
console.log(jakczesto);

console.log("(@)=================<[(12)]>=====================(@)");
const zmianasort = _.sortBy(lp3, "change");
const topzmiana = zmianasort[0];
const lipazmiana = zmianasort[zmianasort.length - 1];
console.log(topzmiana);
console.log(lipazmiana);

console.log("(@)=================<[(koniec)]>=====================(@)");
