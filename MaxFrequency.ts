function maxFrequencyElements(nums: number[]): number {
    
    let frequencies : Record<any, number> = {}
    let instances = new Set(nums)
    //debug
    ///console.log(instances)

    instances.forEach(number => {
        frequencies[number] = 0
    });

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in frequencies) frequencies[nums[i]]++;
    }

    console.log(frequencies)


    let values = Object.values(frequencies)
    let max: number = values[0]
    let output: number = 0;

    for(let i = 0; i < values.length; i++) {
       
        if(values[i] > max) {
            max = values[i];
            output = max;
        }
        else if(values[i] == max) output += max;

        // console.log('max',max)
        // console.log('output',output)
    }

    return output;
};


let test: number[] = [1,2,2,3,1,4]

console.log(`expected 4 vs mine ${maxFrequencyElements(test)}`)

test = [1,2,3,4,5]

console.log(`expected 5 vs mine ${maxFrequencyElements(test)}`)

test = [10,12,11,9,6,19,11];

console.log(`expected 2 vs mine ${maxFrequencyElements(test)}`)


