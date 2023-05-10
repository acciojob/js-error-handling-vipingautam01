//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should only consist of integers and +-/* characters and not have invalid characters";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should not have an invalid combination of expression";
  }
}

function evalString(input) {
  const validOperators = "+-/*";
  const invalidStartOperators = "/*+";
  const invalidEndOperators = "+/*-";
  
  // Check for invalid combination of operators
  if (/[\+\-\*\/]{2,}/.test(input)) {
    throw new InvalidExprError();
  }
  
  // Check for invalid start operator
  if (invalidStartOperators.includes(input[0])) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }
  
  // Check for invalid end operator
  if (invalidEndOperators.includes(input[input.length - 1])) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }
  
  // Check for invalid characters
  if (!/^[0-9\s\+\-\*\/]+$/.test(input)) {
    throw new OutOfRangeError();
  }
  
  // Evaluate the expression
  return eval(input);
}

try {
  const result = evalString("1 + 2 - 3 * 4 / -5");
  console.log(result); // logs 3.4
} catch (error) {
  if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
    console.error(error.message);
  } else {
    throw error;
  }
}

