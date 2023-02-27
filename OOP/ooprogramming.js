// Task 1: Code a Person class
class Person{
    constructor(name="Tom", age=20, energy=100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(energy) {
        energy = energy-10;
    }
    doSomethingFun() {
        return energy - 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    sleep() {
        super.sleep();
    }
    doSomethingFun() {
        super.doSomethingFun();
    }
}
let cow = new Worker();
cow.sleep();
console.log(cow.energy);
// console.log(Worker.hourlyWage);

// Task 3: Code an intern object, run methods
function intern() {

}

// Task 4: Code a manager object, methods
function manager() {
    
}