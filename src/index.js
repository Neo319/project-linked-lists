import dropdown from "./dropdown"

import "./style.css"


class LinkedList {
    LinkedList () { // construct an empty list
        this.head = null;

        function isEmpty() { // returns true if the list is empty
            return head == null;
        }

        function prepend(value) { // adds value to the start of the list
            head = value
        }
    }
}

class Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}



const myList = new LinkedList 

console.log(myList)
console.log(myList.isEmpty)
