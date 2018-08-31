/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0
    for(let i = 0, len = nums.length; i < len; i++) {
        total += nums[i]
    }
    
    let leftS = 0
    for(let i = 0, len = nums.length; i < len; i++) {
        if(total - leftS - nums[i] === leftS) {
            return i
        }
        leftS += nums[i]
        
    }
    return -1
};