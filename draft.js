

function getA() {
    let a = 1;
    let b = 2;
    return function test() {
    console.log(a, b)
};
}

function getB() {
    let a = 6;
    let b = 8;
    return function test() {
    console.log(a, b)
};
}

getA()();
getB()();