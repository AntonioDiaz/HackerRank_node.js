var Node = function(data) {
    this.data = data;
    this.next = null;
};

var print = head => {
    if(head) {
        do {
            console.log(head.data);
            head = head.next;
        } while(head);
    }
};

var reversePrint = head => {
    if (head) {
        reversePrint(head.next);
        console.log(head.data);
    }
};

var reverseLinkedList = head => {
    let reversedList = null;
    while(head!=null) {
        if (reversedList==null) {
            reversedList = new Node(head.data);
        } else {
            reversedList = insertHead(reversedList, head.data);
        }
        head = head.next;
    }
    return reversedList;
};

var insertTail = (head, data) => {
    if (head==null) {
        return new Node(data);
    } else {
        let headOriginal = head;
        while(head.next!=null) {
            head = head.next;
        }
        head.next = new Node(data);
        return headOriginal;
    }
};

var insertHead = (head, data) => {
    if (head==null) {
        return new Node(data);
    } else {
        let newNode = new Node(data);
        newNode.next = head;
        return newNode;
    }
};

var insertPosition = (head, data, position) => {
    if (head==null) {
        return new Node(data);
    }
    //inserting first element.
    if (position===0) {
        let newNode = new Node(data);
        newNode.next = head;
        return newNode;
    }
    let countNode = 0;
    let previousNode = head;
    let headOriginal = head;
    while (head!=null){
        if (countNode===position) {
            let newNode = new Node(data);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
        }
        previousNode = head;
        head = head.next;
        countNode++;
    }
    if (countNode===position) {
        let newNode = new Node(data);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
    }
    return headOriginal;
};

var deleteNode = (head, position) => {
    let headCopy = head;
    let previousPointer = head;
    let countNode = 0;
    if (head==null) {
        return head;
    }
    if (position===0) {
        return head.next;
    }
    while (headCopy!=null){
        if (countNode===position) {
            previousPointer.next = headCopy.next;
        }
        countNode++;
        previousPointer = headCopy;
        headCopy = headCopy.next;
    }
    return head;
};

var countElements = (head) => {
    let headCopy = head;
    let count = 0;
    while (headCopy!=null ){
        count++;
        headCopy = headCopy.next;
    }
    return count;
};

var compareLinkedLists = (headA, headB) => {
    const DISTINCT = 0;
    const EQUAL = 1;
    let headACopy = headA;
    let headBCopy = headB;
    let countA = countElements(headACopy);
    let countB = countElements(headBCopy);
    if (countA!=countB) {
        return DISTINCT;
    } else {
        while (headACopy!=null) {
            if(headACopy.data!=headBCopy.data) {
                return DISTINCT;
            }
            headACopy = headACopy.next;
            headBCopy = headBCopy.next;
        }
        return EQUAL;
    }
};

var mergeLinkedLists = (headA, headB) => {
    let headMerged = null;
    while (headA!=null || headB!=null) {
        if (headA!=null && headB!=null) {
            if (headA.data<headB.data) {
                headMerged = insertTail(headMerged, headA.data);
                headA = headA.next;
            } else {
                headMerged = insertTail(headMerged, headB.data);
                headB = headB.next;
            }
        } else if (headA!=null) {
            headMerged = insertTail(headMerged, headA.data);
            headA = headA.next;
        } else {
            headMerged = insertTail(headMerged, headB.data);
            headB = headB.next;
        }
    }
    return headMerged;
};

var getValueNode = (head, position) => {
    let size = countElements(head);
    let headCopy = head;
    for (var i = 0; i < size - position -1; i++) {
        headCopy = headCopy.next;
    }
    return headCopy.data;
};

var removeDuplicates = (head) => {
    var headNoDuplicates = null;
    var nodesInList = new Set();
    while (head!=null) {
        if (!nodesInList.has(head.data)) {
            headNoDuplicates = insertTail(headNoDuplicates, head.data);
            nodesInList.add(head.data);
        }
        head = head.next;
    }
    return headNoDuplicates;
};


function hasCycle(head) {
    if (head===null) {
        return 0;
    } else {
        let count = 0;
        while(head!=null) {
            head = head.next;
            if (count>100) {
                return 1;
            }
            count++;
        }
        return 0;
    }
}




/*
let node01 = new Node(1);
let node02 = new Node(2);
let node03 = new Node(3);
node01.next = node02;
node02.next = node03;
let myvar = getValueNode(node01, 2);
console.log("myBar " + myvar);


let node01 = new Node(1);
let node02 = new Node(2);
let node03 = new Node(3);
node01.next = node02;
node02.next = node03;
reversePrint(node01);
*/
//let node = insertTail(null, 5);
//print(node);
//node = insertTail(node, 78);
//print(node);
//node = insertHead(node, 22);
//print(node);
//node = insertPosition(node, 44, 2);
//print(node);
exports.Node = Node;
exports.insertHead = insertHead;
exports.insertTail = insertTail;
exports.insertPosition = insertPosition;
exports.print = print;
exports.deleteNode = deleteNode;
exports.reverseLinkedList = reverseLinkedList;
exports.countElements = countElements;
exports.compareLinkedLists = compareLinkedLists;
exports.mergeLinkedLists = mergeLinkedLists;
exports.removeDuplicates = removeDuplicates;
exports.getValueNode = getValueNode;
