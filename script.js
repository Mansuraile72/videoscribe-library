// इमेज डेटा
const images = [
  { src: "images/d.jpg" },
  { src: "images/g.jpg" },
  { src: "images/h.jpg" },
  { src: "images/q.jpg" },
  // यहां अन्य इमेज पाथ जोड़ें
];

// स्पेस को %20 में बदलें
function encodeSpaces(path) {
  return path.replace(/ /g, "%20");
}

// गैलरी डिस्प्ले
function displayImages(filterTags = []) {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // पहले की इमेज क्लियर करें

  images.forEach((image) => {
    if (filterTags.length === 0 || filterTags.some(tag => image.tags.includes(tag))) {
      const imgElement = document.createElement("img");
      imgElement.src = encodeSpaces(image.src); // स्पेस को एन्कोड करें
      imgElement.alt = "Image"; // वैकल्पिक
      gallery.appendChild(imgElement);
    }
  });
}

function filterImages(tag) {
  const currentTags = new Set();
  currentTags.add(tag); // चुने हुए टैग जोड़ें
  displayImages([...currentTags]);
}

// पहली बार सभी इमेज दिखाएं
displayImages();
