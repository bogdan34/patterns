class ArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    next() {
        const result = {value: undefined, done: true};
        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index++;
        }
        return result;
    }
}

const arr = ['one', 'two', 'three', 'four'];

const arrayIterator = new ArrayIterator(arr);

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());