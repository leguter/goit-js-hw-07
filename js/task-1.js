
const categoriesElem = document.querySelectorAll('ul>li');
const titleElem = document.querySelectorAll('li.item')

// const formData = new FormData(categoriesElem);
console.log(`Number of categories: ${titleElem.length}`)
titleElem.forEach((value) => {
    const title = value.querySelector('h2').textContent
    console.log(`Category: ${title}`);
    const liElemLength = value.querySelectorAll('li');
    console.log( `Elements: ${liElemLength.length}`);
});
console.log(categoriesElem);
