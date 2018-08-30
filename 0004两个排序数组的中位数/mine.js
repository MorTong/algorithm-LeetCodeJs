/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1=nums1.length,len2=nums2.length;
    let len = len1 + len2;
    let tempArr=[],count=0,i=0,j=0;
    let isOdd = len%2 === 1; 
    let index = isOdd ? Math.floor(len/2) : len/2;
    if(len1 === 0){
        if(len2>1){
            return isOdd ? nums2[index] : (nums2[index] + nums2[index-1])/2;
        }else{
            return nums2[0];
        }
    }
    if(len2 === 0){
        if(len1>1){
            return isOdd ? nums1[index] : (nums1[index] + nums1[index-1])/2;
        }else{
            return nums1[0];
        }
    }
    while(true){
        if(nums1[i]<=nums2[j]){
            tempArr.push(nums1[i]);
            if(i+1<=len1){
                i++;
            }else{
                while(j<len2 && count <index){
                    tempArr.push(nums2[j++])
                    count++
                }
            }
        }else{
            tempArr.push(nums2[j]);
            if(j+1<len2){
                j++;
            }else{
                while(i<len1 && count < index){
                    tempArr.push(nums1[i++])
                    count++
                }
            }
        }
        if(count === index){
            if(isOdd){
                return tempArr[count]
            }else{
                return (tempArr[count-1]+tempArr[count])/2
            }
        }
        count++;
    }
}