"use strict";
const character = 'mario';
console.log(character);
let v = [1, 2, 3.4, 5];
v.forEach(num => {
    console.log(num);
});
let character1 = "akhil";
let age = 20;
let thisIsEarth = true;
character1 = "qq";
console.log(character1);
age = 22;
console.log(age);
let circle = (diameter) => {
    return Math.PI * diameter;
};
console.log(circle(2));
//explicit type
let chara;
let dob;
let color;
chara = 'akhil';
dob = 23;
color = false;
console.log(chara);
console.log(dob);
//array type
let family = [];
family = ['johnosn', 'beena'];
console.log(family);
family.push('akhil', 'delma');
console.log(family);
//union type
let mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(true);
console.log(mixed);
//object type
let obj;
obj = { name: "akhil", age: 23 };
console.log(obj.name);
let year = 23;
console.log(year);
year = "1990";
console.log("year is 2010");
let similar;
similar = () => {
    return 'hello again';
};
console.log(similar());
let add = (a, b, c = 10) => {
    console.log(a + b);
};
add(2, 3);
let mixedValue = (uid, item) => {
    console.log(`${item} have the uid of ${uid}`);
};
mixedValue('wnj12', 'akhil');
let relatives = (user) => {
    console.log(`${user.name1} has a uid of ${user.uid}`);
};
relatives({ name1: "akhil", uid: 333 });
let relatives01 = (user) => {
    console.log(`${user.name1} has a uid of ${user.uid}`);
};
const user = {
    name: 'akhil',
    age: 20,
    getMessage() {
        return `hello ${this.name}`;
    },
};
const user2 = {
    name: 'delma',
    getMessage() {
        return `hello ${this.name}`;
    },
    age: 19
};
console.log(user.getMessage());
console.log(user2.age);
console.log(user2.getMessage());
