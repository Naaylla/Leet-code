function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length ; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (i == j) continue;
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }

        }
    }
    return [];
};

var nums = [2, 7, 11, 15];
var target = 9;
console.log("correct: [0,1]", twoSum(nums, target));



nums = [3,2,4]
target = 6
console.log("correct: [1,2]", twoSum(nums, target));


nums = [3,3]

target = 6

console.log("correct: [0,1]", twoSum(nums, target));
