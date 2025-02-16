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
}