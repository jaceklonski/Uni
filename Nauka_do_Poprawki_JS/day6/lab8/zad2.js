class Animal{
    constructor(name){
        this.name = name
        this.printName = function (){console.log(this.name)}
    }}

class Mammal extends Animal{
    constructor(name, age){
        super(name)
        this.age = age
    }
    getAge (){return this.age}
}

class Fish extends Animal{
    constructor(name,weight){
        this.weight = weight
        this.increaseWeight = function (amount) {
            this.weight += amount
        }
        super(name)
        this.catch = function (){console.log("zlapales lososia")}
    }}

class Dog extends Mammal{
        constructor(name, age, breed){
            super(name, age)
            this.breed = breed
        }
        getAge () {return super.getAge()*4
        } 
    }
    
const dog1 = new Dog("imie", 1, 'jamnik')

console.log(dog1.getAge())
console.log(dog1.getAge())