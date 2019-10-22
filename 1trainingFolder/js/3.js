function replaceNumbers(s, placeholder = '_') {
    let result = ''
    for (let i=0; i<s.length; i++) {
        const symbol = s[i];
        if (Number.isNaN(Number(symbol))) result += symbol
        else result += placeholder;
    }
    return result;
}

console.log(replaceNumbers('aaa12afdss434dfjkj 8', 'lol'))
console.log(replaceNumbers('66414I have13no63sense'));

function f(x, y) {
    console.log(arguments)
};
console.log(f('a', 'b', 'c'))
