var Node = function(data) {
    this.data = data;
    this.next = null;
};

var print = head => {
    console.log("linkedList -->");
    if(head) {
        do {
            console.log(head.data);
            head = head.next;
        } while(head);
    }
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
        console.log("pasa con countNode " + countNode);
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

let node = insertTail(null, 5);
//print(node);
node = insertTail(node, 78);
//print(node);
//node = insertHead(node, 22);
print(node);
node = insertPosition(node, 44, 2);
print(node);
exports.Node = Node;
exports.insertHead = insertHead;
exports.insertTail = insertTail;
exports.insertPosition = insertPosition;
exports.print = print;
