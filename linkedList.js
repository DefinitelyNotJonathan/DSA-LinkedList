class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    insertBefore(newNode, beforeNode) {
        if(!this.head) {
            return null;
        }
        let currNode = this.head;
        while((currNode !==null) && (currNode.next.value !== beforeNode)) {
            currNode = currNode.next;
        }
        if(currNode.next.value == beforeNode) {
           currNode = new _Node(newNode, beforeNode)
        }
    }
    insertAfter(newNode, afterNode) {
        if(!this.head) {
            return null;
        }
        let currNode = this.head;
        while((currNode !==null) && (currNode.value !== afterNode)) {
            currNode = currNode.next;
        }
        if(currNode.value == afterNode) {
           currNode = new _Node(newNode, currNode.next.value)
        }
    }
    insertAt(newNode, position) {
        if(!this.head) {
            return null;
        }
        let currNode = this.head;
        let currPos = 0
        while ((currNode.next !== null) && (currPos !== position-1)) {
            currNode = currNode.next
            currPos++
        }
        if(currPos === position-1) {
            new _Node(newNode, currNode)
        }
    }
}

let SLL = new LinkedList();

function main() {
    console.log(SLL);
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    console.log(SLL);
    SLL.insertBefore('Athena', 'Boomer');
    console.log(SLL);
    SLL.insertAfter('Hotdog', 'Helo');
    console.log(SLL);
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida');
    function display(LL) {
        currNode = LL.head
        while(currNode.next !== null) {
            currNode = currNode.next
            LL.find(currNode)
        }
        console.log(currNode);
        return
    }
    function size(LL) {
        let currNode = LL.head;
        let currLength = 0
        while(currNode.next !== null) {
            currLength++;
            currNode = currNode.next;
        }
        currLength++;
        return currLength + 1
    }
    function isEmpty(LL) {
        if(LL.head == null) {
            return true
        }
        return false
    }
    function findPrevious(LL, item) {
        if(LL.head == null) {
            return false
        }
        let currNode = LL.head
        while((currNode !== null) && (currNode.next !== null) && (currNode.next !== item)) {
            currNode = currNode.next;
        }
        if(currNode.next == item) {
            return currNode;
        }
    }
    function findLast(LL) {
        if(LL.head == null) {
            return false
        }
        let currNode = LL.head
        while((currNode !== null) && (currNode.next !== null)) {
            currNode = currNode.next;
        }
        if(currNode.next == null) {
            return currNode.next
        }
    }
    display(SLL);
    size(SLL);
    isEmpty(SLL);
    findPrevious(SLL);
    findLast(SLL);
}



main();

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//removing repeating values

function reverseLL(LL) {
    if(LL.head !== null) {
        return false
    }
    let currNode = LL.head
    let firstNode = LL.head
    console.log(currNode);
    while(currNode.next !== null) {
        currNode = currNode.next
        console.log(currNode)
        console.log('next!');
        if(currNode !== firstNode) {
            console.log('swap it!');
            currNode = LL.head
            console.log(LL.head);
        }
    }
}

function find3rd(LL) {
    if(LL.head !== null) {
        return false
    }
    let currNode = LL.head
    let nextNode = currNode.next
    while(nextNode.next !== null ) {
        nextNode = nextNode.next
        if(nextNode.next == null) {
            return nextNode
        }
    }
}


//double check this one with Luke
function sort(LL) {
    let first = LL.head;
    let curr = LL.head
    while (curr.next !== null) {
        curr = curr.next
        curr2 = curr
        while(curr2.next !== null) {
            if (curr2.value<curr.value) {
                //swap em
            }
        }
    }
}
//would not modify linked list as is.
//whenever you find one that's smaller, swap it with that one
//start at first position, iterate, find smaller value, swap position
//look this one up

 1, 2, 3, 4