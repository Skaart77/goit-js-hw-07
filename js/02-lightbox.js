import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector('.gallery');

// Формуємо розмітку галереї на основі масиву даних
const createGalleryMarkup = galleryItems => {
    return galleryItems.map(({ original, preview, description })=> {
        return `
       <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src=${preview} alt="${description}" />
</a></li>`;
    }).join('');
};

picturesContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.5,
    captionDelay: 250,
    captionsData: 'alt',
});