class Type1 {
}
class Type2 {
}
class Type3 {
}

function create(type) {
    switch (type) {
        case 'type 1':
            return new Type1();
        case 'type 2':
            return new Type2();
        case 'type 3':
            return new Type3();
        default:
            throw new Error('Invalid type');
    }
}

const obj = create('type 1');
console.log(obj);