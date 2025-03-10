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
    const result = [];
    let index = 0;

    if (!list1.length && !list2.length) return [];
    if (!list.length || !list2.length) return [];
    // 미리 선 정렬후 반복문으로 돌다가 두개 의 렝쓰를 비교해서 뺸 값은 그냥 그대로 잘라서 붙여버리기

    const sortedList1 = list1.sort((a, b) => a - b);
    const sortedList2 = list2.sort((a, b) => a - b);
};