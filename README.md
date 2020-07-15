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