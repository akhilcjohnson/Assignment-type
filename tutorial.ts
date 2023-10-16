const character = 'mario';
console.log(character);

let v = [1,2,3.4,5];
v.forEach(num =>{
    console.log(num)
})
let character1 = "akhil";
let age = 20;
let thisIsEarth = true;

character1 = "qq"
console.log(character1);
age=22;
console.log(age)

let circle = (diameter:number)=>{
    return Math.PI * diameter ;
}
console.log(circle(2));


//explicit type
let chara: string;
let dob:number;
let color: boolean;

chara = 'akhil';
dob = 23;
color = false;
console.log(chara);
console.log(dob);

//array type
let family:string[]=[] ;
family = ['johnosn', 'beena'];
console.log(family)
family.push('akhil', 'delma')
console.log(family)

//union type
let mixed: (number|string|boolean)[]=[];
mixed.push('hello');
mixed.push(20);
mixed.push(true);
console.log(mixed);

//object type
let obj: {name:string, age:number};
obj = {name: "akhil", age: 23};
console.log(obj.name)

let year:any=23;
console.log(year);
year = "1990"
console.log("year is 2010")
let similar : Function;
similar = ()=>{
    return'hello again'
}
console.log(similar());

let add= (a:number, b:number, c:number|string =10):void =>{
    console.log(a+b);
}
add(2,3);


type StringAndNumber=string | number;
type ObjWithNam2= {name1:string, uid:StringAndNumber};

let mixedValue=(uid:StringAndNumber, item: string)=>{
    console.log(`${item} have the uid of ${uid}`)
}
mixedValue('wnj12','akhil' )

let relatives =(user:ObjWithNam2)=>{
    console.log(`${user.name1} has a uid of ${user.uid}`)
}
relatives({ name1: "akhil", uid: 333 });

let relatives01 =(user:ObjWithNam2)=>{
    console.log(`${user.name1} has a uid of ${user.uid}`)
}

interface UserInterface{
    name: string,
    age ?:number,
    getMessage():string
}

const user: UserInterface={
    name:'akhil',
    age:20,
    getMessage() {
       return `hello ${this.name}` 
    },
}
const user2: UserInterface={
    name:'delma',
    getMessage() {
        return `hello ${this.name}` 
     },
     age:19
}
console.log(user.getMessage());
console.log(user2.age);
console.log(user2.getMessage());


