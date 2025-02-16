import { Node } from "./Node.js";

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

  append(value) {
    const node = new Node(value);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

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

  prepend(value) {
    const node = new Node(value);
    
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

  pop() {
    let current = this.head;

    while (current) {
      if (!current.next) {
        this.head = null;
        this.tail = null;
        return;
      }

      if (current.next.next == null) {
        current.next = null;
        this.tail = current;
        return;
      }

      current = current.next;
    }
  }
}