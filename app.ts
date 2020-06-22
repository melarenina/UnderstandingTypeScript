// const person: { // {} TypeScript notation that is an object type
//   name: string; // What variables and types this object must have
//   age: number;
// } = { 
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuples 
// } = {
//   name: 'Marina',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'] // It must always have two elements, where the first is a number, and the second is a string
// };

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // 5, 6, 7 - by default, it will come as 0, 1, 2

const person = {
  name: 'Marina',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR 
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is Author');
}