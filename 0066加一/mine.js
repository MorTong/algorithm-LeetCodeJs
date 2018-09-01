/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1,len = digits.length;
    let res = digits,i=len-1;
    if(res[len-1]<9){
        res[len-1] += 1;
        return res;
    }else{
        while(carry && i!=0){
            res[i] += carry;
            if(res[i]>9){
                res[i] -= 10;
                carry = 1
            }else{
                carry = 0;
            }
            i--;
        }
    }
    res[0]+=carry;
    if(res[0]>9){
        res[0]=res[0]-10;
        res.unshift(1);
    }
    return res;
};