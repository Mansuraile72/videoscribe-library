let currentPage = 1; // বর্তমান পেজ
const imagesPerPage = 1156; // প্রতি পেজে কত ছবি দেখানো হবে
let selectedTags = []; // নির্বাচিত ট্যাগগুলি সংরক্ষণ করবে
const images = [
{"src":"images/Toys and Games (online) (2)_6.webp","tags":["Baby","Front","People2","Surprising","Sitting","Talking","Boy"]},
{"src":"images/Toys and Games (online) (2)_7.webp","tags":["Looking","Side‍","People1","Surprising","Working","Sitting","Talking","Girl"]},
{"src":"images/Toys and Games (online) (2)_8.webp","tags":["Side‍","Back","People1","Computer","Working","Sitting","Boy"]},
{"src":"images/Toys and Games (online) (2)_9.webp","tags":["Side‍","Back","People1","Computer","Working","Sitting","Boy"]},
// আরও ইমেজ যোগ করুন
];
// পেজিনেশন যুক্ত করে ইমেজ ডিসপ্লে ফাংশন
function displayImagesWithPagination() {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // পুরানো ইমেজ মুছে ফেলুন

  const filteredImages = images.filter(image =>
    selectedTags.length === 0 || selectedTags.every(tag => image.tags.includes(tag))
  );

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, filteredImages.length);
  const imagesToShow = filteredImages.slice(startIndex, endIndex);

  imagesToShow.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = "Image";
    imgElement.classList.add('resizable');
    gallery.appendChild(imgElement);
  });

  const paginationControls = document.createElement("div");
  paginationControls.className = "pagination-controls";

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.onclick = () => {
      currentPage--;
      displayImagesWithPagination();
    };
    paginationControls.appendChild(prevButton);
  }

  if (endIndex < filteredImages.length) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.onclick = () => {
      currentPage++;
      displayImagesWithPagination();
    };
    paginationControls.appendChild(nextButton);
  }

  gallery.appendChild(paginationControls);
}

// ইমেজ সাইজ পরিবর্তন করার ফাংশন
function resizeImages(size) {
  const images = document.querySelectorAll("#image-gallery img"); // সব ইমেজ নির্বাচন করুন
  images.forEach(img => {
    img.style.width = `${size}px`; // ইমেজের প্রস্থ পরিবর্তন
  });
}

// স্লাইডার ইভেন্ট লিসেনার যোগ করুন
document.getElementById("size-slider").addEventListener("input", function () {
  resizeImages(this.value); // স্লাইডারের মান অনুযায়ী ইমেজ সাইজ পরিবর্তন
});


// মাল্টিপল কিওয়ার্ড সিলেকশন সাপোর্ট
function toggleTag(tag) {
  const button = document.querySelector(`button[data-tag="${tag}"]`);

  if (selectedTags.includes(tag)) {
    // যদি ট্যাগ ইতিমধ্যে আছে, তাহলে তা সরান
    selectedTags = selectedTags.filter(t => t !== tag);
    button.classList.remove("selected"); // বাটন থেকে ক্লাস সরান
  } else {
    // নতুন ট্যাগ যোগ করুন
    selectedTags.push(tag);
    button.classList.add("selected"); // বাটনে ক্লাস যোগ করুন
  }

  currentPage = 1; // নতুন ট্যাগ সিলেক্ট হলে প্রথম পেজে যান
  displayImagesWithPagination();
}

// বাটন ক্লিক ইভেন্ট
function filterImages(tag) {
  toggleTag(tag); // ট্যাগকে টগল করুন
}

// ডিফল্টভাবে সব ইমেজ দেখান
displayImagesWithPagination();


// ডিফল্টভাবে সব ইমেজ দেখান
displayImagesWithPagination();
