import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const container = document.querySelector(".gallery");

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </li>`
    ).join("");
};



function handleClick(event) {
    event.preventDefault()

    if (event.target === event.currentTarget) {
        return;
    }



    const modalImg = event.target.closest(".gallery__link").href;
    
    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${modalImg.original} alt="${modalImg.description}">
    `);

    instance.show()
}
