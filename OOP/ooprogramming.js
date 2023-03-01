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
    sleep(energy) {
       return energy = energy + 10;
    }
    doSomethingFun(energy) {
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

    goToWork(){
        xp+=10;
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
    // console.log(intern);
}

intern();


// Task 4: Code a manager object, methods
function manager() {
    
}