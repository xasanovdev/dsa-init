class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function mergeTwoLists(l1, l2) {
    let l = null;

    while (l1 && l2) {
        if (l1.value >= l2.value) {
            l = l1
            l1 = l1.next
        } else {
            l = l2
            l2 = l2.next
        }

        l = l.next
    }

    l.next = l1 || l2

    return l
}