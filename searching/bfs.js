/*

PROBLEM DOMAIN :
Write an algorithm that implements breadth first traversal using a binary search tree.


ALGORITHM :
- Keep track of what the current node is, starting at the root
- Create a list to push node values into
- Create a queue to keep track of which node to visit next
- Push the current node (root) into the queue before beginning the traversal
- While the queue isn't empty ->
- - Change the current node to the first node in the queue
- - Push the value of the current node into the list
- - Check to see if the current node has a left, if so, push it into the queue. If not, check to see if the current node has a right, if so, push it into the queue.
- Return the list


EXAMPLE :

Input ->     9
          4     20
        1  6  15  170

Output -> [9, 4, 20, 1, 6, 15, 170]


SOLUTION :
*/
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
				}
				if (value > curr.value) {
					if (!curr.right) {
						curr.right = newNode;
						return this;
					}
					curr = curr.right;
				}
			}
		}
	}
	bfs() {
		let curr = this.root;
		let list = [];
		let queue = [];
		queue.push(curr);

		while (queue.length > 0) {
			curr = queue.shift();
			list.push(curr.value);
			if (curr.left) {
				queue.push(curr.left);
			}
			if (curr.right) {
				queue.push(curr.right);
			}
		}
		return list;
	}
}
/*

BIG O :
Runtime complexity -> O(n)
Space complexity -> O(n)

*/
