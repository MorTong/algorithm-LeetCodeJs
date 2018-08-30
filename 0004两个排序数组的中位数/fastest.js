/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var a = [];
    for (var i = 0, j = 0; i < nums1.length && j < nums2.length;) {
        if (nums1[i] > nums2[j]) {
            a.push(nums2[j++]);
        }
        else {
            a.push(nums1[i++]);
        }
    }
    var left = nums1.length == i ? nums2.slice(j) : nums1.slice(i);
    a = a.concat(left);
    if (a.length % 2) {
        return a[Math.floor(a.length / 2)];
    }
    else {
        return (a[Math.floor(a.length / 2)] + a[Math.floor(a.length / 2 - 1)]) / 2;
    }
};