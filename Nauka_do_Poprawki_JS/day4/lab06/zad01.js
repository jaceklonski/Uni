const { lp3 } = require('./toplist');



const kawalkiQueen = _.filter(lp3, { 'author': 'Queen'});
console.log(kawalkiQueen)

const pinkpow10 = _.filter(lp3, song => song.place >= 1 && song.place <= 10 && song.author == 'Pink Floyd' );

console.log(pinkpow10)

const result = _.chain(lp3)
    .orderBy('change', 'asc')
    .dropRight(10)
    .value()

console.log(result);

const pierwszy = _.chain(lp3)
    .find("place", 1)
    .pick('author', 'song')
    .value()

console.log(pierwszy)

function miejscazlisty(lista) {
  return  _.filter(lp3, (song) => _.includes(lista, song.place));}

console.log(miejscazlisty([1,5,6,2,4]))

function losowy(n, min, max) {
   if (n == 0) {return}
   else {
    console.log(
        _.chain(lp3)
        .filter(song => song.place >= min && song.place <= max)
        .sample()
        .value())
    
    return losowy(n -1, min, max)}}

losowy(3,1,10)

function printSongsWithDelay(songsList) {
    let index = 0;

    const intervalId = setInterval(() => {
        if (index >= songsList.length || index >= 10) {
            clearInterval(intervalId);
            return;
        }

        console.log(songsList[index]);
        index++;
    }, 2000);
}

//printSongsWithDelay(lp3);

console.log(_.filter(lp3, (song) => song.change < 0))

console.log(_.keyBy(lp3, 'song'))

console.log( (_.chain(lp3)
.groupBy('author')
//pogrupowany obiekt sklada sie z [band] : songs i zapis w map (songs, band) pozwala na rozdzielenie tych dwoch elementow - warto zapamietac
.map((songs, band) => {
    return {
        [band]: _.map(songs, song => ({ song: song.song, place: song.place }))
    };
})
.value()))

console.log( _.countBy(lp3, 'author'))

const maxDrop = _.minBy(lp3, 'change');
const maxRise = _.maxBy(lp3, 'change');

console.log("Największy spadek:", maxDrop);
console.log("Największy wzrost:", maxRise);