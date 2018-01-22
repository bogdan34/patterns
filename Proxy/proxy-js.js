let handler = {
    get(target, propertyName){
        console.log('Доступ к свойству ' + propertyName);
        return target[propertyName];
    },
    set(target, propertyName, value){
        console.log('Изминение свойства ' + propertyName +
            ' на значение ' + value);
        target[propertyName] = value;
    }
};
class Person {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }
};
const person = new Person('John', 'Genry');
const proxyPerson = new Proxy(person, handler);
proxyPerson.sayHello();