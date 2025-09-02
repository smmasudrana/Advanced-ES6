class vehicle {
    constructor(type, brand, price){
        this.type = type;
        this.brand = brand;
        this.price = price;
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price;
    }
}

const car1 = new vehicle('car', 'honda', 584233);
const car2 = new vehicle('car', 'toyota', 684233);
car1.getThis()


console.log(car1.getPrice());
console.log(car2.getPrice());



//encapsulation..........
class BankAccount {
    #balance; // private property

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if(amount > 0){
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount("Rafid", 1000);
acc.deposit(500);

console.log(acc.getBalance()); // 1500
// console.log(acc.#balance);     // ❌ Error (private)