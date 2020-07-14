// - Arrays in Typescript works in the same way as they work in JavaScript
// - Same as JavaScript, TypeScript allows us to deal with arrays of values
// - There are several ways to write/declare an array:
//     1. let cities: string[];
//         - let arrFrameworks: string [] = ['JavaScript','jQuery','Angular','React'];
//         - let arrFrameworks2: [string, string, string, string] = ["JavaScript","jQuery","Angular","React"];

//     2. let cities: Array<string>
//         - let arrLanguages: Array<string> = ['C','C++','Java','Ruby','Phthon'];
//         - In the above example, we declared an array of strings by assigning it the string type (Now TypeScript will make sure the array contains only strings)

(() => {
  console.log("typescript::datatypes::array");
  let arrFrameworks: string[] = ["JavaScript", "jQuery", "Angular", "React"];
  let arrFrameworks2: [string, string, string, string, number?] = ["JavaScript","jQuery","Angular","React"];

  console.log("arrFrameworks:", arrFrameworks);
  console.log("arrFrameworks2:", arrFrameworks2);

  let arrLanguages: Array<string> = ["C", "C++", "Java", "Ruby", "Phthon"];
  console.log("arrLanguages", arrLanguages);
})();
