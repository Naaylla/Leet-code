function isValid(s: string): boolean {

    let parentheses: object = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    let open = Object.values(parentheses)
    // console.log("open", open)

    let queue: string[] = []
    
    let sentence: string[] = s.split('')
    

    for(let i = 0; i < sentence.length; i++) {

        // console.log(i, " parenthese", sentence[i])

        if(open.includes(sentence[i])) queue.push(sentence[i])  //use .includes not sentence[i] in open
        else {
            let last = queue.pop()
            if(last != parentheses[sentence[i]]) return false;
        }
    }

    if(queue.length > 0) return false;

    return true;
};

console.log(`expected true vs mine ${isValid("()")}`)
console.log(`expected true vs mine ${isValid("()[]{}")}`)
console.log(`expected false vs mine ${isValid("(]")}`)
console.log(`expected true vs mine ${isValid("([])")}`)
console.log(`expected false vs mine ${isValid("([)]")}`)
console.log(`expected false vs mine ${isValid("(")}`)

 