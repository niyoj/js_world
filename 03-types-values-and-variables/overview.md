# Introduction
- The type of values that can be represented or manipulated by a programming language is called data types.
- When a program, needs to store a value so that it could be used for future purpose, it stores or assign the value to a variable.
- Variables are the name that are used to name to value.

# Data Types in JavaScript in NutShell
- In JavaScript, there are mainly two types of data;
    - Primitive types (numerals, strings, boolean, and special types),
    - Object types (any type of values that is not number, string, boolean, symbol, null or undefined, then it is object)

## Object
- An object (that is, a member of the type object) is a collection of properties where each property has a name and a value (either a primitive value or another object).
- The language also defines a special kind of object known as arrays, that represents ordered collection of primitive data types.
- A set object represents a set of values.
- A map object represents mapping from keys to values.
- Various “typed array” types facilitate operations on arrays of bytes and other binary data.
- The RegExp type represents textual patterns and enables sophisticated matching, searching, and replacing operations on strings.
- The Date type represents dates and times and supports rudimentary date arithmetic. 
- Error and its subtypes represent errors that can arise when executing JavaScript code.
- In JavaScript, functions and classes are special type of object. They are not just part of the programming language but, they are themselves the values that can be manipulated by JavaSript programs.

## Memory Management by JS
- The JavaScript interpreter performs automatic garbage collection for memory management. This means that a JavaScript programmer generally does not need to worry about destruction or deallocation of objects or other values. 
- When a value is no longer reachable—when a program no longer has any way to refer to it—the interpreter knows it can never be used again and automatically reclaims the memory it was occupying. 
- JavaScript programmers do sometimes need to take care to ensure that values do not inadvertently remain reachable—and therefore nonreclaimable longer than necessary.

## Methods
- JavaScript supports an object-oriented programming style. Loosely, this means that rather than having globally defined functions to operate on values of various types, the types themselves define methods for working with values. Example;
````javascript
a.sort();           //sorts the array
````
In above example, rather than passing to array `a` to a function `sort()` as an argument, we invoke the `sort()` method of a.

- Not only object types have methods, but numbers, strings, booleans, and symbol behave as if they have methods as well.
- In JS, `null` and `undefined` are only data types where methods cannot be invoked on.

## Mutability
- In JS, Object data types are mutable and its Primitive data types are immutable.
- Mutable data type means such types of data whose value can be changed. 
- We can change the values of arrays and objects, but changing the value of number, booleans, symbols, null, and udefined doesnot makes any sense.
- In JS, String is also immutable.

## Type conversion
- JS performs type conversion automatically. 
- If a program expects a string, and you give it a number, it will automatically convert the number to a string for you. And if you use a non-boolean value where a boolean is expected, JavaScript will convert accordingly. 
- JavaScript’s literal value conversion rules affect its definition of equality, and the == equality operator performs type conversions.
- In practice, however, the == equality operator is deprecated in favor of the strict equality operator === , which does no type conversions.


- Constants are declared with const and variables are declared with let (or with var in older JavaScript code).
- JavaScript constants and variables are untyped: declarations do not specify what kind of values will be assigned.
