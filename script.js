// ইমেজ ডেটা
const images = [
  { src: "images/d.jpg", tags: ["Sleep", "Medical"] },
  { src: "images/g.jpg", tags: ["Thinking", "Family"] },
  { src: "images/q.jpg", tags: ["People", "Work"] },
  { src: "images/h.jpg", tags: ["Home", "Family"] },
  { src: "images/1 (15).jpg", tags: ["Home", "Family"] },
  { src: "images/Healthcare14.jpg", tags: ["People", "Work"] },
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
      imgElement.classList.add('resizable');
      gallery.appendChild(imgElement);
    }
  });
}

// কীওয়ার্ড বাটনের ক্লিক ইভেন্ট
function filterImages(tag) {
  displayImages([tag]); // নির্দিষ্ট ট্যাগ দিয়ে ইমেজ ফিল্টার করুন
}

// ডিফল্টভাবে সব ইমেজ দেখান
displayImages();

// সাইজ পরিবর্তনের ফাংশন
function resizeImages(size) {
  const images = document.querySelectorAll("#image-gallery img");
  images.forEach(img => {
    img.style.width = `${size}px`; // ইমেজের প্রস্থ পরিবর্তন করুন
  });
}

// স্লাইডার ইভেন্ট লিসেনার যোগ করুন
document.getElementById("size-slider").addEventListener("input", function () {
  resizeImages(this.value);
});
