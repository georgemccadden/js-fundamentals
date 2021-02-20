class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let curr = this.root;
			while (true) {
				if (value < curr.value) {
					if (!curr.left) {
						curr.left = newNode;
						return this;
					}
					curr = curr.left;
				} else {
					if (!curr.right) {
						curr.right = newNode;
						return this;
					}
					curr = curr.right;
				}
			}
		}
	}
}
