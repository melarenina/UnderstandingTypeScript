// const person: { // {} TypeScript notation that is an object type
//   name: string; // What variables and types this object must have
//   age: number;
// } = { 
const person = {
  name: 'Marina',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}; 

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}