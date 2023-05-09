const listCategories = document.querySelector('#categories');
const itemsCategories = Array.from(listCategories.children);
console.log(`Number of categories: ${itemsCategories.length}`);
itemsCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.firstChild.data}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  })
 