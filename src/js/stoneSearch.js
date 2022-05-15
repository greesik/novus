import stones from "../json/stones.json";

const stoneGalleryContainer = document.querySelector(".granite-gallery");
const stonePreview = document.querySelector(".granite-preview");
const stoneObject = `<div class="stone-object" onClick="${showInPreview}"></div>`;

const showInPreview = (element) => {
  return (stonePreview.innerHTML = `<div>${element.name}</div>`);
};

const stoneGallery = (stones) =>
  stones.stones.granite.map((granite) => {
    stoneObject.innerHTML = granite.name;
    stoneGalleryContainer.innerHTML += stoneObject;
    return stoneGalleryContainer;
  });

console.log(stoneGallery(stones));
