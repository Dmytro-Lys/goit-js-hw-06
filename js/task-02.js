const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const elemIngredients = ingredients.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  return li;
} )
listIngredients.append(...elemIngredients);