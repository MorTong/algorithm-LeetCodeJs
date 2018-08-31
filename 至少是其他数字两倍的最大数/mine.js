/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const len = nums.length;
    if(len == 1){
        return 0;
    }
    let max,second;//最大和第二大
    if(nums[0]>nums[1]){
        max=0;
        second=1
    }else{
        max=1;
        second=0;
    }
    for(let i=2;i<len;i++){
        if(nums[i]>=nums[max]){
            second = max;
            max = i;
        }else if(nums[second]<nums[i]){
            second = i
        }
    }
    return nums[max] >= nums[second]*2 ? max : -1
};
console.log(dominantIndex([1,0]));