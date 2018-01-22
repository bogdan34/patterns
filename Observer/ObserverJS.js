class EventEmitter {
    constructor(){
        this.events = {};
    }
    on(event, callback){
        this.events[event]= this.events[event] || [];
        this.events[event].push(callback);
    }
    off(callback){

    }
    emit(event, data){
        for (let callback of this.events[event]){
            callback(data);
        }
    }
}

class Publisher extends EventEmitter {
    publish(){
        this.emit('publish',{
            title: 'The Answer',
            issueNumber: 42
        });
    }
}

const publisher = new Publisher();
const subscriber = {
    read(issue){
        console.log('Reading', issue);
    }
}

publisher.on('publish', subscriber.read);
publisher.publish();