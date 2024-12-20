let currentPage = 1; // वर्तमान पेज ट्रैक करने के लिए
const imagesPerPage = 20; // प्रति पेज कितनी इमेज दिखानी है

// सभी इमेजेस डेटा
const images = [
  {"src": "images/People at Work (online) (11)_16.webp", "tags": ["Looking", "Computer", "Relaxed", "Sitting", "Boy", "Talking", "Girl", "Enjoy", "People∞"]},
  {"src": "images/People at Work (online) (11)_17.webp", "tags": ["Looking", "Front", "Boy", "Girl", "Happy", "People∞"]},
  // यहां आपकी बाकी इमेज डेटा
];

// गैलरी कंटेनर का चयन करें
const gallery = document.getElementById("image-gallery");

// Placeholder इमेज (Fallback)
const placeholderSrc = "images/placeholder.png";

// इमेजेस रेंडर करने का फ़ंक्शन
function renderImages() {
  const start = (currentPage - 1) * imagesPerPage;
  const end = currentPage * imagesPerPage;

  const currentImages = images.slice(start, end);

  // Document Fragment का उपयोग करें
  const fragment = document.createDocumentFragment();

  currentImages.forEach(image => {
    const img = document.createElement("img");
    img.dataset.src = image.src; // Lazy Loading के लिए data-src का उपयोग
    img.src = placeholderSrc; // Placeholder इमेज
    img.classList.add("lazy");
    img.alt = "Gallery Image";

    // Error Handling: इमेज लोड न हो तो Fallback इमेज दिखाएं
    img.onerror = () => {
      img.src = placeholderSrc;
    };

    fragment.appendChild(img);
  });

  gallery.appendChild(fragment);

  enableLazyLoading(); // हर बार नई इमेज जोड़ने के बाद Lazy Loading चालू करें
}

// Lazy Loading इनेबल करने का फ़ंक्शन
function enableLazyLoading() {
  const lazyImages = document.querySelectorAll("img.lazy:not(.loaded)");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // data-src को src में बदलें
          img.classList.add("loaded");
          observer.unobserve(img); // लोड होने के बाद ऑब्जर्व करना बंद करें
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  } else {
    // पुराने ब्राउज़रों के लिए फॉलबैक
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add("loaded");
    });
  }
}

// स्क्रॉलिंग के लिए थ्रॉटलिंग
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const galleryHeight = gallery.offsetHeight;

      if (scrollPosition >= galleryHeight) {
        currentPage++;
        renderImages();
      }
      isScrolling = false;
    }, 200); // थ्रॉटलिंग के लिए 200ms का विलंब
  }
});

// पेज लोड होने पर पहली बार इमेज लोड करें
document.addEventListener("DOMContentLoaded", renderImages);
