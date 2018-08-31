/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const len = nums.length;
    if(len < 3){
        return -1;
    }
    let left=nums[0];
    let right=0;
    for(let i=2;i<len;i++){
        right += nums[i];
    }
    for(let i=1;i<len-1;i++){
        if(left == right){
            return i;
        }else{
            left += nums[i];
            right -= nums[i+1];
        }
    }
    return -1
};
pivotIndex([1, 7, 3, 6, 5, 6])