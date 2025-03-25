/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    /** 노드와 싱글 링크드 리스트의 개념 */

    // 현재 값과 넥스트 값일 일치하면 현재의 넥스트를 그 다음 넥스트로 계속해서 반복할 것
    // 그게 아닐 경우 해당 넥스트는 원래 넥스트를 가짐

    let temp = head;
    let prev = null;

    if (temp === null) {
        return head;
    }

    for (let i = 1; temp !== null; i++) {
        prev = temp;
        temp = temp.next;

        if (prev === temp) {
            temp = temp.next.next;
        }

        i++;
    }

    return head;
};