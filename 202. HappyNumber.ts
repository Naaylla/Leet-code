function sumSquareDigits(n: number): number {
    let string = n.toString();
    let digits = string.split('')

    let sum: number = 0;

    for(let i = 0; i < digits.length; i++) {
        sum += Number(digits[i])**2
    }
    return sum;
}

let cycle: number[] = []
let res: number;

function isHappy(n: number): boolean {

    console.log(cycle)

    res = sumSquareDigits(n)
    if (res == 1) {
        console.log("debug 1")
        console.log(cycle)
        cycle = [] //necessary to clean the global variable
        res = undefined
        return true;

    }

    if(cycle.includes(res)) return false;
    else cycle.push(res)
    
    return isHappy(res)
};



console.log(`expected true vs mine ${isHappy(19)}`)
console.log(`expected true vs mine ${isHappy(13)}`)
console.log(`expected false vs mine ${isHappy(2)}`)