
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *//**  * Definitio 


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let remain = 0;
    let stack = [];
    while(l1 || l2){
        const v1 = l1 && l1.val;
        const v2 = l2 && l2.val;
        const sum = v1 + v2 + remain;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        stack.push(sum % 10);
        remain = Math.floor(sum / 10);
    }
    if(remain !== 0){
        stack.push(remain);
    }
    return stack;
};