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
    let bird1=Object.keys(bird);
    for (let i of bird1){
        console.log(i +":"+ bird[i])
    }
   
}
// birdCan();



// Task 3
function animalCan(){
    for(i in bird){
        // console.log(bird);
        console.log(i +":"+ bird[i]);
    }
}
animalCan();