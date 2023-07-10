// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const markup = createGallery(galleryItems);

galleryList.insertAdjacentHTML('afterbegin', markup);
galleryList.style.cssText = 'list-style: none;';

function createGallery(galleryItems) {
  return galleryItems

    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" width="800" height="600"/>
   </a>
</li>`;
    })
    .join('');
}

galleryList.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
console.log(galleryItems);
