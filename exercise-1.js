const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (values of Object.keys(person)) {
  console.log(`${values} ${person[values]}`);
}

// Print values of person using Object.keys