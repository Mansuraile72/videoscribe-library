// इमेज डेटा
const images = [
  { src: "images/d.jpg", tags: ["Sleep", "Medical"] },
  { src: "images/g.jpg", tags: ["Thinking", "Family"] },
  { src: "images/q.jpg", tags: ["People", "Work"] },
  { src: "images/h.jpg", tags: ["Home", "Family"] },
  // अन्य इमेजेस जोड़ें
];

// गैलरी तैयार करने का फंक्शन
function displayImages(filterTags = []) {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // पुरानी इमेज हटाएँ

  images.forEach((image) => {
    // अगर कोई फिल्टर टैग है तो उसे चेक करें
    if (filterTags.length === 0 || filterTags.some(tag => image.tags.includes(tag))) {
      const imgElement = document.createElement("img");
      imgElement.src = image.src; // इमेज सोर्स
      imgElement.alt = "Image"; // ऑल्ट टेक्स्ट
      imgElement.classList.add('resizable');
      gallery.appendChild(imgElement);
    }
  });
}

// इमेज का साइज बदलने का फंक्शन
function resizeImages(size) {
  // गैलरी में सभी इमेज सेलेक्ट करें
  const images = document.querySelectorAll("#image-gallery img");
  images.forEach(img => {
    img.style.width = `${size}px`; // इमेज की चौड़ाई सेट करें
  });
}

// कीवर्ड बटन पर क्लिक इवेंट
function filterImages(tag) {
  const currentTags = new Set();
  currentTags.add(tag); // टैग जोड़ें
  displayImages([...currentTags]);
}

// गैलरी डिफॉल्ट दिखाएँ
displayImages();

// साइज स्लाइडर को इवेंट लिसनर से जोड़ें
document.getElementById("size-slider").addEventListener("input", function () {
  const newSize = this.value;
  resizeImages(newSize); // स्लाइडर के वैल्यू के अनुसार साइज बदलें
});
