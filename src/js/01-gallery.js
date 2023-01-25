// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);

const galleryImages = document.querySelector('.gallery');
const bodyForGallery = document.body;


const galleryMarkup = createGalleryPictures (galleryItems);
galleryImages.insertAdjacentHTML("beforeend",galleryMarkup);

function createGalleryPictures (images) {
    return images.map(({preview,original,description}) => {
        return`<li class="gallery__item" style= "list-style-type:none"><a class="gallery__link" href="${original}">
        <img loading="lazy" width="354" height="240" class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`}).join(" ")};




const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
});
        
    lightbox.on("shown.simplelightbox", function () {
        bodyForGallery.classList.add("disable-scroll");
    });
    lightbox.on("closed.simplelightbox", function () {
        bodyForGallery.classList.remove("disable-scroll");
    });    






// function createGalleryPictures (images) {
//     return images.map(({preview,original,description}) => {
//         return`<div class="gallery__item">
//             <a class="gallery__link"${preview}">
//                 <img
//                     class="gallery__image"
//                     src="${original}"
//                     data-source="${preview}"
//                     alt="${description}"
//                 />
//             </a>
//         </div>`}).join(" ")};


// const createModalWindow = (imageSrc) => {
// window.instance = basicLightbox.create(
//     ` <img src='${imageSrc}'/> `,
//     {
//     onShow: () =>
//         window.addEventListener("keydown", closeModaEsc),
//     onClose: () => {
//         window.removeEventListener("keydown", closeModaEsc);
//         bodyForGallery.classList.remove("disable-scroll");
//         },
//     }
//     );
//     return instance;
// };


// galleryImages.addEventListener('click', openImgOnModal);


// function openImgOnModal(event) {
//         event.preventDefault();
//     if (!event.target.classList.contains("gallery__image")) {
//         return;
//     };
//     createModalWindow(event.target.dataset.source).show();
//     bodyForGallery.classList.add("disable-scroll");

//     };

// function closeModaEsc(event) {
//         if (event.code === "Escape" && instance.visible()) {
//         instance.close();
//         bodyForGallery.classList.remove("disable-scroll");
//         };
// };

