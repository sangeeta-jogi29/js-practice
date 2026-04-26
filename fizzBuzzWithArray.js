function fizzBuzz(n) {
    let number=[];
    for (let num = 1; num <= n; num++) {
        
        if (num % 3 === 0 && num % 5 === 0) {
            number.push("FizzBuzz");
        } else if (num % 3 === 0) {
            number.push("Fizz");
        } else if (num % 5 === 0) {
            number.push("Buzz");
            
        } else {
            
            number.push(num);
        }

        
    }
  return number;  
}

console.log(fizzBuzz(40));