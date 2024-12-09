// इमेज डेटा
const images = [
  { src: "images/d.jpg", tags: ["Sleep", "Medical"] },
  { src: "images/g.jpg", tags: ["Thinking", "Family"] },
  { src: "images/q.jpg", tags: ["People", "Work"] },
  { src: "images/h.jpg", tags: ["Home", "Family"] },
  { src: "images/1 (15).jpg", tags: ["Home", "Family"] },
  { src: "images/Healthcare14.jpg", tags: ["People", "Work"] },
  // अन्य इमेजेस जोड़ें
];

// गैलरी तैयार करने का फंक्शन
function displayImages(filterTags = []) {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // पुरानी इमेज हटाएँ

  images.forEach((image) => {
    if (filterTags.length === 0 || filterTags.some(tag => image.tags.includes(tag))) {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = "Image";
      imgElement.classList.add('resizable');
      gallery.appendChild(imgElement);
    }
  });
}

// इमेज का साइज बदलने का फंक्शन
function resizeImages(size) {
  const images = document.querySelectorAll("#image-gallery img");
  images.forEach(img => {
    img.style.width = `${size}px`; // इमेज की चौड़ाई सेट करें
  });
}

// इवेंट लिसनर जोड़ें
document.getElementById("size-slider").addEventListener("input", function () {
  resizeImages(this.value);
});

// डिफॉल्ट इमेज गैलरी दिखाएँ
displayImages();
