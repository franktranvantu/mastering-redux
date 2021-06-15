const numbers = [1, 2, 3];

// Adding
// const added = [...numbers, 4, 5];
// const added = [4, 5, ...numbers];
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, 5, ...numbers.slice(index)];
console.log('Added: ' + added);

// Removing
const removed = numbers.filter(n => n !== 2);
console.log('Removed: ' + removed);

// Updating
const updated = numbers.map(n => n === 2 ? 20 : n);
console.log('Updated: ' + updated);

console.log('Numbers: ' + numbers);