/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max1 = max2 = maxIndex =  0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max2) {
            max2 = Math.min(nums[i],max1)
            if(nums[i] > max1) {
                max1 = nums[i]
                maxIndex = i
            }
        }
    }
    return max1 / max2 >= 2 ? maxIndex : -1
};