function romanToInt(s: string): number {
    let dictionnary: object = {
        I: 1,
        V: 5,
        X: 10,
        L:  50,
        C: 100,
        D: 500,
        M: 1000
    }

    let instances: object = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    }

    let output: number = 0
    let checkFirst: string[] = Object.keys(instances)

    ///debug
    ///console.log(checkFirst)
    
    checkFirst.forEach((instance) => {
        if(s.includes(instance)) {
            ///debug
            ///console.log("it includes")
            s = s.replace(instance, "*")
            //console.log(s)
            output += instances[instance]
            ///console.log(output)
        }
    }
    )

    let letters : string[] = s.split('')
    ///debug
    ///console.log(letters)
    
    letters.forEach((letter) => {
        if(letter in dictionnary) {
            output += dictionnary[letter]
        }
    })

    return output;

};


console.log(`expected 3 vs mine ${romanToInt("III")}`)
console.log(`expected 58 vs mine ${romanToInt("LVIII")}`)
console.log(`expected 1994 vs mine ${romanToInt("MCMXCIV")}`)

