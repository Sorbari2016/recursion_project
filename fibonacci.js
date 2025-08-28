// FIBONACCI PART

// Iterative version
function fibs(number) {
  let output;

  if (number < 0) {
    console.log('Input a number that is either 0, or greater than 0');
    return;
  }

  switch (number) {
    case 0:
      output = [];
      break;
    case 1:
      output = [0];
      break;
    case 2:
      output = [0, 1];
      break;
    default:
      output = [0, 1];
      for (let i = 2; i < number; i++) {
        output.push(output[i - 2] + output[i - 1]);
      }
  }

  return output;
}



// Recursive version
function fibsRec(number) {

console.log("This was printed recursively"); 

  if (number < 0) {
    console.log("Input a number that is either 0, or greater than 0");
    return;
  }
  
// base cases
  if (number === 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

//Recursive case
  let prev = fibsRec(number - 1);
  let nextNumber = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, nextNumber];       
}


export {fibs, fibsRec}
