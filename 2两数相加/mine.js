/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0);
    var temp = res;
    var carry=0;
    var sum;
    while(l1 && l2){
        sum = l1.val+l2.val+carry;
        if(sum > 9){
            temp.val = sum - 10;
            carry = 1
        }else{
            temp.val = sum;
            carry = 0;
        }
        if(l1.next || l2.next){
            temp.next = new ListNode(0);
            temp = temp.next;
        }else{
            if(carry){
                temp.next = new ListNode(1);
            }
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    if(l1){
        while(l1){
            sum = l1.val + carry;
            if(sum > 9){
                temp.val = sum - 10;
                carry = 1
            }else{
                temp.val = sum;
                carry = 0;
            }
            if(l1.next){
                temp.next = new ListNode(0);
                temp = temp.next;
            }else{
                if(carry){
                    temp.next = new ListNode(1)
                }
            }
            l1 = l1.next;
        }
    }
    if(l2){
        while(l2){
            sum = l2.val + carry;
            if(sum>9){
                temp.val = sum - 10;
                carry = 1;
            }else{
                temp.val = sum;
                carry = 0;
            }
            if(l2.next){
                temp.next = new ListNode(0);
                temp = temp.next;
            }else{
                if(carry){
                    temp.next = new ListNode(1)
                }
            }
            l2= l2.next;
        }
    }
    return res
};
var res = addTwoNumbers(l1,l2);
console.log(res); 