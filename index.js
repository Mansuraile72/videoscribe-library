const images = [
    {
        "src": "Healthcare and Medical (online) (2)_12.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (2)_13.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (2)_14.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (2)_15.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (2)_16.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (2)_17.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (2)_18.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_1.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_10.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_11.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_12.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_13.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_14.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_15.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_16.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_17.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_18.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_2.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_3.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_4 - Copy.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_4.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_5.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_6.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_7.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_8.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (3)_9.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_1.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_10.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_12.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_13.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_14.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_15.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_16.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_17.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_2.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_3.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_4.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_5.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_6.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_7.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_8.jpg",
        "tags": []
    },
    {
        "src": "Healthcare and Medical (online) (4)_9.jpg",
        "tags": []
    }
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
