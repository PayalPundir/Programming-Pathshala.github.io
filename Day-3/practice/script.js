var a= 10;
console.log(a);
var a=20; // if we use var
let b=10;
b=30;
const c=20;
console.log(c);
//primitive data type in js
const item= {
    name:"payal",
    class:"MCA",
    section:'B'
};
console.log(item);
console.log(item.class);


const store ={
    name:"Amit",
    phone:8876342510,
    marks:90
};
console.log(store);


console.log(20+'Payal');

console.log(typeof(20+'Payal'));

store.key= 30;
console.log(store);

const dict = {
    one:1, 
    two:2,
    three:3
};
console.log(dict);

console.log(2**2);

let p=20;
let q='20';

console.log(p===q);

console.log((10>5)?'max':'min');

let n= 4;
if(n%2==0 || n%3==0){
    console.log("Divisible");
}
else{
    console.log("not div");
}

for(let i=1; i<10;i++){
    console.log("Payal");
}

let obj={
    a:10,
    b:20,
    c:30
};

for(let x in obj){
    console.log(obj[x]);
}
const arr =[1,2,3,4,5];
for(let i in arr){
    console.log(arr[i]);
}
for(let y of arr){
    console.log(arr[y]);
}

let r=10;
while(r<20){
    console.log("--");
    r++;
}

// const sub = (a,b) =>{
//     let c= a-b;
//     console.log(c);
// }
// sub(4,2);                                  


function sub(a,b){
    let c= a-b;
    console.log(c);
}
sub(4,2);


const objt = {
    harry:98,
    payal:99,
    amit:100
};
for (let i=0; i<objt.length; i++){
    console.log(objt[i]);
}









