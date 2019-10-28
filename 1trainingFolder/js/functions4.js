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
function Queue(initialValue) {
    if (!new.target) {
        console.log("Call me with new, please!");
    }

    if (Array.isArray(initialValue)) this.queue = initialValue
    else if (initialValue === null || initialValue === undefined) this.queue = []
    else this.queue = [initialValue]

    this.enqueue = function(val) {
        this.queue.unshift(val)
    }

    this.dequeue = function () {
        return this.queue.pop()
    }

    this.show = function () {
        return this.queue
    }
}

