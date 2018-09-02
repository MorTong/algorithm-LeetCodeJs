/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    let res = [];
    let len1=matrix.length,len2;
    if(len1 == 0){
        return [];
    }else{
        len2 = matrix[0].length;
    }
    let r=0,c=0,flag = 1,len = len1*len2;//flag=1表示从左下向右上，0表示从右上到左下
    for(let i=0;i<len;i++){
        res.push(matrix[r][c]);
        if(flag == 1){
            if(c == len2-1){
                r++;
                flag = 0
            }else if(r == 0){
                c++;
                flag = 0;
            }else{ 
                r--;c++; 
            }
        }else{
            if(r == len1-1){
                c++;
                flag = 1;
            }else if(c == 0){
                r++;
                flag = 1;
            }else{
                r++;c--
            }
        }
    }
    return res;
};