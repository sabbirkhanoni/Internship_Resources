const specialForms = {};

function evaluate(expr, scope) {
  return expr;
}

specialForms.if = (args, scope) => {
  if (args.length != 3) {
    throw new SyntaxError("Wrong number of args to if");
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope);
  } else {
    return evaluate(args[2], scope);
  }
};

console.log(specialForms.if([true, "YES", "NO"], {}));   // YES
console.log(specialForms.if([false, "YES", "NO"], {}));  // NO
console.log(specialForms.if([0, "YES", "NO"], {}));      // YES