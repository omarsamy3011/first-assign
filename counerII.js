/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let z = init;
    return {
            increment:()=>++init , 
            decrement:()=>--init ,
            reset:()=>{
                init=z;
                return z
            }
    }
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());

