
// Write a factory function that creates an object that represents
// a doctor. The function should accept three arguments.

const doctor = {
  name: "Dr. Baybee",
  specialty: "obstetrics",
  address: "404 Epidural Way"
};

// const pet = {
//   name: "Stella",
//   breed: "Boxer"
// };


const createDoctor = (nameArg, specialtyArg, addressArg) => {
  return {
    name: nameArg,
    specialty: specialtyArg,
    address: addressArg
  };
};

const newDoctor = createDoctor("Dr. Pain", "Dentist", "123 toothy ave");

console.log(newDoctor);



/////////////////////////////////  pets  //////////////////////////////////////

// 1. make a factory function to make a pet
// 2. arguments should be name and breed
// 3. create a bowWowKennels array with three pets


const pet = (name, breed) => {
  return {
    name: name,
    breed: breed
  };
};

const pet1 = pet("Stella", "Boxer");
const pet2 = pet("bob", "fish");
const pet3 = pet("Jerry", "cat");

let bowWowKennels = [];

const petsToKennel = (animal) => {
  bowWowKennels.push(animal);
  return bowWowKennels;
};

petsToKennel(pet1);
petsToKennel(pet2);
petsToKennel(pet3);

console.log(bowWowKennels);



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