const listCategories = document.querySelector('#categories');
const itemsCategories = listCategories.querySelectorAll('.item');
console.log(`Number of categories: ${itemsCategories.length}`);
itemsCategories.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
})
