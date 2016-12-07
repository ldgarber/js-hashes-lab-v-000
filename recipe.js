'use strict';

var addIngredient = function(recipe, ingredient, amount) {
  recipe[ingredient] = amount; 
  return recipe; 
}

var removeIngredient = function(recipe, ingredient) {
  delete recipe[ingredient]; 
  return recipe; 
}

var updateIngredient = function(recipe, ingredient, amount) {
  recipe[ingredient] = amount; 
  return recipe; 
}

var readRecipe = function(recipe) {
  Object.keys(recipe).forEach(function(ingredient){
    var amount = recipe[ingredient]; 
    console.log("this recipe calls for " + amount + " of " + ingredient);   
    return; 
  })
}
