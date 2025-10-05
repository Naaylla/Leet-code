function replace(n: number): string {
    if((n % 3 == 0) && (n % 5 == 0)) return "FizzBuzz";
    if(n % 3 == 0) return "Fizz";
    if(n % 5 == 0) return "Buzz";
    else return n.toString();
}


function fizzBuzz(n: number): string[] {
    //source: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
    let numbers: number[] = Array.from({length: n}, (_,i) => i+1)
    let res: string[] = [];
    
    numbers.forEach((num) => {
        res.push(replace(num))
    })

    return res
};

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))