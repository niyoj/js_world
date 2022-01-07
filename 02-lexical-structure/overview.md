# Introduction
Lexical strucutre of programming langauge is the set of elementary rules that specifies how you write programs in that language. It is the lowest-level syntax of a language: it specifies what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next. It covers things like;
- Case sensitivity, spaces, and line breaks,
- Comments
- Literals
- Identifiers and reserved words,
- Unicode, etc.

# Case Senitivity, Spaces, and Line Breaks
- JavaScript is case sensitive langauge. For example; WHILE and while are not same in JavaScript.
- Similarly, num, Num, NUM, are three different variables.
- JavaScript ignores the spaces that occurs between the token of the programs. For example; while { } and while{ } are same.
- This feature allows us to indent and format our code in JavaScript to make our code neat and readable.
- It recognizes newline, carriage return, and line feed sequence as line terminators.

# Comments
- Comments are the statements that is ignored by the interpreter but serves for documentation purpose to the developer.
- JavaScript supports two type of comments.
- Singline comment: Any line followed by `//` is treated as single line comments.
- Multiline comment: Any line between `/*` and `*/` is treated as multiline comments.
- Example;
````javascript
// This is a single line comment

/*
 * This is a multi-line comment
 * This is an another comment
 */
````

# Literals
- Literals are the data values that appears in the program.
````javascript
18      //numeral literal
"HI"    //string literal
true    //boolean
null    //absence of an object 
````
More would be covered on (Chapter 3)[https://github.com/niyoj/js_world/master/03-types-values-and-variables]
# Identfiers and Reserved Words
- Identifiers are the names that are used to name the constants, variables, functions, properties or used to provide labels for looping statements.
- A JavaScript identifier must start from a letter, an underscore (_), or a dollar sign ($).
- Subsequent characters can be letters, underscore, digits, or a dollar sign.
- Reserved words are the words that has some meaning already associated with the programming language and are the part of the programming language.
- For example; `while`, `for`, `let`, `var`, etc.
- To be noted that, reserved words cannot be used as identifiers.

# Unicode
- JavaScript programs are writter using Unicode character set and we can use any unicode characters in strings and comments.
- The langauge allows us to use Unicode letters, digits, and ideographs (but not emojis) in identifiers.
- Due to this, a non-english speaker can write JavaScript code in his/her own language.
````javascript
let num = 12;
let 数字 = 12;  //数字 means number in chinese and both statements are valid
````

## Unicode Escape Sequences
- Since every system may not display, input, or correctly process the Unicode characters, JavaScript allows us to write Unicode characters with ASCII characters only.
- These Unicode escapes begin with the characters `\u` and are either followed by exactly four hexadecimal digits (using uppercase or lowercase letters A–F) or by one to six hexadecimal digits enclosed within curly braces.
- For example;
````javascript
let caf\u00e9 = 100;    // unicode character \u00e9 refers to e with and acute oblique sign in its head (é)
console.log(café);      // outputs 100
console.log(caf\u00e9);      // outputs 100
console.log(caf\u{E9});      // outputs 100
````
- To support, use of Unicode characters that has Unicode codepoints greater than 16 bits such as emojis, we can use curly braces as below;
````javascript
console.log("\u{1F600}");   // outputs smiley face emoji
````

## Unicode Normalization
- When things come to use of non-ASCII characters, JavaScript allows multiple encodigs for a single character like The string “é,” for example, can be encoded as the single Unicode character \u00E9 or as a regular ASCII “e” followed by the acute accent combining mark \u0301. These two characters typically looks exactly same on the display but they have different binary encoding, which means these are completely differnet. This can lead to confusion.
````javascript
let caf\u00e9 = 100;
console.log(café);      //outputs 100

let cafe\u0301 = 200;
console.log(café);      //outpurs 200
````
- The Unicode standard defines the preferred encoding for all characters and specifies a normalization procedure to convert text to a canonical form suitable for comparisons. 
- JavaScript assumes that the source code it is interpreting has already been normalized and does not do any normalization on its own.

# Optional Semicolons
- In JavaScript, we use semicolon (;) to mark the end of a statement and separate two statements.
- But, you can also omit the semicolon if those two statements are on different lines or, at the end of the program, or, if the next token is a curly braces "}".
- For example;
````javascript
let a = 100; let b = 100; // this line is legal as two statements are separated by a semi-colon
let c = 1000 let d = 200  // this line is illegal
let e = 500               // this is legal
let f = 200               // this is legal
````
- Also, JavaScript doesnot always marks the end of a line as end of a statement like;
````javascript
let a
a 
= 
3
console.log(a)
````
is similar to 
````javascript
let a; a = 3; console.log(a)
````
- So, JavaScripts treat a end of line as a semicolon if the next nonspace character cannot be interpreted as the continuation of the current statement.
- This may lead to confusion like for the statements below;
````javascript
let y = x + f
(a+b).toString()
````
This may seems like two statements spearated by line breaks but actually it is a single statement and JavaScript interprets the code where parenthesis is treated as function invocation of f and is quivalent to;
````javascript
let y = x + f(a+b).toString();
````
- So, in general statement in new line begining with braces {, parenthesis (, or brackets [ may be treated as they are part of previous line if not separated by semicolon. Since, appearance of other arithmetic and logical operator as a first non-space character in the next line is very rare.
- To prevent this extra semicolon may be used as;
````javascript
let x = 0           // omitting extra semicolon
;[x, x+1, x+2].forEach(console.log);    // use of defensive semicolon
````
Such use of semicolon is called Defensive semicolon.
- However, there are three exception to interpretation of line breaks as semicolon when the first nonspace character of next line is part of the previous line.
- First one involves return, throw, yield, break and continue statements. They are sometimes followed by a label or an identifier which if is on a new line, the line break will be treated as a semicolon. Example;
````javascript
return
true
````
Here, the statment should be evaluated as 
````javascript
return true;
````
But due to the exception rule, the line break is treated as semicolon and hence evaluted as;
````javascript
return; true;
````
- The second exception being in the use of postfix and prefix operators. The postfix operator or prefix operator is followed by or follows an identifier (a integer variable). In such cases, if we want JavaScript to treat the statement as postfix or prefix operator, they must appear on the same line.
- The third exception involves functions defined using concise “arrow” syntax: the => arrow itself must appear on the same line as the parameter list.

# What's Next?
Now, we will be diving into the next topic Types, values, and variables.