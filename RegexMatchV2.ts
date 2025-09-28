function isMatch(s: string, p: string): boolean {
    let regex = p.split("")
    let main = s.split("")

    let i: number = 0;
    let j: number = 0;

    let previousRegex : string;
    let previous: string;


    while(i < main.length && j < regex.length) {
        
        if(regex[j] == '.' && regex[j+1] == "*") return true;

        //normal

        if(regex[j] == main[i]) {
            previous = regex[j]
            i++;
            j++;
        }

        //dots

        if(regex[j] == '.') {
            previousRegex = "."
            i++;
            j++;
        } 
        //stars
        
        if(regex[j] == "*") {
            previousRegex = regex[j]
            while(previous == main[i]) {
                i++;
            }
            j++;
        }

        if(regex[j] != main[i]) {
            return false;
        }
        
    
    }

    if(regex[j] == undefined && main[i] == undefined) return true;
    if(regex[j] == undefined && main[i] && previousRegex == "*") return true; 
    if(regex[j] == undefined && main[i] && previousRegex != "*") return false; 
    if(regex[j] == '.' && main[i] == undefined) return false;



    return true;

};


console.log(isMatch("abc", ".."));       // false
console.log(isMatch("a", "."));          // true
console.log(isMatch("ab", ".."));        // true

// star handling
console.log(isMatch("aaa", "a*"));       // true
console.log(isMatch("aaaa", "a"));       // false

console.log(isMatch("ab", ".*"));        // true
console.log(isMatch("abcd", ".*"));      // true


// // mixed dot + star
console.log(isMatch("mississippi", "mis*is*p*."));   // false
console.log(isMatch("mississippi", "mis*is*ip*."));  // true
console.log(isMatch("aab", "c*a*b"));    // true  (c* -> "", a* -> "aa", b -> "b")


// tricky edge cases
console.log(isMatch("ab", ".*c"));       // false
console.log(isMatch("aaa", "ab*a*c*a")); // true
console.log(isMatch("a", "ab*"));        // true  (b* -> "")
console.log(isMatch("bbbba", ".*a*a"));  // true
console.log(isMatch("abcd", "d*"));      // false

// longer stress tests
console.log(isMatch("aaaabbbbccccddddeeee", "a*b*c*d*e*"));  // true
console.log(isMatch("abcde", ".*e"));    // true
console.log(isMatch("abcde", ".*f"));    // false
console.log(isMatch("abc", "abc.*"));    // true
console.log(isMatch("abc", "abc.*d"));   // false