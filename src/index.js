const person = {
  name: 'Frank',
  address: {
    city: 'Go Vap'
  }
};

// const updated = Object.assign({}, person, {name: 'Tu', age: 28});
// const updated = {...person, name: 'Tu', age: 28};
const updated = {
  ...person,
  name: 'Tu', // Shadow copy
  age: 28,
  address: { // Deep copy
    ...person.address,
    city: 'Tan Binh'
  }
};

console.log(person);
console.log(updated);

