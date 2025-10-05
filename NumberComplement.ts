

function findComplement(num: number): number {

    let toBinary = num.toString(2).replaceAll("1","x").replaceAll('0','1').replaceAll('x','0')

    return parseInt(toBinary, 2)
};


console.log(findComplement(5))
console.log(findComplement(1))
