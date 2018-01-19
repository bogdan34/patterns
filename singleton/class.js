class Singleton {
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    constructor(){
        this.foo = 'foo';

        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
console.log(new Singleton());
console.log(Singleton.getInstance() === new Singleton());