var linkedList = require("../../../src/data_structures/linked_list/linked_list.js");
const chai = require("chai");
const expect = chai.expect;

describe("linked_list Node: ", function() {
    it ("it exists Node", ()=>{
        expect(linkedList.Node).to.exist;
    });
});
describe("linked_list insertHead: ", function() {
    it ("it exists insertHead", ()=>{
        expect(linkedList.insertHead).to.exist;
    });
    it ("it insertHead on null", ()=>{
        let head = linkedList.insertHead(null, 8);
        expect(head).to.not.be.null;
        expect(head.next).to.be.null;
        expect(head.data).to.equal(8);
    });
    it ("it insertHead on exists list", ()=>{
        let node = new linkedList.Node(3);
        let head = linkedList.insertHead(node, 8);
        expect(head).to.not.be.null;
        expect(head.next).to.not.be.null;
        expect(head.data).to.equal(8);
        head = head.next;
        expect(head.data).to.equal(3);
    });

    describe("linked_list insertTail: ", function() {
        it ("it exists insertTail", ()=>{
            expect(linkedList.insertTail).to.exist;
        });
        it ("it insertTail on null", ()=>{
            let head = linkedList.insertTail(null, 8);
            expect(head).to.not.be.null;
            expect(head.next).to.be.null;
            expect(head.data).to.equal(8);
        });
        it ("it insertTail on exists list", ()=>{
            let node = new linkedList.Node(3);
            let head = linkedList.insertTail(node, 8);
            expect(head).to.not.be.null;
            expect(head.next).to.not.be.null;
            expect(head.data).to.equal(3);
            head = head.next;
            expect(head.data).to.equal(8);
        });
    });
    describe ("linked_list insertPosition", function() {
        it ("it exists insertPosition", ()=>{
            expect(linkedList.insertPosition).to.exist;
        });
        it ("it insertPosition on null", ()=>{
            let head = linkedList.insertPosition(null, 8, 0);
            expect(head.data).to.equal(8);
            expect(head.next).to.be.null;
        });
        it ("it insertPosition on 0 position", ()=>{
            let node = new linkedList.Node(3);
            let head = linkedList.insertPosition(node, 8, 0);
            expect(head.data).to.equal(8);
            expect(head.next).to.not.be.null;
            expect(head.next.data).to.equal(3);
        });
        it ("it insertPosition on 1 position", ()=>{
            let node = new linkedList.Node(1);
            node.next = new linkedList.Node(3);
            let head = linkedList.insertPosition(node, 2, 1);
            expect(head.data).to.equal(1);
            expect(head.next.data).to.equal(2);
            expect(head.next.next.data).to.equal(3);

            //expect(head.next.next).to.not.be.null;
            //expect(head.next.next.data).to.equal(2);
        });
        it ("it insertPosition on last position", ()=>{
            let node = new linkedList.Node(1);
            node.next = new linkedList.Node(2);
            let head = linkedList.insertPosition(node, 3, 2);
            expect(head.data).to.equal(1);
            expect(head.next.data).to.equal(2);
            expect(head.next.next.data).to.equal(3);
        });
    });
    describe("linked_list delete", () =>{
        it ("if exists deleteNode", () => {
            expect(linkedList.deleteNode).to.exist;
        });
        it ("if deleteNode first element", () => {
            let node01 = new linkedList.Node(1);
            let node02 = new linkedList.Node(2);
            let node03 = new linkedList.Node(3);
            node01.next = node02;
            node02.next = node03;
            let head = linkedList.deleteNode(node01, 0);
            expect(head.data).to.equal(2);
            expect(head.next.data).to.equal(3);
            expect(head.next.next).to.be.null;
        });
        it ("if deleteNode middle element", () => {
            let node01 = new linkedList.Node(1);
            let node02 = new linkedList.Node(2);
            let node03 = new linkedList.Node(3);
            node01.next = node02;
            node02.next = node03;
            let head = linkedList.deleteNode(node01, 1);
            expect(head.data).to.equal(1);
            expect(head.next.data).to.equal(3);
            expect(head.next.next).to.be.null;
        });
        it ("if deleteNode last element", () => {
            let node01 = new linkedList.Node(1);
            let node02 = new linkedList.Node(2);
            let node03 = new linkedList.Node(3);
            node01.next = node02;
            node02.next = node03;
            let head = linkedList.deleteNode(node01, 2);
            expect(head.data).to.equal(1);
            expect(head.next.data).to.equal(2);
            expect(head.next.next).to.be.null;
        });
        it ("if deleteNode unique element", () => {
            let node01 = new linkedList.Node(1);
            let head = linkedList.deleteNode(node01, 0);
            expect(head).to.be.null;
        });
    });
    describe("linked_list reverseLinkedList", ()=>{
        it ("if exists reverseLinkedList", () => {
            expect(linkedList.reverseLinkedList).to.exist;
        });
        it ("if reverseLinkedList", () => {
            let node01 = new linkedList.Node(1);
            let node02 = new linkedList.Node(2);
            let node03 = new linkedList.Node(3);
            node01.next = node02;
            node02.next = node03;
            let head = linkedList.reverseLinkedList(node01);
            expect(head.data).to.equal(3);
            expect(head.next.data).to.equal(2);
            expect(head.next.next.data).to.equal(1);
        });
    });
    describe("linked_list countElements", ()=>{
        it ("if exists", () => {
            expect(linkedList.countElements).to.exist;
        });
        it ("if null", () => {
            expect(linkedList.countElements(null)).to.equal(0);
        });
        it ("if 1 element", () => {
            let node01 = new linkedList.Node(1);
            expect(linkedList.countElements(node01)).to.equal(1);
        });
        it ("if 3 element", () => {
            let node01 = new linkedList.Node(1);
            let node02 = new linkedList.Node(2);
            let node03 = new linkedList.Node(3);
            node01.next = node02;
            node02.next = node03;
            expect(linkedList.countElements(node01)).to.equal(3);
        });
    });
});
