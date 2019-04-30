
/////////////////////////////////  doctors  //////////////////////////////////////

// 1. Write a factory function that creates an object that represents a doctor.
// 2. The function should accept three arguments.

const doctor = {
  name: "Dr. Baybee",
  specialty: "obstetrics",
  address: "404 Epidural Way"
};

const createDoctor = (nameArg, specialtyArg, addressArg) => {
  return {
    name: nameArg,
    specialty: specialtyArg,
    address: addressArg
  };
};

const newDoctor = createDoctor("Dr. Knumb", "dentist", "123 Bicuspid Row");

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
const pet2 = pet("Gil", "Petra");
const pet3 = pet("Compass", "Pigeon");

let bowWowKennels = [];

const petsToKennel = (animal) => {
  bowWowKennels.push(animal);
  return bowWowKennels;
};

petsToKennel(pet1);
petsToKennel(pet2);
petsToKennel(pet3);

console.log(bowWowKennels);
