console.log(+"123" + 7); //1

let x=0;
console.log(x==0?"invalid":"valid");

for(let i=1;i<=10;i++){
if(i%2 === 0)continue;
    console.log(i);
}

let y =[1,2,3,4,5]
let newY = y.filter(ele => ele%2 === 0)
console.log(newY);

let o= [1,2,3] ,q=[4,5,6];
console.log([...o,...q]);

let a=2
switch(a){
    case 1 :
        console.log("sunday");
        break;
    case 2 :
        console.log("monday");
        break;
    case 3 :
        console.log("tue");
        break;
    case 4 :
        console.log("wed");
        break;
    case 5 :
        console.log("thur");
        break;
    case 6 :
        console.log("fri");
        break;
    default :
        console.log("sat");
}

console.log(["a","ab","abc"].map(ele => ele.length));


let check = no =>{
    if(no%3 === 0 && no%5 === 0)console.log("divisible by 3 and 5");
    else if (no%3 === 0)console.log("divisible by 3 only");
    else if (no%5 === 0)console.log("divisible by 5 only");
    else console.log("not divisible by 3 nor 5");
}
check(15);

let sqr = num=>num*num
console.log(sqr(5));


const person ={name:"john" , age:25}
let dest = function (){
    let {name,age}=person;
    console.log(`${name} is ${age} years old`);
}
dest(person)

let sum = (...y)=> y.reduce((acc,ele)=> acc+ele)
console.log(sum(1,2,3,4,5));

const fn =function(){
    return new Promise((res) => setTimeout(()=>res("success"),3000))
}
fn().then(res => console.log(res))

let largestNumber = x => x.reduce((acc,ele) => ele>acc ?ele:acc)

console.log(largestNumber([1,2,3,17,20,6]));


let keys = (m)=>Object.keys(m)
console.log(keys(person));


let split = x=>x.split(" ");
console.log(split("the quick brown fox"));
