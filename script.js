function pizzaoven(crusttype, saucetype, cheeses, toppings){
    var pizza = {};
    pizza.crust= crusttype;
    pizza.sauce = saucetype;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaoven("deep dish", "traditional", "mozzzaella", ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaoven("hand tossed", "marinara", ["mozzzaella", "feta"], ["mushrooms", "olives","onions"]);
console.log(p2);
var p3 = pizzaoven("pan", "bbq", "feta", ["pineapple", "black olives"]);
console.log(p3);
var p4 = pizzaoven("stuffed crust", "garlic", "cheedar", ["bacon", "tomatoes","jalapeno", "peppers"]);
console.log(p4);