let array: number[] = [1, 2, 3];

let value = array[10]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`

console.log(typeof value);
