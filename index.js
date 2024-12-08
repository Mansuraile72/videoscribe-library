const images = [
  { src: "image1.png", tags: ["Happy", "Enjoy"] },
  { src: "image2.png", tags: ["Angry", "Confused"] },
  { src: "image3.png", tags: ["Cry", "Sad"] },
  { src: "image4.png", tags: ["Travel", "Money"] },
  { src: "image5.png", tags: ["Girl", "Talking"] },
  { src: "image6.png", tags: ["Boy", "Relaxed"] },
  { src: "image7.png", tags: ["Working", "Computer"] },
  { src: "image8.png", tags: ["Confidence", "Thinking"] },
  { src: "image9.png", tags: ["People1", "Standing"] },
  { src: "image10.png", tags: ["Front", "Looking"] },
  { src: "image11.png", tags: ["Shopping", "Idea"] },
  // আপনার সমস্ত ছবির তথ্য এখানে যুক্ত করুন
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