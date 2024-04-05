// console.log("Hello World!");
// var massage = 'Hello World';
// // Javascript is loosely typed, strictly typed, dynamically typed and statically typed
// console.log(massage); 
// let age=20;
// age="Hello"
// console.log(typeof(age));
// let a;
// console.log(typeof(a));
// let b= true;
// console.log(typeof(b));
// b=false;
// console.log(b);
// let arr=['a','b','c','d'];
// console.log(arr);
// let a1=20;
// let str='12';
// let ans= a1 +str;
// console.log(ans);
// let str1='12';
// let p=parseInt(str);
// console.log(typeof(p));


// let w='12';
// let e=12;
// if(w==e){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// if(w=== e){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// const str2="Rajput";
// // const usrName = 'My name is:' + str2;
// const usrName = 'My name is: `${str2}`';
// console.log(usrName);

//functions
function print(str){
    console.log(str);
}
const s='Hello';
print(s);
function printf(str = 'Nothing is Here'){
    console.log(str);
}
const s1='Hello';
printf();
let a=1;

//function Declearation
function print(){
    console.log('--');
}
function print(){
    console.log('++');
}

//functon assignment(Named)
const q= function print(){
    console.log('--');
}

//functon assignment (Anonymous)
const p= function print(){
    console.log('--');
}
print();
q();
p();

//arrow function assignment
let c = () => {
    console.log('--')
}
c();

//conditional statement
let u = 'mine';
switch(u){
    case 'you':
        console.log('false');
    case 'mine':
        console.log("true");
}
//object in js
// const obj = new Object();
// obj[1]='one';
// obj[2]='two';
// obj[4]='three';
// console.log(obj);

// const obj = {};
// obj[1]='one';
// obj[2]='two';
// obj[4]='three';
// console.log(obj);

const obj ={
    1:'one',
    'name':'Payal',
    12: 'twelve'
};
console.log(obj);


//
const x = prompt('Please tell me');
// console.log(x);
console.log(obj[12]);