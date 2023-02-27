import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);


const picturesContainer = document.querySelector('.gallery');

const galleryCardsSet = createGalleryMarkup(galleryItems);


// Рендеримо розмітку галереї
picturesContainer.insertAdjacentHTML('beforeend', galleryCardsSet);

// Формуємо розмітку галереї на основі масиву даних
function createGalleryMarkup(galleryItems){
    return galleryItems.map(({ original, preview, description })=> {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    }).join('');
}

// Відкриваємо модальне вікно з великим зображенням
picturesContainer.addEventListener('click', event => {
    event.preventDefault();// Забороняємо стандартну дію по кліку на посиланні
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    const originalUrl = event.target.dataset.source;// Отримуємо url великого зображення з data-атрибута
    
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${originalUrl}" width="800" height="600">
    </div>
`)

instance.show()

document.addEventListener('keydown', onEscKeyPress);

instance.element().addEventListener('click', event =>{
    if (event.target.nodeName === "IMG") {
        instance.close();
    }
});

});

// Робимо закриття модалки через ESC

function onEscKeyPress(event){
    if (event.code === "Escape") {
        onCloseModal();
        document.removeEventListener('keydown', onEscKeyPress);

    }
    console.log(event);
}