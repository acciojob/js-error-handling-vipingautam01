//your code here
class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters and not < arg >");
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  try {
    if (/[\d\s+-/*]+/.test(expression) === false) {
      throw new OutOfRangeError();
    }

    if (/\+\+|--|\+\-|-\+|\*\/|\/\*/.test(expression) === true) {
      throw new InvalidExprError();
    }

    if (/^[\/*+]/.test(expression) === true) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/[\/*+-]$/.test(expression) === true) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Evaluate the expression if it passes all checks
    const result = eval(expression);
    return result;
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
}

// Testing the evaluator function
try {
  const expression1 = "5 + 3 - 2";
  const result1 = evalString(expression1);
  console.log("Result 1:", result1);

  const expression2 = "10 / 2 * 3";
  const result2 = evalString(expression2);
  console.log("Result 2:", result2);

  const expression3 = "2 + 4 *";
  const result3 = evalString(expression3);
  console.log("Result 3:", result3);
} catch (error) {
  console.error("Unexpected error:", error);
}

