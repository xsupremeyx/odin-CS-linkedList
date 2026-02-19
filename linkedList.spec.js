import {LinkedList} from './linkedList';
describe('LinkedList', () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('should add elements to the end of the list', () => {
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
    });

    it('should add elements to the beginning of the list', () => {
        linkedList.prepend("dog");
        linkedList.prepend("cat");
        linkedList.prepend("parrot");
        linkedList.prepend("hamster");
        linkedList.prepend("snake");
        linkedList.prepend("turtle");
    });

    it('should have working size() method', () => {
        expect(linkedList.size()).toBe(0);
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.size()).toBe(6);
    });

    it('should have working head() method', () => {
        expect(linkedList.head()).toBeUndefined();
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.head()).toBe("dog");
    });

    it('should have working tail() method', () => {
        expect(linkedList.tail()).toBeUndefined();
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.tail()).toBe("turtle");
    });

    it('should have working at(index) method', () => {
        expect(linkedList.at(0)).toBeUndefined();
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.at(0)).toBe("dog");
        expect(linkedList.at(1)).toBe("cat");
        expect(linkedList.at(2)).toBe("parrot");
        expect(linkedList.at(3)).toBe("hamster");
        expect(linkedList.at(4)).toBe("snake");
        expect(linkedList.at(5)).toBe("turtle");
    });

    it('should have working pop() method', () => {
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.pop()).toBe("turtle");
        expect(linkedList.pop()).toBe("snake");
        expect(linkedList.tail()).toBe("hamster");
    });

    it('should have working contains(value) method', () => {
        expect(linkedList.contains("cat")).toBe(false);
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.contains("cat")).toBe(true);
        expect(linkedList.contains("hamster")).toBe(true);
        expect(linkedList.contains("monkey")).toBe(false);
    });

    it('should have working findIndex(value) method', () => {
        expect(linkedList.findIndex("cat")).toBe(-1);
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.findIndex("cat")).toBe(1);
        expect(linkedList.findIndex("hamster")).toBe(3);
        expect(linkedList.findIndex("monkey")).toBe(-1);
    });

    it('should have working toString() Method', () => {
        expect(linkedList.toString()).toBeNull();
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
    });

    it.skip('should have working insertAt(index, ...values) method', () => {
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        linkedList.insertAt(2, "monkey", "rabbit");
        expect(linkedList.toString()).toBe("( dog ) -> ( cat ) -> ( monkey ) -> ( rabbit ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
    });

    it.skip('index below 0 or above list size should throw RangeError for inderAt() method', () => {
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(() => linkedList.insertAt(-1, "monkey")).toThrow(RangeError);
        expect(() => linkedList.insertAt(7, "monkey")).toThrow(RangeError);
    });

    it.skip('should have working removeAt(index) method', () => {
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(linkedList.removeAt(2)).toBe("parrot");
        expect(linkedList.toString()).toBe("( dog ) -> ( cat ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null");
    });

    it.skip('index below 0 or above list size should throw RangeError for removeAt() method', () => {
        linkedList.append("dog");
        linkedList.append("cat");
        linkedList.append("parrot");
        linkedList.append("hamster");
        linkedList.append("snake");
        linkedList.append("turtle");
        expect(() => linkedList.removeAt(-1)).toThrow(RangeError);
        expect(() => linkedList.removeAt(6)).toThrow(RangeError);
    });

});