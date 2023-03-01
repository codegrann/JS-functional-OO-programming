// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for(let products of dairy){
        console.log(products);
    }
}
// logDairy();
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    let bigbird = [];
    for (let i = 0; i < bird.length; i++){
        console.log(Object.keys[i](bird))
    }


    for (let props of bird) {
        console.log(props.key +":"+ props.value)
    }
}
birdCan();

// Task 3

