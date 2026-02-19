class Node {
    constructor(value, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}


export class LinkedList {
    headNode;
    constructor(){
        this.headNode = null;
    }

    append = (value) => {
        const newNode = new Node(value);
        if(!this.headNode){
            this.headNode = newNode;
            return;
        }
        let currentNode = this.headNode;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    prepend = (value) => {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size = () => {
        let count = 0;
        let currentNode = this.headNode;
        while(currentNode){
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head = () => {
        return this.headNode ? this.headNode.value : undefined;
    }

    tail = () => {
        if(!this.headNode) return undefined;
        let currentNode = this.headNode;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    at = (index) => {
        let count = 0;
        let currentNode = this.headNode;
        while(currentNode){
            if(count === index) return currentNode.value;
            count++;
            currentNode = currentNode.nextNode;
        }
        return undefined;
    }

    pop = () => {
        if(!this.headNode) return undefined;
        if(!this.headNode.nextNode){
            const value = this.headNode.value;
            this.headNode = null;
            return value;
        }

        let currentNode = this.headNode;
        while(currentNode.nextNode.nextNode){
            currentNode = currentNode.nextNode;
        }
        const value = currentNode.nextNode.value;
        currentNode.nextNode = null;
        return value;
    }

    contains = (value) => {
        let currentNode = this.headNode;
        while(currentNode){
            if(value === currentNode.value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    findIndex = (value) => {
        let currentNode = this.headNode;
        let count = -1;
        while(currentNode){
            if(value === currentNode.value) return ++count;
            count++;
            currentNode = currentNode.nextNode;
        }
        return -1;
    }

    toString = () => {
        if(!this.headNode) return null;
        let currentNode = this.headNode;
        let string = "";
        while(currentNode){
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        string += "null";
        return string;
    }
}