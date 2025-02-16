export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  get size() {
    let size = 0;
    let current = this.head;

    while (current) {
      current = current.next;
      size += 1;
    }

    return size;
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

  at(targetIndex) {
    let current = this.head;
    let nodeIndex = 0;

    while (current) {
      if (targetIndex == nodeIndex) {
        return current;
      }
      current = current.next;
      nodeIndex += 1;
    }

    return null;
  }
}