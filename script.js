// ইমেজ ডেটা
const images = [
{"src":"images/1 (10).jpg","tags":["girl","boy"]}
{"src":"images/1 (11).jpg","tags":["boy"]}
{"src":"images/1 (12).jpg","tags":["boy"]}
{"src":"images/1 (13).jpg","tags":["boy"]}
{"src":"images/1 (14).jpg","tags":["boy","money"]}
{"src":"images/1 (15).jpg","tags":["girl"]}
{"src":"images/1 (5).jpg","tags":["girl"]}
{"src":"images/1 (6).jpg","tags":["girl","boy"]}
{"src":"images/1 (7).jpg","tags":["girl","boy"]}
{"src":"images/1 (8).jpg","tags":["girl","boy"]}
{"src":"images/1 (9).jpg","tags":["girl"]}
{"src":"images/d.jpg","tags":["boy"]}
{"src":"images/g.jpg","tags":["girl"]}
{"src":"images/h.jpg","tags":["boy"]}
{"src":"images/Healthcare14.jpg","tags":[]}
{"src":"images/q.jpg","tags":["girl"]},
  // আরও ইমেজ যোগ করুন
];
// গ্যালারি তৈরি করার ফাংশন
function displayImages(filterTags = []) {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // पुरानी इमेज हटाएं

  images.forEach((image) => {
    // टैग्स को लोअरकेस में चेक करें
    const lowerCaseTags = image.tags.map(tag => tag.toLowerCase());
    const lowerCaseFilterTags = filterTags.map(tag => tag.toLowerCase());

    if (
      lowerCaseFilterTags.length === 0 ||
      lowerCaseFilterTags.some(tag => lowerCaseTags.includes(tag))
    ) {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = "Image"; // alt टेक्स्ट
      imgElement.classList.add('resizable');
      gallery.appendChild(imgElement);
    }
  });
}

function filterImages(tag) {
  console.log("Filtering for tag:", tag);
  displayImages([tag]);
}

// डिफॉल्ट सभी इमेज दिखाएं
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
