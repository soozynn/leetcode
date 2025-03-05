/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 마지막 node가 next에 담은 값을 통해 
    // pos 인덱스에 있는 node로 접근할 수 있으면 순환

    if (head === null){
        return false;
    }

    // 토끼와 거북이를 설정.
    // 거북이는 첫 node, 토끼는 그보다 1칸 앞에서 시작한다.
    let pointer = head.next;
    let node = head;

    // rabbit이 null이면 node가 1개밖에 없는 상황이므로 순환이 아니라 while문을 실행하지 못함.
    // 문제는..node가 여러 개이면서 순환 구조가 아닌 경우에는 연산 도중에 node가 null로 나와서
    // rabbit을 재연산하는 과정에서 런타임 에러가 발생함. 이에 대한 처리가 필요!

    while(pointer !== null){
        // 토끼와 거북이가 같은 node에 있으면 순환이 있는 것.
        if (pointer === node){
            return true;
        }

        // 만약 rabbit의 다음이 있다면
        if (pointer.next){
            // 토끼는 2칸, 거북이는 1칸씩 이동한다.
            pointer = pointer.next.next;
            node = node.next;
            continue;
        }

        // 다음이 없다면 순환 구조가 아니다.
        break;
    }

    return false;
};