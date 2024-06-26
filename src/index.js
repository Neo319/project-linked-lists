
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
        listVisualizer()
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
        listVisualizer()
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

    getHead() { //return the first list item
        return this.head;
    }

    tail() { //return the last list item
        if (this.isEmpty()) {
            return null
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            return current; //the final node is the result of traversing this list
        }
    }

    at(index) { //returns the element at a given index
        if (index > myList.size()) {
            console.log(this.size() + " < " + index)
            return null
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current; 
        }
    }

    pop() {//removes the last element from the list
        const secondToLast = this.at(this.size() - 2)
        secondToLast.next = null;
        listVisualizer()
    }

    contains(value) { // returns true if 'value' is in the list, false otherwise
        if (this.isEmpty()) {
            return null
        }
        else {
            let current = this.head

            while (current !== null) {
                if (current.data === value) return true
                else {
                    current = current.next
                }  
            }
            return false
        }
    }

    find(value) { //returns the index of a node containing 'value', otherwise null
        let current = this.head
        let index = 0
        while (current !== null) {
            if (current.data === value) {
                return index
            } else 
            current = current.next
            index++
        }
        return null
    }

    toString() { //returns the full list represented as a string
        let current = this.head
        let output = ''
        
        while (current !== null) {
            output += (' ( ' + current.data + ' ) -> ')
            current = current.next
        } 
        output += 'null'
        return output
    }
    
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

const myList = new LinkedList();
// console.log(myList.isEmpty()); // Output: true
myList.prepend(10)
myList.append(20)
myList.append(30)
myList.append(40)
// console.log(myList.isEmpty()); // Output: false
// console.log(myList);


// console.log(myList.find(40)); //3
// console.log(myList.find(5)) //null

console.log(myList.toString())



//display list on DOM actively

function listVisualizer () {
    const output = myList.toString()
    const domList = document.getElementById("mainList")
    domList.innerHTML = ''
    domList.textContent = output
}

