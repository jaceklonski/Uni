class Food {
    constructor (name, ingridiets){
        this.name = name
        this.ingridiets = ingridiets
        this.prepare = function (){console.log(`Preparing ${this.name}...`)}
        this.cook= function (){console.log(`Cooking ${name}...`)}
        this.serve = function (){console.log(`Serving ${name}...`)}}
    }


class Pizza extends Food {
    constructor (name, ingridients, toppings){
        super(name, ingridients)
        this.toppings = toppings
        this.mix = function () {console.log(`Mixing pizza dough...`)}
        this.bake = function () {console.log(`Baking pizza in oven...`)}
        this.serve = function () {console.log(`Serving ${this.name} with ${this.toppings}...`)}
    }}

class Salad extends Food {
    constructor(name, ingridients, dressing) {
        super(name, ingridients)
        this.dressing = dressing
        this.mix = function () {console.log(`Mixing salad ingredients...`)}
        this.serve = function () {console.log(`Serving ${this.name} with ${this.dressing} dressing......`)}
    }}




    const pizza = new Pizza("Margherita", ["flour", "tomatoes", "mozzarella"], ["basil"]);
    pizza.prepare();
    pizza.mix();
    pizza.bake();
    pizza.serve();
    // Output:
    // Preparing Margherita...
    // Mixing pizza dough...
    // Baking pizza in oven...
    // Serving Margherita with basil...
    
    const salad = new Salad("Caesar", ["lettuce", "croutons", "Parmesan cheese"], "Caesar");
    salad.prepare();
    salad.mix();
    salad.serve();
    // Output:
    // Preparing Caesar...
    // Mixing salad ingredients...
    // Serving Caesar with Caesar dressing...