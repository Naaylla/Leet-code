function factorial(n: number): number {
   let output: number = 1;
   for(let i = 2; i <= n; i++) {
      output *= i
   } 

   return output;
}

function climbStairs(n: number): number {

   let counter: number = 0; 
   for(let i = 0; i <= n; i++) {               
      for(let j = 0; j <= n; j++) {
         if (2*i+j == n) {
             if(i != 0 && j != 0) {
               counter += factorial(i+j) / (factorial(i) * factorial(j));
             } else counter++;
         }
      }
   }

   return counter;
};


console.log(`expected 2 vs mine ${climbStairs(2)}`)
console.log(`expected 3 vs mine ${climbStairs(3)}`)
console.log(`expected 21 vs mine ${climbStairs(7)}`)