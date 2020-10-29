// WD5D1
// 2020.10.19

//Repeat W4D3
console.group('repeat W4D3. JS prototypes.')
//(0:02:) ; vs ,
var test = 10,
    test1 = 11,
    test2 = 12;
//(0:10:)
var EdPuce = "Ed" + " " + "Puce";

//(0:11:) built in prototype functions(?????):
Array;
Object;
Math;
Date;
// Create your own prototype(?????):
// User; - returns an Error: "User is not defined" if not defined.
function User() {};
User;

function City() {};
City;

// (0:20:) arrow function
var coolFn = () => {};
var coolFn = function () {}; //- the same

// (0:24:) built in prototype:
let obj = {
    test: 1,
    test1: 2
};
Object.values(obj); // built in prototype is Object.
console.log(Object.values(obj));

new Date(); //initialize prototype instance

let obj1 = Object.create({});
obj1;

let arr2 = new Array(1, 2, 3, 4);
arr2;
console.log('\t')

console.log('arr6 = [5,7,8,\'a\']')
arr6 = [5, 7, 8, 'a']
console.log(arr6);
console.log('\t')

//built in prototype function
let arr3 = new Array([1, 2, 3, 4], 9, 10, 11);
console.log('let arr3 = new Array([1,2,3,4],9,10,11)');
console.log(arr3.toString());
console.log(arr3);
console.log('\t')

// (0:28:) Create your own prototype
function MyArray1(...params) {
    const arr = []
    params.forEach((val) => {
        arr.push(val)
    })
    return arr;
}
console.log(MyArray1.toString())
console.log('let arr4 = new MyArray1(1, 2, 4, 5)')
let arr4 = new MyArray1(1, 2, 4, 5)
console.log(arr4);
console.log('\t')

//(0:31:)
let date = new Date(); // created instance
date.getFullYear; // one of prototype functions. Returns full actual year
date.getYear; // no longer recommended. year of the given date,... minus 1900

// = = = = = = = = = = = = = = = = = = = = = =
//(0:35/39:) Create your own prototype
console.log(' = = = = = = = = = = =');
console.log('Create your own prototype.\n+++++Example with food:');
function Food(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;

    this.getTotalSum = function() {
        console.log((this.price*this.amount)+" EUR")
    }

    this.getOneItemPrice = function() {
        console.log("One "+name+" const "+price+" EUR")
    }
}
console.log(Food.toString());

console.log('let pizza = new Food("pizza", 7, 3);');
let pizza = new Food("pizza", 7, 3); //create new instance
// pizza.getTotalSum();

let burger = new Food("burger", 5, 30); //create new instance
console.log('let burger = new Food("burger", 5, 30);');
console.log(`burger:`)
console.log(burger)
console.log('burger.getTotalSum()=');
console.log(burger.getTotalSum()); // call a function from it
console.log('burger.getOneItemPrice()=');
console.log(burger.getOneItemPrice());
//(0:40:)
console.log('burger.amount>pizza.amount:')
console.log(burger.amount>pizza.amount);
console.log('(burger.price + pizza.price)*5 = ');
console.log((burger.price + pizza.price)*5);
console.log(' = = = = = = = = = = =');
console.log('\t');
// = = = = = = = = = = = = = = = = = = = = = =

//(0:42:) JS Classes. Old, New (ES6) standarts

function MyClass1(a, b){

}

class MyClass2 {
    constructor(a, b){}
}
const test3 = new MyClass2(1, 2);
console.log(' = = = = = = = = = = =');
console.groupEnd();
console.log('\t');
// = = = = = = = = = = = = = = = = = = = = = =

//DOM

//(0:47:)

//localStorage
// (0:54:)

//Window
// (0:59)
let win = window.open("", "test", {
    targe: "blank"
})
// win.resizeTo(500, 500);


let win2 = window.open("", "", "");
// win2.document;

// win2.document.write('<h1 id="title">I\'m a title</h1>')

// win2.document.getElementById

// [0].addEventListener('hover', function(e) {
//     console.log(e);
// })

// let win3 = window.open();
// win3.document.write("<button>Click me to close</button>")

// win3.document.getElementsByTagName("button")[0].addEventListener("click", function(){
//     win3.close();
// })


// = = =  Task = = = 
// const userNames = [];
// userNames.push("Ed");
// userNames.push("Jon");
// userNames.push("Jim");
// userNames.push("bill");

// let win4 = window.open();

// userNames.forEach(function(value, index) {
//     win4.document.write("<h1>Element in array with" + index + " is " +value +"</h1>");
// })

// win4.document;
// win4.document.getElementsByTagName("h1");
// Object.values(win4.document.getElementsByTagName("h1"));

// win4.document.getElementsByTagName("h1").forEach();

// win4.document.getElementsByTagName("h1")[0].classList;
// win4.document.getElementsByTagName("h1")[0].classList.add("title");
// win4.document.getElementsByTagName("h1")[0].classList.remoove("title");
// win4.document.getElementsByTagName("h1")[0].classList.toggle("title");
// win4.document.getElementsByTagName("h1")[0].classList.toggle("cool");
// win4.document.getElementsByTagName("h1")[0].removeAttribute("class");
// win4.document.getElementsByTagName("h1")[0].setAttribute("what-a-cool-atribut", "test");
// win4.document.getElementById("first");
// win4.document.getElementById("first").classList.add("one", "two");


//cookies vs localStorage
//(2:09:)
document.cookie = "nosaukums = vertiba";
document.cookie;
localStorage;
localStorage.clear();
localStorage.saraksts = {
    test: 1,
    test1: 2
};
localStorage.saraksts;
localStorage.saraksts = JSON.stringify({
    test: 1,
    test1: 2
});
localStorage.saraksts;
JSON.parse(localStorage.saraksts);
localStorage.users = [];