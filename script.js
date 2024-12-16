let currentPage = 1; // वर्तमान पेज
const imagesPerPage = 20; // प्रति पेज इमेजेस की संख्या
let selectedTags = []; // चयनित टैग्स को स्टोर करने के लिए
const images = [
  { "src": "images/People at Work (online) (11)_16.webp", "tags": ["Looking", "Computer", "Relaxed", "Sitting", "Boy", "Talking", "Girl", "Enjoy", "People∞"] },
  { "src": "images/People at Work (online) (11)_17.webp", "tags": ["Looking", "Front", "Boy", "Girl", "Happy", "People∞"] },
  { "src": "images/People at Work (online) (9)_6.webp", "tags": ["Front", "People2", "Computer", "Working", "Talking", "Boy", "Enjoy"] },
  { "src": "images/People at Work (online) (9)_7.webp", "tags": ["See", "Front", "People", "Working", "Sitting", "Talking", "Boy", "Girl", "Enjoy"] },
  { "src": "images/People at Work (online) (9)_8.webp", "tags": ["Standing", "Sitting", "Talking", "Boy", "Girl"] },
  { "src": "images/People at Work (online) (9)_9.webp", "tags": ["Sitting", "Boy", "Girl", "People3"] },
];

// गैलरी में इमेज डिस्प्ले करना
function displayImagesWithPagination() {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // गैलरी साफ करें

  const filteredImages = images.filter(image =>
    selectedTags.length === 0 || selectedTags.every(tag => image.tags.includes(tag))
  );

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, filteredImages.length);
  const imagesToShow = filteredImages.slice(startIndex, endIndex);

  // Document Fragment का उपयोग करें
  const fragment = document.createDocumentFragment();

  imagesToShow.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = "Image";
    imgElement.classList.add('resizable');
    fragment.appendChild(imgElement);
  });

  gallery.appendChild(fragment);

  // Pagination Controls जोड़ें
  createPaginationControls(filteredImages.length, startIndex, endIndex);
}

// पेजिनेशन कंट्रोल्स बनाना
function createPaginationControls(totalImages, startIndex, endIndex) {
  const paginationContainer = document.createElement("div");
  paginationContainer.className = "pagination-controls";

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.onclick = () => {
      currentPage--;
      displayImagesWithPagination();
    };
    paginationContainer.appendChild(prevButton);
  }

  if (endIndex < totalImages) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.onclick = () => {
      currentPage++;
      displayImagesWithPagination();
    };
    paginationContainer.appendChild(nextButton);
  }

  const gallery = document.getElementById("image-gallery");
  gallery.appendChild(paginationContainer);
}

// इमेज का साइज बदलना
function resizeImages(size) {
  const images = document.querySelectorAll("#image-gallery img");
  images.forEach(img => {
    img.style.width = `${size}px`;
  });
}

// साइज स्लाइडर लिस्नर जोड़ें
document.getElementById("size-slider").addEventListener("input", function () {
  resizeImages(this.value);
});

// टैग टॉगल करना
function toggleTag(tag) {
  const button = document.querySelector(`button[data-tag="${tag}"]`);

  if (selectedTags.includes(tag)) {
    selectedTags = selectedTags.filter(t => t !== tag);
    button.classList.remove("selected");
  } else {
    selectedTags.push(tag);
    button.classList.add("selected");
  }

  currentPage = 1;
  displayImagesWithPagination();
}
function filterImages(tag) {
  toggleTag(tag); // टैग टॉगल करें
}

// पॉपअप दिखाना
function showLibraryInfo() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

// पॉपअप बंद करना
function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}

// गैलरी को डिफॉल्ट इमेज के साथ दिखाना
displayImagesWithPagination();
