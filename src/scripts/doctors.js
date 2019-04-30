
// Write a factory function that creates an object that represents
// a doctor. The function should accept three arguments.

const doctor = {
  name: "Dr. Baybee",
  specialty: "obstetrics",
  address: "404 Epidural Way"
};

const pet = {
  name: "Stella",
  breed: "Boxer"
};


const createDoctor = (name, specialty, address) => {
  return {
    name: name.name,
    specialty: specialty.specialty,
    address: address.address
  };
};