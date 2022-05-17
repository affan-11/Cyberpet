const health = document.getElementById("health")
const energy = document.getElementById("energy")
const hunger = document.getElementById("hunger")
const thirst = document.getElementById("thirst")

class Person{
    constructor(name){
        this._name = name;
        this._health = 100;
        this._energy = 100;
        this._hunger = 100;
        this._thirst = 0;
    }
    get name(){
        return this._name;
    }
    get _health(){
        return this._health;
    }
    get _energy(){
        return this._energy;
    }
    get _hunger(){
        return this._hunger;
    }
    get _thirst(){
        return this._thirst;
    }
    set _health(health){
        this.health = 100
    }
    set _energy(energy){
        this.energy = 100
    }
    set _hunger(hunger){
        this.hunger = 100
    }
    set _thirst(thirst){
        this.thirst = 100
    }
    }
    const cat = new Person("cat")

    let healthDecrease = setInterval(function(){
        cat.health -= 2
        health.innerText = cat.health
        if(cat.health === 0){
            clearInterval(healthDecrease)
        }
    }, 2500)

    let energyDecrease = setInterval(function(){
        cat.energy -= 10
        energy.innerText = cat.energy
        if(cat.energy === 0){
            clearInterval(energyDecrease)
        }
    }, 2500)

    let hungerDecrease = setInterval(function(){
        cat.hunger -= 5
        hunger.innerText = cat.hunger
        if(cat.hunger === 0){
            clearInterval(hungerDecrease)
        }
    }, 2500)

    let thirstDecrease = setInterval(function(){
        cat.thirst -= 10
        thirst.innerText = cat.thirst
        if(cat.thirst === 0){
            clearInterval(thirstDecrease)
        }
    }, 2500)

function eat() {
    cat.hunger += 5
        hunger.innerText = cat.hunger

}   

function drink() {
    cat.thirst += 5
        thirst.innerText = cat.thirst

}

function sleep() {
    cat.energy += 5
        energy.innerText = cat.energy

}

function play() {
    cat.health += 5
        health.innerText = cat.health

}


if (cat.thirst === 0 && cat.hunger ===0 && cat.health ===0 && cat.energy ===0) {
    document.querySelectorAll('img')[0].setAttribute("https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd88a3001-08ba-4ce8-ae7a-b36fa005cf86_3000x3000.jpeg")
}