// const person: { // {} TypeScript notation that is an object type
//   name: string; // What variables and types this object must have
//   age: number;
// } = { 
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Marina',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // It must always have two elements, where the first is a number, and the second is a string
};

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}