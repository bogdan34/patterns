class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        if (this.observers.indexOf(observer) == -1) {
            this.observers.push(observer);
        }
    }

    removeObserver(observer) {

    }

    notify(data) {
        for (let observer of this.observers) {
            observer.update(data)
        }
    }
}

class Observer {
    constructor() {
        this.data = {};
    }

    update(data) {
        this.data = data;
    }
}

const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notify({'test':'azazaaz'});
console.log(subject, observer1, observer2, observer3)