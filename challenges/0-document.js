// TODO (Ex.0): document and write tests for this function

/**
 * Return the negative version of given number
 * @param {number} n - input number
 * @returns {number} the negative version of input number 
 */
function asNegative(n) {
  if (n>0){
    return -n
  } else{
    return n
  }
}

//Test cases

console.log("asNegative(5):", asNegative(5), "should be 5")
console.log("asNegative(-5):", asNegative(-5), "should be -5")
console.log("asNegative(0):", asNegative(0), "should be 0")