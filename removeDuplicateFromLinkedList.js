// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  const head = linkedList;
  let node = head;

  while (node) {
    let nextDistinctNode = node.next;
    while (nextDistinctNode && node.value === nextDistinctNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }
    node.next = nextDistinctNode;
    node = node.next;
  }
  return head;
}
