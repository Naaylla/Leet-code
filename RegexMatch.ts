
    // '.' Matches any single character.​​​​
    // '*' Matches zero or more of the preceding element.


function isMatch(s: string, p: string): boolean {


    let i: number = 0, j: number = 0;

    let main = s.split('')
    let regex = p.split('')

    let precedent = regex[0];
    let precedentRegex;

    // example working
    // s = "mississippi"
    //p = "mis*is*ip*."

    //example not working

    //precedent = p
    // s = "mississippi"
    // p = "mis*is*ip*z"
    


    while(i < s.length || j < p.length) {
        console.log("débug")
        if(regex[j] == undefined && precedentRegex == "*") return true;
        if(regex[j] == undefined && precedentRegex == ".") return false;

        if(main[i] == undefined && precedentRegex =="*") return true; 
        if(main[i] == undefined && precedentRegex ==".") return false; 

        
        if(main[i] == regex[j]) {
            precedent = regex[j]
            i++;
            j++;

        } else if(regex[j] == '*' && precedentRegex != ".") {
                    precedentRegex = regex[j]
                    while(precedent == main[i]) {
                        i++;
                    }
                    j++;

                } else if(regex[j] == '.') {
                    precedentRegex = regex[j]
                    i++;
                    j++;
                } else if(regex[j] == '*' && precedentRegex == ".") return true;

            else if(regex[j] != main[i]) {
                if (regex[j+1] == "*") {
                    precedentRegex="*";
                    j =+ 2;
                }
            }
            else return false;
    }

    return true;

}


let main: string;
let regex: string;


// console.log(isMatch("abc", ".."));       // false
// console.log(isMatch("a", "."));          // true
// console.log(isMatch("ab", ".."));        // true

// // star handling
// console.log(isMatch("aaa", "a*"));       // true
// console.log(isMatch("aaaa", "a"));       // false

// console.log(isMatch("ab", ".*"));        // true
// console.log(isMatch("abcd", ".*"));      // true


// // mixed dot + star
console.log(isMatch("mississippi", "mis*is*p*."));   // false
console.log(isMatch("mississippi", "mis*is*ip*."));  // true
console.log(isMatch("aab", "c*a*b"));    // true  (c* -> "", a* -> "aa", b -> "b")


// // tricky edge cases
// console.log(isMatch("ab", ".*c"));       // false
// console.log(isMatch("aaa", "ab*a*c*a")); // true
// console.log(isMatch("a", "ab*"));        // true  (b* -> "")
// console.log(isMatch("bbbba", ".*a*a"));  // true
// console.log(isMatch("abcd", "d*"));      // false

// // longer stress tests
// console.log(isMatch("aaaabbbbccccddddeeee", "a*b*c*d*e*"));  // true
// console.log(isMatch("abcde", ".*e"));    // true
// console.log(isMatch("abcde", ".*f"));    // false
// console.log(isMatch("abc", "abc.*"));    // true
// console.log(isMatch("abc", "abc.*d"));   // false