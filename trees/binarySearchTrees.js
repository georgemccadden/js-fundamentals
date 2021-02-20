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
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let curr = this.root;
		while (true) {
			if (value < curr.value) {
				if (!curr.left) {
					curr.left = newNode;
					return this;
				}
				curr = curr.left;
			} else if (value > curr.value) {
				if (!curr.right) {
					curr.right = newNode;
					return this;
				}
				curr = curr.right;
			} else if (value === curr.value) {
				console.log('No duplicates allowed!');
				break;
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return false;
		}
		let curr = this.root;
		while (curr) {
			if (value < curr.value) {
				curr = curr.left;
			} else if (value > curr.value) {
				curr = curr.right;
			} else if (value === curr.value) {
				return curr;
			}
		}
		return false;
	}
}
