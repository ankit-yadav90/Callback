//Call Back function

function sum(a, b) {
    console.log(a+b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);//callback

//set time out 

const hello = () => {
    console.log("hello");
}

setTimeout(hello, 3000);