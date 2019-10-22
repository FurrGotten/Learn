function reverseStr(s) {
    let i = s.length - 1;
    let revStr = '';
    while (i >= 0) {
        revStr += s.charAt(i);
        i--;
    }
    return revStr
}

console.log(reverseStr('abcdef'));

/*
 function deleteSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (result[i] !== ' ') {
            result += str.charAt(i);
        }
    };
    console.log(deleteSpaces('I have no sense'));
 function trimLeft(str) {
     for (i=0; i<str.length; i++) {
         if (str[i] !== ' ') {
             return str.substr(i)
         }
     }
     return ''
 }
         ;


function trimLeft(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] !== '_') {
            return str.substr(i)
        }
    }
    return ''
}
;


function trimRight(str) {
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] !== '_') {
            return str.substr(0, i + 1)
        }
    }
    return ''
}
;

function trimBoth(str) {
    const noLeft = trimLeft(str);
    const noBoth = trimRight(noLeft);
    return noBoth;
}
*/
function trimBoth(str) {
    let start = 0;
    let end = str.length - 1;
    if (str.length === 0) return '';
    for (let i = 0; i <= str.length - 1; i++) {
        start = i;
        if (str[i] !== '_') break;
    }
    for (i = str.length - 1; i > start; i--) {
        end = i;
        if (str[i] !== '_') break;
    }
    return str.substr(start, end - start + 1);
}


console.log(trimBoth('_______I have no sense'));
console.log(trimBoth('I have no sense________'));
console.log(trimBoth('_______'));

