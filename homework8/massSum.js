function Sum(a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s;
}
const arrA = [10, 5, 10];
console.log(Sum(arrA));