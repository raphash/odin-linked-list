export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(node) {
    if (!this.head) {
      this.head = node;
      return;
    }

    if (this.head && !this.tail) {
      this.tail = node;
      this.head.next = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  prepend(node) {
    if (!this.head) {
      this.head = node;
      return;
    }

    if (this.head && !this.tail) {
      this.tail = this.head;
      this.head = node;
      this.head.next = this.tail;
      return;
    }

    node.next = this.head;
    this.head = node;
  }
}