/*

A data structure which contains a `head`, `tail`, and a `length` property. They consist of nodes and each of them has a value and a pointer to another node. (Best for insertions and deletions)

*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}
