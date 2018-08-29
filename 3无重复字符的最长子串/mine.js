/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestStr = '';
    let lenght = s.length;
    let max = 0;
    let index,len,char;

    for(let i = 0;i<lenght;i++){
        char = s[i];
        index = longestStr.indexOf(char);
        len = longestStr.length;
        if(index !== -1){
            if(max < len){
                max = len;
            }
            longestStr=longestStr.slice(index+1)+char;
        }else{
            longestStr+=char;
        }
    }
    if(max < longestStr.length){
        max = longestStr.length
    }
    return max;
};
console.log(lengthOfLongestSubstring("aab"));