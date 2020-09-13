// console.log('########## LINKED-LIST ##########')

class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    // handle if the delete node is the head
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    // handle if the delete node is not the head
    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    // handle if the delete node is the tail
    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append("Manu");
linkedList1.append("Thanima");
linkedList1.append("Manu");
linkedList1.append(25);
linkedList1.prepend("First Value");
linkedList1.prepend("First Value");
linkedList1.delete(25);
console.log(linkedList1.toArray());
console.log(linkedList1.find(25));
console.log(linkedList1.find("Thanima"));
linkedList1.insertAfter("New Value", "Manu");
console.log(linkedList1.toArray());
