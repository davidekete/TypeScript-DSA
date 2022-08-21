/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
class NodeL {
	value: number;
	next: any;
	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	head: any;
	tail: any;
	length: number;
	constructor(value: number) {
		const newNode = new NodeL(value);
		this.head = newNode;
		this.tail = this.head;
		this.length = 1;
	}

	push(value: number): this {
		const newNode = new NodeL(value);

		// Edge case 1: List empty
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}

		// List not empty
		if (this.head) {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		// Edge case 1: Empty list
		if (!this.head) {
			return undefined;
		}

		let temp = this.head;
		let pre = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}

		this.tail = pre;
		this.tail.next = null;
		this.length--;

		// Edge case 2: Single item in list
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return temp;
	}

	unshift(value): this {
		const newNode = new NodeL(value);
		// Edge case 1: Empty list
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}

		if (this.head) {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}
}

const myLinkedList = new LinkedList(5);

