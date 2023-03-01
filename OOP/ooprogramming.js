// Task 1: Code a Person class
class Person{
    constructor(name="Tom", age=20, energy=100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
        // this.sleep = function sleep(energy){
            // energy = energy + 10;
        //  }
    }
    sleep=function(energy) {
       console.log(energy+10);
    }
    doSomethingFun=function(energy) {
        return energy - 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super();
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    sleep() {
        super.sleep();
        // energy = energy-10;
    }
    doSomethingFun() {
        super.doSomethingFun();
    }

    goToWork=function(xp){
        xp=xp+10;
    }
}

// let cow = new Person();
// cow.doSomethingFun();
// console.log(cow.energy);
// console.log(cow.hourlyWage);





// Task 3: Code an intern object, run methods
function intern() {
    let intern=new Worker();
    intern.name="Bob";
    intern.age=21;
    intern.energy=110;
    intern.xp=0;
    intern.hourlyWage=10;
    console.log(intern)
    intern.goToWork();
    console.log(intern.xp);
}

intern();


// Task 4: Code a manager object, methods
function manager() {
    let manager=new Worker();
    manager.name="Alice";
    manager.age=30;
    manager.energy=120;
    manager.xp=100;
    manager.hourlyWage=30;
    console.log(manager.energy);
    console.log(manager);
}
manager();