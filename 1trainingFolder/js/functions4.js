function isEqual(a, b) {
    if (!(Array.isArray(a) && Array.isArray(b))) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}


const arrA = [1, 2, 'rainbow'];
const arrB = [1, 2, 'rainbow'];
//const arrA = 1;

console.log(isEqual(arrA, arrB));

