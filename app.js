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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Marina',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is Author');
}
