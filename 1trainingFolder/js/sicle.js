function getD(a, b, c){
	D = b**2 - 4*a*c
	if(D > 0){
 		x1 = (-b + Math.sqrt(D)) / (2*a);
		x2 = (-b - Math.sqrt(D)) / (2*a);
		console.log('roots are', x1, 'and', x2)
		} else if(D === 0) {
		x = -b / (2*a); 
		console.log('the root is', x);
		} else {
		console.log("there is no roots")
		}
		}
		
console.log (getD(1, 4, 4));

const s = "abcdef";
for (let i = 0; i < s.length; i++) {
console.log(s[i])
};

const s = "abcdef";
for (let i = s.length; i >= 0; i--) {
console.log(s[i])
};


const s = "abcdef";
let i = 0;
while (i < s.length) {
  console.log(s[i])
  i++;
}

const s = "abcdef";
let i = s.length -1;
while (i >= 0) {
  console.log(s[i])
  i--;
}


function reverseStr(str) {
    let revStr = '', i;
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str.charAt(i);
    }
    return revStr;
}
console.log(reverseStr('abcdef'))

const s = "abcdef";
for (let i = s.length; i >= 0; i--) {
newStr += s[i];
console.log(newStr);
}

function reverseStr(s) {
let i = s.length -1;
while (i >= 0) {
let revStr = '';
  revStr += s.charAt(i);
  i--;
}
return revStr
}
console.log(reverseStr('abcdef'))

function trimLeft(str) {}
function trimLeft(str) {
  if(str == null) return str;
  return str.replace(' ', '');
}
console.log(trimLeft('     lol'))