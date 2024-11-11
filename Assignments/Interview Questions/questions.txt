// 1
        function data(){
            console.log("My name is "+ name);
            console.log("My age is"+ age);
            var name = Arshad;
            let age = 22;
        }
        data();
//  *************  output ***************
//  My name is undefined
//  Uncaught ReferenceError: Cannot access 'age' before initialization

// 2

for(var i=0;i<5;i++){
    setTimeout(()=>console.log(i));  
  }
  for(let i=0;i<5;i++){
    setTimeout(()=>console.log(i));  
  }
//  *************  output ***************
// 5,5,5,5,5
// 0,1,2,3,4,5
//  With var, i is function-scoped, so all setTimeout callbacks refer to the final value after the loop (5).
//  With let, i is block-scoped, creating a new i for each iteration, so each callback retains its iteration's value.

// 3
  
   const income ={
    skills:100,
    monthly(){
        return this.skills*10;
    },
    yearly: ()=> 23 + this.skills,
   };
   console.log(income.monthly());
   console.log(income.yearly());
//  *************  output ***************
// 1000
// NaN in arrow funtion we do not able to use  this

// 4
  
  console.log(+true);
  console.log(!"javascript");
  
  
//  *************  output ***************
// 1
// false

// 5

  const code = {
  type: "web", };
  const reactJS = { name: "js", web: true, };

//  *************  output ***************
// A: reactJS[code.type] is valid
// B: reactJS [reactJS ["type"]] is valid
// C: code.type.web is not valid

// 6

  let a = 108;
  let b = new Number(108);
  let c = 108;
  console.log(a == b);
  console.log(a === b);
  console.log(b === c);

//  *************  output ***************
// true    
// false
// false  

// 7

  class Lizard{

      static colorChange (newColor) {
        this.newColor =newColor;
        return this.newColor;
      }
      constructor({ newColor = "orange"} = {}) { 
        this.newColor = newColor; }
      }
  const tommy = new Lizard({ newColor: "orange" })

  // console.log(tommy.colorChange("blue"));

//  *************  output ***************
// TypeError: tommy.colorChange is not a function
// This error occurs because colorChange belongs to the class Lizard, not to any instance like tommy.

// 8

    let message;
    masage = { data: [24] };
    console.log(masage);
      
//  *************  output ***************
// { data: [24] }
// This implicit global behavior only occurs in non-strict mode.
//  In strict mode ("use strict";), this code would throw a ReferenceError because undeclared variables are not allowed.

// 9

    function showModal() {
      console.log(showModal.timeout);
      }
      showModal(); 
      showModal.timeout = 200;
      showModal.timeout = 100;
      showModal(); 

//  *************  output ***************
// undefined
// 100

// 10

      function Human (fname, lName) { 
        this.firstName = fname;
        this.lastName = lName; 
        }
    const MrX = new Human("Mr.", "X");
    const Rock = Human("The", "Rock");
    console.log(MrX);
    console.log(Rock);

//  *************  output ***************
// Human {firstName: 'Mr.', lastName: 'X'}
// undefined

// 11

  // In JavaScript, if a function is called without new and has no return statement, it implicitly returns undefined. Here, Rock = Human("The", "Rock") assigns the return value of Human("The", "Rock") to Rock, which is undefined because the function does not return anything.

  // What are the three phases  of event propagation?

  //  Target > Capturing > Bubbling

  //  Bubbling > Target > Capturing

  //  Target > Bubbling > Capturing

  //  Capturing > Target > Bubbling

//  *************  output ***************
//  Capturing > Target > Bubbling

// 12

    function sum(a, b) {
      return a + b;
    }
    console.log(sum (10, "10"));

//  *************  output ***************
// 1010

// 13

function getSummary(one, two, three) {

  console.log(one);
  console.log(two);
  console.log(three);
  }

const fName = "Vasuki";
const age = 78;
getSummary `${fName} age is ${age}`;

//  *************  output ***************
// ['', ' age is ', '', raw: Array(3)]
// In JavaScript, tagged template literals allow you to pass a template literal (with placeholders) to a function for custom processing. When you use a tagged template literal, JavaScript breaks down the literal into parts: it treats the static text as an array and passes it as the first argument to the function, while each interpolated expression is passed as subsequent arguments.
// Vasuki
//  878

// 14

  function checkAge (data) {

      if (data == {age: 18}) {
          console.log("You are an adult!");
          } 
      else if (data == { age: 18 }){
          console.log("You are still an adult.") 
        }
        else {
          console.log("Hmm.. No Age"); 
          }
  }

  checkAge({ age: 18 });

//  *************  output ***************
// Hmm.. No Age
// When you compare objects in JavaScript (like { age: 18 }), the comparison is based on reference equality, not the content of the object. This means that two objects are only considered equal (=== or ==) if they are the exact same instance in memory, not just because they contain the same properties and values.

// 15

  function getType(... args) {
    console.log(typeof args); 
    }
  getType(108);

//  *************  output ***************
// Object
// In JavaScript, when you use the rest parameter syntax (...args) in a function, it collects all the arguments passed into an array. Arrays are a type of object in JavaScript, which is why typeof args returns "object"

// 16 

    function getAge(){
    "use strict";
      salary = 8212;
      console.log(salary);
  }
    getAge();

//  *************  output ***************
// index.html:227 Uncaught ReferenceError: salary is not defined at getAge

// 17

    var num = 8;
    var num = 10;
    console.log(num);

//  *************  output ***************   
//  10

// 18

    const obj = { 1: "a", 2: "b", 3: "c" }; 
    const set = new Set([1, 2, 3, 4, 5]);
    console.log(obj.hasOwnProperty("1")); 
    console.log(obj.hasOwnProperty(1));
    console.log(set.has("1"));
    console.log(set.has(1));

//  *************  output ***************  
// true    obj has keys that are numbers (1, 2, 3), but in JavaScript, object keys are automatically converted to strings.
// true
// false   Sets are different from objects in that they do not automatically convert types. A Set maintains the exact type of each element.
// true

// 19

      const obj1 = { a: "1", b: "2", a: "3" };

      console.log(obj1);

//  *************  output ***************  
// {a: '3', b: '2'}
// In JavaScript, if an object is defined with duplicate keys, the last value assigned to that key will overwrite any previous values. This is because keys in JavaScript objects must be unique.

// 20

    for (let i = 1; i < 5; i++) {

            if (i === 3) 
            continue;
            console.log(i);
    }
//  *************  output *************** 
// 1  2  4

// 21
      String.prototype.youAreAmazing = () =>{
        return "i am Arshad"
      };
      const who = "viewres";
      console.log(who.youAreAmazing());

//  *************  output ***************         
// i am Arshad
// By defining String.prototype.youAreAmazing, you're adding a new method to all string instances.

// 22

    const a1 = {};
    const b1 = { key: "b" };
    const c1 = { key: "c" };

    a1[b1] = 222;
    a1[c1] = 999;

    console.log(a1[b1]);

//  *************  output ***************   
// Object Keys in Plain Objects: When using objects (b1 and c1) as keys in a plain object (a1), they are automatically converted to the string "[object Object]".
// Overwriting Values: Both b1 and c1 as keys become "[object Object]", so a1[b1] is first set to 222 and then overwritten to 999 by a1[c1].
// Output: console.log(a1[b1]) returns 999 because a1[b1] and a1[c1] refer to the same key "[object Object]"

// 23

    const lang = { name: "ReactJS" };

    function getLib(my) { 
      return `${this.name} version ${my}`; 
      }

    console.log(getLib.call(lang, 18)); 
    console.log(getLib.bind(lang, 18));

//  *************  output ***************   
// ReactJS version 18
// index.html:316 ƒ getLib(my) { 
//   return `${this.name} version ${my}`; 
// }
// getLib.call(lang, 18) immediately invokes the getLib function with this set to lang, returning "ReactJS version 18".
// getLib.bind(lang, 18) returns a new function with this set to lang and 18 as the argument, but it doesn't invoke the function until called explicitly.

// 24

    function sayHi() {
      return (() => 0)();
    }
    console.log(typeof sayHi());

//  *************  output *************** 
// number

// 25

  console.log(typeof typeof 1);

//  *************  output *************** 
// string

// 26

  const numbers = [1, 2, 3]; 
  numbers [10] = 11;
  console.log(numbers);

//  *************  output *************** 
// [1, 2, 3, empty × 7, 11]  

// 27
        (() => {
        let x, y;
        try {
          throw new Error();
        } catch (x) {

        (x =1), (y = 2); 
        console.log(x);
        }
        console.log(x);
        console.log(y);

        })();


//  *************  output *************** 
// 1
// undefined
// 2
// console.log(x) outside the catch block refers to the outer x, which was declared but not assigned any value, so it prints undefined.
// console.log(y) prints 2 because y was assigned a value in the catch block and is not scoped to it; it is accessible outside.

// 28

    const data = [... "Apple"];
    console.log(data);

//  *************  output *************** 
// ['A', 'p', 'p', 'l', 'e']

// 29

    console.log(20+30+'10');

//  *************  output ***************        
// 5010

// 30

      function getMessage(){
        throw 'hello world';
      }
      function sayHello(){
        try{
          const data = getMessage();
          console.log('worked', data);
        }
        catch (e){
          console.log('an error' , e);
          
        }
      }
      sayHello();

//  *************  output ***************  
// an error hello world
// The throw statement in getMessage() causes an exception to be thrown, which is caught by the catch block in sayHello().
// The value 'hello world' is passed to the catch block, where it is logged as part of the error message.

// 31

console.log(parseInt('10+2'));
console.log(parseInt('7FM'));

//  *************  output ***************  
// 10
// 7
// It stops parsing when it encounters the + symbol because parseInt() only parses valid number characters at the start of the string and ignores any non-numeric characters afterward.

// 32

  const result = [1, 2, 3].map(num => {
    if (num > 0) return;
    return num * 2;
  });
  console.log(result);

//  *************  output ***************  
// [undefined, undefined, undefined]

// 33
    function getInfo(member, year) {

            member.name = 'FrontendMaster';
            year ='1947';
    }
    const person = { name: 'Dev' };
    const birthYear = '2097';
    getInfo(person, birthYear);
    console.log(person, birthYear);

//  *************  output ***************  
//  {name: 'FrontendMaster'}'2097'
// person is now { name: 'FrontendMaster' } because it was modified inside the function.
// birthYear remains '2097' because it was not modified (primitive values are passed by value).

// 34

  (()=> {
    let x = (y=10);
  })();
  console.log(typeof x);
  console.log(typeof y);

//  *************  output ***************  
// undefined
// number
// x is not defined in the global scope, so typeof x is undefined.
// y is defined in the global scope as 10, so typeof y is "number"

// 35

const obj2 = { a: 'Mr.X', b: 21 };
const dat = {c: true, ...obj2 };
console.log(dat);

//  *************  output ***************  
// {c: true, a: 'Mr.X', b: 21}

// 36

const obj3 = {};
Object.defineProperty(obj3, 'a', { value: "char" });
console.log(obj3.a);
console.log(Object.keys(obj3));

//  *************  output ***************  
// char
// []
//  defining a property 'a' on obj3 with the value "char"
// Since the property 'a' was defined with the enumerable: false default, it will not appear in the keys.

// 37

    const box = { x: 10, y: 20 };
    Object.freeze (box);
    const shape = box;
    shape.x= 100;
    shape.z = 20;
    console.log(shape);

//  *************  output ***************  
// {x: 10, y: 20}

// 38

    function addItem(item, list) {

    return list.push(item);
    }
    const result1 = addItem('😊', ['🤣']);
    console.log(result1);

//  *************  output *************** 
// 2
// push() returns the new length of the array, which is 2 (because there are now two items in the array)
// push return length not the array itself

// 39

  const name1 = 'Mr.X';
  age1 = 20;
  console.log(delete name1);
  console.log(delete age1);

//  *************  output *************** 
// false
// true
// when you use delete on a variable that was declared with const, let, or var, it will not delete the variable. Instead, it will return false because variables declared with const (or let or var) are not properties of the global object and cannot be deleted.
// Since age1 was not declared with const, let, or var (it’s an implicit global variable), it becomes a property of the global object.In this case, using delete on age1 will delete the property and return true.

// 40

  function* generatorFn(n) {
      console.log('A');
      yield n;
      console.log('B');
      yield n * 2;
  }

  const gen = generatorFn(10);
  console.log(gen.next().value);
  console.log(gen.next().value);

//  *************  output ***************     
// A
// 10
//  B
// 20
// First call: gen.next():

// On the first call to gen.next(), the generator starts executing the function.
// It logs 'A', then pauses at yield i and returns the value i, which is 10.
// The value returned is 10, so console.log(gen.next().value) prints 10.
// Second call: gen.next():

// On the second call to gen.next(), execution resumes right after the first yield.
// It logs 'B', then pauses at yield i * 2 and returns i * 2, which is 20.
// The value returned is 20, so console.log(gen.next().value) prints 20.

// 41

    async function getData() {

    return await Promise.resolve('👮‍♀️');
    }
    const data1 = getData();
    console.log(data1);

//  *************  output ***************   
// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "👮‍♀️"

// 42

const {fName1:feDEV} = {fName1: "Mr.X"};
console.log(fName1);

//  *************  output ***************  
// ReferenceError: fName1 is not defined
// Destructuring with Renaming:
// The line { fName1: feDEV } destructures the fName1 property from the object and renames it to feDEV.
// This means that after destructuring, the value "Mr.X" is assigned to the variable feDEV.
// Accessing fName1:
// In the code, fName1 does not exist as a standalone variable after destructuring. It was only a key in the object, and it has been renamed to feDEV in this context.
// Therefore, trying to log fName1 will result in a ReferenceError, as fName1 is not defined outside the original object.

// 43
    function sum(n1, n2 = n1) {
      console.log(n1 + n2);
    }
    sum(10); 

//  *************  output ***************  
// 20

// 44

let newList = [2,3].push(4);
 console.log(newList.push(5));

//  *************  output ***************  
//  Uncaught TypeError: newList.push is not a function
// The push method adds one or more elements to the end of an array and returns the new length of the array, not the array itself.
// So when you call [2,3].push(4), it adds 4 to the array [2,3], making it [2, 3, 4], and returns 3, the new length of the array.
// Assigning to newList:

// After calling [2,3].push(4), newList is assigned the value 3 (the new length of the array) instead of the array [2, 3, 4].
// Attempting newList.push(5):

// Since newList is a number (3), it does not have a push method, so newList.push(5) will throw an error.

// 45

function getItems(list, ...args, moreItem){

return [...list, ...args, moreItem]

}

getItems(["berry", "apple"], "pear", "kiwi");

//  *************  output ***************  
// SyntaxError: Rest parameter must be last formal

// 46

    class Person {
      constructor(){
        this.name = 'Frontend'
      }
    }

    Person = class anotherPerson {
      constructor(){
        this.name = 'Master'
      }
    };
    const member = new Person();
    console.log(member.name);

//  *************  output *************** 
// Master 
// Now, Person no longer references the original class but instead points to anotherPerson.
// The anotherPerson class has a constructor that sets this.name to 'Master'

// 47

  const name = "Happy singh";
  console.log(name());

//  *************  output *************** 
// TypeError: name is not a function

// 48

      // let name = 'Dev';
      // function getname(){
      //   console.log(name);
      //   let name = "master"
        
      // }
      // getname();

//  *************  output *************** 
// ReferenceError: Cannot access 'name' before initialization

// 49

    const one = false || {} || null;
    const two = null || false || '';
    const three = [] || 0 || true;
    console.log(one,two,three);

//  *************  output *************** 
// {} '' []
// the logical OR (||) operator returns the first "truthy" value it encounters or the last value if none are "truthy."

// 50

  console.log(`${(x=>x)('i love')} JS`)

//  *************  output *************** 
// i love Js

// 51
let nums = 1;
const list = ['😴','😁','🥳'];

console.log(list[(nums += 1)]);

//  *************  output *************** 
// 🥳

// 52

    let random = {name:"leo"}
    random = 23;
    if(!typeof random === "string"){
      console.log("not string");
    }
    else{
      console.log("its string"); 
    }
//  *************  output *************** 
// its string
// !"number" results in false (since "number" is a truthy value).
// Therefore, false === "string" is false, so the condition inside the if statement fails, and the code goes to the else block.

// 53
  const animals = {};
  let dog = {emoji:'🐶'};
  let cat = {emoji:'🦌'};

  animals[dog]={...dog, name:"dug"};
  animals[cat]={...cat, name:"cug"};
  console.log(animals[dog]);

//  *************  output *************** 
// { emoji: '🦌', name: 'cug' }
// Then, animals[cat] = { ...cat, name: "cug" }; overwrites the same "[object Object]" key, so it replaces the previous value with { emoji: '🦌', name: "cug" }

// 54

    const user = {
      email:"ab@gmail.com",
      updtateEmail:email=>{
        this.email=email;
      }
    };
    user.updtateEmail('latest@gmail.com');
    console.log(user.email);

//  *************  output *************** 
// ab@gmail.com
// Arrow functions in JavaScript don’t have their own this context; they inherit this from the surrounding lexical scope where they are defined.
// In this case, this within updtateEmail refers to the outer this, not the user object itself. Therefore, this.email = email; doesn’t affect user.email.

// 55
  const fruit = ['🍋','🍉','🍓']
  fruit.slice(0,1);
  fruit.splice(0,1);
  fruit.unshift('🍒');
  console.log(fruit);

//  *************  output *************** 
// // [ '🍒', '🍉', '🍓' ]
// fruit.slice(0,1);:

// The slice method creates a shallow copy of a portion of an array without modifying the original array.
// Here, fruit.slice(0,1); would return ['🍋'], but since you haven’t stored the result, it has no effect on fruit.
// fruit.splice(0,1);:

// The splice method modifies the original array by removing elements.
// fruit.splice(0,1); removes the first element ('🍋') from the fruit array. Now, fruit is ['🍉', '🍓'].
// fruit.unshift('🍒');:

// The unshift method adds a new element to the beginning of the array.
// fruit.unshift('🍒'); adds '🍒' at the start, so now fruit becomes ['🍒', '🍉', '🍓'].

// 56

    let count = 0;
    const nums2 = [0,1,2,3];

    nums2.forEach(num =>{
      if(num){
        count +=1;
      }
    })
    console.log(count);

//  *************  output *************** 
//  3 
// JavaScript treats 0 as a falsy value, meaning if (0) will evaluate to false.
// All other numbers in the array (1, 2, and 3) are truthy values, so if (num) will evaluate to true for them.

// 57

    const per ={
      name:'Arsh',
      address:{
        city:'agra'
      },
    };
    Object.freeze(per);
    per.name =null;
    per.address.city=null;

    console.log(per);

//  *************  output *************** 
// {
//   name: 'Arsh',
//   address: {
//     city: null
//   }
// }

// 58

  const pers ={
    name:'Arshad',

  };
  Object.seal(pers);
  pers.name ='master';
  pers.skill ='js';

  delete pers.name;
  console.log(pers);


//  *************  output *************** 
// {name: 'master'}

// 59

    const handler = {

    set: () => console.log('Added a new property!',),
    get: () => console.log('Accessed a property!'),
    };

    const person2 = new Proxy({}, handler);
    person2.name = 'FrontendMaster';
    person2.name;

//  *************  output *************** 
// Added a new property!
// Accessed a property!

// 60

  const MESSAGE = 108;
  function getInfo() {
  console.log(MESSAGE);
  const MESSAGE = 'Random mssg';
  }
  getInfo();

//  *************  output *************** 
// ReferenceError: Cannot access 'MESSAGE' before initialization