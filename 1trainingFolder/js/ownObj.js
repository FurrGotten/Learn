Math.abs = x => x >= 0 ? x : -x;
`
function FurrArray(a, b, c) {
    this.arr = [a, b, c]
    this.length = 3;
    this.push = function (el) {
        this.arr[this.length] = el;
        this.length++
    }
    this.pop = function (el) {
        if (this.length) === 0 return undefined;
        this.length--
        return this.arr[this.length]
    }
}
const fa = new FurrArray(1, 2, 3);
fa.push(4);
fa.push(5);
fa.pop();
fa.pop();`

function Furr(name) {
    if (!new.target) {
        console.log('Call me with NEW!')
        return
    }

    this.name = name
    // return this - фактически происходит так.
};

function Meh(n) {
    if (!new.target) return new Meh(n)
    this.n = n;
    this.inc = function () {
        this.n++
        return this
    }
    this.dec = function () {
        this.n--
        return this
    }
    this.value = function (){
        return this.n
    }
}
console.log(Meh(5).inc().inc().inc().value())