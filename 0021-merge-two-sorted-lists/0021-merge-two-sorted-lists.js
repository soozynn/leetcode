/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0); // 더미 노드
    let current = dummy; // 병합된 리스트를 가리킬 포인터

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // 남은 노드를 이어 붙이기
    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;

    return dummy.next; // 더미 노드의 next가 실제 병합된 리스트의 시작
};

var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
