function Sum(a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s;
}
const arrA = [10, 5, 10];
console.log(Sum(arrA));


function furrHash(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i].charCodeAt(0);
    }
    return sum % 65536;
}
console.log(furrHash('meh - fujs'));