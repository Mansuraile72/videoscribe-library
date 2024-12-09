// ইমেজ ডেটা
const images = [
  { src: "images/d.jpg", tags: ["Healthcare", "Medical"] },
  { src: "images/g.jpg", tags: ["Home", "Family"] },
  { src: "images/q.jpg", tags: ["People", "Work"] },
  { src: "images/h.jpg", tags: ["Home", "Family"] },
  // আরও ইমেজ যোগ করুন
];

// গ্যালারি তৈরি করার ফাংশন
function displayImages(filterTags = []) {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // পুরানো ইমেজ মুছে ফেলুন

  images.forEach((image) => {
    // ফিল্টার ট্যাগ চেক করুন
    if (filterTags.length === 0 || filterTags.some(tag => image.tags.includes(tag))) {
      const imgElement = document.createElement("img");
      imgElement.src = image.src; // ইমেজ সোর্স
      imgElement.alt = "Image"; // অল্ট টেক্সট
      gallery.appendChild(imgElement);
    }
  });
}

// কীওয়ার্ড বাটনের ক্লিক ইভেন্ট
function filterImages(tag) {
  const currentTags = new Set();
  currentTags.add(tag); // ট্যাগ যোগ করুন
  displayImages([...currentTags]);
}

// প্রথমবার সব ইমেজ দেখান
displayImages();
