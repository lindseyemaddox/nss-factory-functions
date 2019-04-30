
/////////////////////////////////  music row  //////////////////////////////////////

// 1. make an array for each label
// 2. build artists array
// 3. factory functions for each genre
// 4. push artists to appropriate label array

let jumpStop = [];
let chatten = [];
let polar = [];

const artists = [
  { name: "Bruce Atikins", genre: "country" },
  { name: "Jensen Brown", genre: "pop" },
  { name: "Dre Funkz", genre: "funk" },
  { name: "Dusta Grimes", genre: "rap" },
  { name: "Bartholomew Danielson", genre: "bluegrass" },
  { name: "Avilee Dallas", genre: "country" },
  { name: "Austin Kinkaid", genre: "pop" },
  { name: "Loyoncé Branis", genre: "rap" },
];

const artistToLabel = (artistsArg) => {
  artistsArg.forEach(artist => {
    if (artist.genre === "country" || artist.genre === "bluegrass") {
      chatten.push(artist.name);
    }
    else if (artist.genre === "funk" || artist.genre === "rap") {
      jumpStop.push(artist.name);
    }
    else if (artist.genre === "pop") {
      polar.push(artist.name);
    }
    else {
      console.log("artist not classified");
    }
  });
};

artistToLabel(artists);
console.log(polar);