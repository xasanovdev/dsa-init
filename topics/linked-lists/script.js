class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function insertToHead(value, head) {
    const newNode = new ListNode(value)
    newNode.next = head
    return newNode
}

function insertToTail(value, head) {
    const newNode = new ListNode(value)
    if(!head) return newNode;

    let current = head
    while(current.next) current = current.next;
    current.next = newNode

    return head
}

function deleteValue(target, head){
    if(target === head.value) return head.next;

    let current = head

    while(current.next && current.next.value !== target) current = current.next

    if(current.next) current.next = current.next.next

    return head

}

function searchValue(value, head) {
    let current = head
    while (current) {
        if(current.value === value)  return current.value
        current = current.next
    }

    return 'Not Found'
}

const nodes = new ListNode(5)
nodes.next = new ListNode(4)

insertToHead(3, nodes)
insertToTail(10, nodes)
deleteValue(2, nodes)
searchValue(10, nodes)


console.log(nodes)