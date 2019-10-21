function areEqualNumbers(a, b){
    return Math.abs(a-b)<Number.EPSILON;
};
console.log(areEqualNumbers(0.2 + 0.1, 0.3));