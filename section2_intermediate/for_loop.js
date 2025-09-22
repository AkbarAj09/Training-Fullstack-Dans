var output = [];
function fizBuzz() {
    for (var count = 100; count > 1; count--) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    }
    output.push(count);
  }
}
fizBuzz();
console.log(output);
