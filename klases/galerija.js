class Galerija {
  /**
   * Add image links
   * @param {string} url1 "https://picsum.photos/id/20/500"
   * @param {string} url2 "https://picsum.photos/id/21/500"
   * @param {string} url3 "https://picsum.photos/id/22/500"
   */
  constructor(
    url1 = "Nera Nuotrauku",
    url2 = undefined,
    url3 = undefined
  ) {
    this.imageArray = [];
    if (url1) this.imageArray.push(url1);
    if (url2) this.imageArray.push(url2);
    if (url3) this.imageArray.push(url3);
  }
  /**
   * Change size values if needed
   * @returns small img element
   */
  isvedimasKataloguiNT() {
    return imageGalleryImgDiv(this.imageArray[0],"10em","13em")
  }
  /**
   * Requires styles for things to appear properly
   * @returns gallery div element
   */
  galerijaNT() {
    // Change default height & width of gallery if needed
    let height = "15em";
    let width = "18em";
    const galleryDiv = document.createElement("div");
    galleryDiv.style.height = height;
    // galleryDiv.style.width = width;
    galleryDiv.classList.add("image-gallery","nt-galerija");

    const imgDiv = imageGalleryImgDiv(this.imageArray[0]);
    galleryDiv.append(imgDiv);

    const buttons = imageGalleryAddButtons(galleryDiv);
    //Adding events to image buttons:
    buttons[0].addEventListener(
      "click",
      imageGalleryButtonFunction("left", imgDiv, this.imageArray)
    );
    buttons[1].addEventListener(
      "click",
      imageGalleryButtonFunction("right", imgDiv, this.imageArray)
    );

    return galleryDiv;
  }
  /**
   * 
   * @returns small round img element
   */
  isvedimasKataloguiAgento() {
    let img = imageGalleryImgDiv(this.imageArray[0], "4em", "4em");
    img.classList.add('katalogui-agento');
    return img;
  }
  isvdeimasProfilis() {
    return this.galerijaNT();
  }
}

// Returns img element
function imageGalleryImgDiv(imageLink, height = "15em", width = "18em") {
  const container = document.createElement("img");
  container.style.height = height;
  container.style.width = width;
  container.src = imageLink;

  return container;
}

// Changes img element's source
function imageGalleryReplace(imgDiv, newImageLink) {
  imgDiv.src = newImageLink;
}

// Adds left and right arrow buttons to gallery div and returns [left,right] buttons
function imageGalleryAddButtons(galleryDiv) {
  const left = document.createElement("div");
  const right = document.createElement("div");
  left.append("◀");
  right.append("▶");
  left.classList.add("arrow", "left-arrow");
  right.classList.add("arrow", "right-arrow");

  galleryDiv.append(left);
  galleryDiv.append(right);
  return [left, right];
}

// Function to put into buttons
function imageGalleryButtonFunction(
  arrowDirection = "left",
  imgDiv,
  allImagesArray
) {
  return function () {
    let index = findIndex(imgDiv.src, allImagesArray);
    if (allImagesArray[0] == "Nera Nuotrauku") {
      throw new Error("Nera Nuotrauku");
    } else if (arrowDirection == "left") {
      // clicked left
      index--;
      if (index < 0) index = allImagesArray.length - 1;
    } else {
      // clicked right
      index++;
      if (index > allImagesArray.length - 1) index = 0;
    }

    imageGalleryReplace(imgDiv, allImagesArray[index]);
  };
}
// Finds at what index in imageArray image is located
function findIndex(searchedElem, array) {
  let index = 0;
  for (let e of array) {
    if (e == searchedElem) {
      return index;
    } else {
      index++;
    }
  }
}
export{Galerija}
