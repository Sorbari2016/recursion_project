// MERGE SORT PART

// Create a helper function that will compare and merge

function merge(left, right) {
  if (left.length === 0) return right;
  if (right.length === 0) return left;

  if (left[0] < right[0]) {
    return [left[0]].concat(merge(left.slice(1), right));
  } else {
    return [right[0]].concat(merge(left, right.slice(1)));
  }
}


function mergeSort(array){ 
 if (array.length <= 1) {
   return array; 
}
   let middle = Math.floor(array.length/2)
   let leftArray = array.slice(0,middle)
   let rightArray = array.slice(middle)

   const sortedLeftArray = mergeSort(leftArray); 
   const sortedRightArray = mergeSort(rightArray); 
   
   return merge(sortedLeftArray, sortedRightArray);  
}

export default mergeSort; 