function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct type declaration 
console.log(result); // No runtime error

//Using strict null checks to prevent null or undefined error
function addSafe(a: number | null, b: number | null): number | null{
  if(a === null || b === null){
    return null
  }
  return a + b
}
console.log(addSafe(1,null))
console.log(addSafe(1,2))