const images = [
  { src: "images/Healthcare and Medical (online) (3)_6 - Copy.jpg", tags: ["Healthcare", "Medical"] },
  { src: "images/Healthcare and Medical (online) (19)_14 - Copy.jpg", tags: ["Healthcare", "Medical"] },
  { src: "images/Healthcare and Medical (online) (19)_15 - Copy.jpg", tags: ["Healthcare", "Medical"] },
  { src: "images/Home and Family (online) (2)_7 - Copy.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (4)_17.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (5)_1.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (5)_3.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (6)_1.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (6)_3.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (6)_5.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (6)_9.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (6)_11.jpg", tags: ["Home", "Family"] },
  { src: "images/Home and Family (online) (6)_13.jpg", tags: ["Home", "Family"] },
  { src: "images/Money and Finance (online) (2)_18 - Copy.jpg", tags: ["Money", "Finance"] },
  { src: "images/People at Work (online) (5)_17 - Copy.jpg", tags: ["People", "Work"] },
];

function displayImages(filterTags = []) {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // পুরানো ছবি ক্লিয়ার করুন

  images.forEach((image) => {
    if (filterTags.length === 0 || filterTags.some(tag => image.tags.includes(tag))) {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      gallery.appendChild(imgElement);
    }
  });
}

function filterImages(tag) {
  const currentTags = new Set();
  currentTags.add(tag); // নির্বাচিত ট্যাগ যোগ করুন
  displayImages([...currentTags]);
}

// প্রথমবার সমস্ত ছবি দেখান
displayImages();