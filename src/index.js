var array = [1, 2, 3];
var value = array[10]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
console.log(typeof value);
console.log(typeof array);
