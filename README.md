# Learning Typescript

[TYPESCRIPTLANG](https://www.typescriptlang.org/) | [WIKIPEDIA](https://en.wikipedia.org/wiki/TypeScript)  
TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.

TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.

The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0. TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, beside C# and other Microsoft languages. An official extension allows Visual Studio 2012 to support TypeScript as well. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.

# Setting up Typescript Development Environment

## Installing Node, NPM and Typescript

- Install node from https://nodejs.org/en/
- Open up your terminal window/command prompt (`cmd, git bash, node command prompt`) to run some of node commands
- Verify and check node installation/version by using command: `node -v`
- install typescript globally by using command: `npm install -g typescript`
- Verify typescript Installation by command: `tsc` (tsc = typescript compiler)
- Verify typescript Installation and version both with command: `tsc -v` or `tsc --version`
- Install and use some text editor or IDE (Integrated Development Environment) like `Notepad++, Sublime Text, Adobe Brackets, Visual Studio Code` to type code

# Variable Declarations

[Typescript Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

**let** and **const** are two relatively new types of variable declarations in JavaScript. **let** is similar to **var** in some respects, but allows users to avoid some of the common “gotchas” that users run into in JavaScript. **const** is an augmentation of let in that it prevents re-assignment to a variable.

## var

Declaring a variable in JavaScript has always traditionally been done with the var keyword.

```TypeScript
var hello = "Hello!";
```

## let

The **let** keyword was introduced to JavaScript in ES2015 and is now considered the standard because it’s safer than var. many common problems in JavaScript are alleviated by using let, so you should use it instead of var whenever possible.

```TypeScript
let hello = "Hello!";
```

## const

**const** declarations are another way of declaring variables. They are like let declarations but, as their name implies, their value cannot be changed once they are bound. In other words, they have the same scoping rules as let, but you can’t re-assign to them.

```TypeScript
const hello = "Hello!";
```

# Data Types

[Typescript basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html#)

For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along

## Boolean
The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

```TypeScript
let isDone: boolean = false;
```

### Some example code with boolean
```TypeScript
  let flag: boolean = true;
  if (typeof flag === "boolean") {
    console.log(`flag variable is a ${typeof flag} type`);
    console.log(`flag variable value is ${flag}`);
    flag = false;
    console.log(`Now flag variable value is ${flag}`);
    // flag = 1; We cannot assign 0 or 1 to a boolean type.
```

## Number

## String

## Array

 - Arrays in Typescript works in the same way as they work in JavaScript
 - Same as JavaScript, TypeScript allows us to deal with arrays of values
 - Array types can be written in one of two ways. 
 
 1. In the first, you use the type of the elements followed by [] to denote an array of that element type:
 
 ```TypeScript
 let list: number[] = [1, 2, 3];
 ```
2. The second way uses a generic array type, Array<elemType>:
 
 ```TypeScript
 let list: Array<number> = [1, 2, 3];
 ```
- Some examples
 ```TypeScript
 let list1: string [] = ['JavaScript','jQuery','Angular','React'];
 let list2: [string, string, string, string] = ["JavaScript","jQuery","Angular","React"];
 let list3: Array<string> = ['C','C++','Java','Ruby','Phthon'];
 ```  

## Tuple

## Enum

## Any

- A variable with any type can hold value with any data type (like the first variable holds string than assign number or boolean type)
- For data type any there is no compile-time checking
- The any data type is the supertype of all types in TypeScript which denotes a dynamic type.

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type checking and let the values pass through compile-time checks. To do so, we label these with the any type:

```TypeScript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

**Object** only allow you to assign any value to them. You can’t call arbitrary methods on them, even ones that actually exist:
```TypeScript
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```
>Note: Avoid using Object in favor of the non-primitive object type. [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types)

## Void

## Null and Undefined

## Never

## Object

## Type assertions

## Union

## Literal

## Aliases
