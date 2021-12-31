// use of non-english characters
let num = 100;
let 数字 = 12;      // use of non-english character for programming

console.log(num);   // outputs 100
console.log(数字);  // outputs 12

// use of unicode escape sequences
let caf\u00e9 = 99;         // unicode codepoint \u00e9 refers to é
console.log(café);          // outputs 99
console.log(caf\u00e9);     // outputs 99

// unicode normalization
let cafe\u0301 = 200;       // use of e followed by acute oblique sign in head to represent café

console.log(café);          //outputs 200 although seems visualy similar to 10 but both identifier have different binary encoding

//optional semicolon
let num1 = 100
let num2 = 500

let x = 3
;[x, x+1, x+2].forEach(console.log);    //use of defensive semicolon