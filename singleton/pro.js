const Cart = (function(){
    let instance;

    return class {
        constructor(){
            this.products = [];

            if(!instance){
                instance = this;
            }
            return instance;
        }
    };
})();

const cart1 = new Cart();
const cart2 = new Cart();
console.log(cart1, cart2, cart1 === cart2);