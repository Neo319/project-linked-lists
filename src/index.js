import dropdown from "./dropdown"

import "./style.css"


class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() { //return true if the list is empty
        return this.head === null;
    }

    prepend(value) { //add element to the start of the list
        if (this.isEmpty()) {
            this.head = new Node(value, null);
        } else {
            let tmp = this.head;
            this.head = new Node(value, tmp);
        }
    }

    append(value) { //add node to the end of the list
        if (this.isEmpty()) {
            this.head = new Node(value, null);
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new Node(value, null);
        }
    }

    size() { //return the size of the list
        let current = this.head; 
        let counter = 0
        
        if (this.isEmpty()) {
            return 0;
        } else {
            counter = 1 //increase to 1 because the head is already counted
            while (current.next !== null) {
                current = current.next;
                counter++;
            }
            return counter;
        }
        
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

const myList = new LinkedList();
console.log(myList.isEmpty()); // Output: true
myList.prepend(10);
myList.append(20);
myList.append(30);
console.log(myList.isEmpty()); // Output: false
console.log(myList);

console.log(myList.size())
