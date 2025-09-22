var output =[];
var count = 1;
function fizBuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0){
        output.push("Fizz");
    }
    else if(count % 5 === 0){
        output.push("Buzz");
    }
    output.push(count);
    count++;
}
fizBuzz();
console.log(output);
