const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elemIngredients = [];
const listIngredients = document.querySelector('#ingredients');
ingredients.forEach(item => {
  elemIngredients.push(document.createElement("li"));
  elemIngredients[elemIngredients.length - 1].textContent = item;
  elemIngredients[elemIngredients.length - 1].classList.add("item");
})
listIngredients.append(...elemIngredients);