
var containsDuplicate = function(nums) {
    let htable = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in htable) {
            return true;
        } else {
            htable[nums[i]] = 1
        }
    }
    return false;
};

let nums = [1,2,3,1];
console.log(containsDuplicate(nums));


// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true