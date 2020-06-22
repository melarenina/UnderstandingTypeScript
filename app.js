// const person: { // {} TypeScript notation that is an object type
//   name: string; // What variables and types this object must have
//   age: number;
// } = { 
var person = {
    name: 'Marina',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
