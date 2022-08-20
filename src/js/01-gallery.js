// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galContainer = document.querySelector('.gallery');
const imGcards = addImgGallery(galleryItems);

galContainer.insertAdjacentHTML('beforeend', imGcards);
galContainer.addEventListener('click', onGalleryCont);

function addImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a');
function onGalleryCont(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const modaL = basicLightbox.create(
    `<img src="${
      event.target.closest('img').dataset.source
    }" width="800" height="600">`
  );

  console.log(event.target);
  console.log(modaL.show());
}

document.addEventListener('keydown', e => {
  const pushEsc = e.code === 'Escape';
  const onMod = document.querySelector('.basicLightbox');
  if (!onMod) {
    return;
  }
  if (pushEsc) {
    onMod.remove();
  }
});
