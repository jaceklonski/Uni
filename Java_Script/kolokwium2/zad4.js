class Instrument {
  constructor(waga, nazwa) {
    this.waga = waga;
    this.nazwa = nazwa;
  }
  play() {
    console.log("teraz gra: ", this.nazwa);
  }
  compare(x) {
    this.waga - x.waga;
  }
}

const listainstr = [
  new Instrument(100, "gitara"),
  new Instrument(200, "piano"),
  new Instrument(4, "perkusja"),
  new Instrument(5, "trojkat"),
  new Instrument(10, "ukulele"),
];

listainstr.map((elem) => elem.play());

// console.log(
//   listainstr.sort((a, b) => {
//     a.compare(b);
//   })
// );

console.log(
  listainstr.sort((a, b) => {
    a.waga - b.waga;
  })
);

console.log(listainstr[1].waga);
