/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let Nums = new Map();
    for(i in nums){
        Nums.set(nums[i],i);
    };
    for(i in nums){
        let y = target-nums[i];
        if(Nums.has(y) && Nums.get(y)!=i)
            return [i-0,Nums.get(y)-0]
    }
};