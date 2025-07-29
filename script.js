const hotels = [{
    id: 1, 
    name: "Taj Lake Palace",//so jaise kisi ne hotal ka naam likha  lake hotel so vo yaha pe likhe ga .. so koi nhi naam apan ko show karvana hai vo yaha pe ok
    rating: 5,
    description: "A luxury hotel situated in the middle of Lake Pichola offering stunning views of the City Palace and surrounding mountains.",
    image: "images/lake.jpg", 
     prices: {
        night : 12000,
        day: 6000, // yaha  karna hai cont hotels mai  const cafe mai mat jana 
        hourly: 2000  
    }
}, {
    id: 2,
    name: "Amet Haveli",
    rating: 4,
    description: "A beautifully restored heritage property in the heart of the old city, featuring traditional Rajasthani architecture and modern amenities.",
    image: "images/amet.webp",
    prices: {
        night: 8000,
        day: 4000,
        hourly: 1500
    }
}, {
    id: 3,
    name: "The Leela Palace ",
    rating: 4,
    description: "A peaceful retreat on the banks of Fateh Sagar Lake with lush gardens and comfortable rooms with lake views.",
    image: "images/lella.jpg",
    prices: {
        night: 6000,
        day: 3000,
        hourly: 1000
    }
}, {
    id: 4,
    name: "Royal Rafahiya Haveli ",
    rating: 5,
    description: "Opulent suites in a former royal residence, offering a glimpse into the royal lifestyle with modern luxury.",
    image: "images/hotel.jpg",
  
  prices: {
        night: 15000,
        day: 7500,
        hourly: 2500
    }
},{
id: 5,
name: "Shiv Niwas Palace",
rating: 5,
description: "A beautiful historic hotel with stunning lake views, giving visitors a chance to experience royal elegance.",
 image: "images/shiv.webp",
 prices: {
        night: 15000,
        day: 7500,
        hourly: 2500
    }
},

{
    id: 6,
    name: "Fateh Prakash Palace",
    rating:4.5,
    description:"Offers stunning architecture, panoramic lake views, and a glimpse into royal history, making it a must-visit.",
    image: "images/fateh.jpg",

    prices: {
        night: 15000,
        day: 7500,
        hourly: 2500
    }
}
];
const cafes = [{
    name: "Udai Art Cafe",
    description: "The Udai Art Cafe is the perfect place to relax with an espresso or grab a bite to eat.",
    image: "images/Udai.jpg",
    price: "₹400 per person",
        location: "Ganesh Ghati Road, Near Jagdish Temple"
}, {
    name: "Cafe La Combida",
    description: "Our aim to serve freshly brewed coffee. Antique accent blend harmoniously with the contemporary vibe.",
    image: "images/coffee la comida.jpg",
    price: "₹300 per person",
    location: "Lal Ghat Road, Near Jagdish Temple"
}, {
    name: "Restaurant Harigarh",
    description: "Panoramic views of Lake Pichola and the City Palace.",
    image: "images/Restaurant Harigarh.jpg",
    price: "₹600 per person",
     location: "Hanuman Ghat, Outside Chand Pole"
}, {
    name: "Cafe Edelweiss",
    description: "European cafe with delicious pastries and coffee. A must-visit!",
    image: "images/cafe.jpg",
    price: "₹350 per person",
    location: "Gangaur Ghat Road, Near Bagore Ki Haveli"
}, {
    name: "Oladar Cafe",
    description: "Renowned for its charming décor, cosy atmosphere and classy vibe.",
    image: "images/oladar cafe.jpg",
    price: "₹250 per person",
    location: "Lake Palace Road, Kalaji Goraji"
}, {
    name: "Backyard Rooftop Cafe",
    description: "Ideal for relaxed rooftop lounging, offering a soothing panoramic view of the lake.",
    image: "images/Backyard.jpg",
    price: "₹400 per person",
    location: "Pichola, Near Gadiya Devra Marg"
}, {
    name: "Botanical Cafe",
    description: "Guests frequently praise the relaxing vibe and a cozy spot for a quiet coffee moment.",
    image: "images/botanical .jpg",
    price: "₹300 per person"
}, {
    name: "The Oven Project Cafe",
    description: "The space is modern, welcoming, and suited for laid-back meets or work breaks.",
    image: "images/oven project cafe.jpg",
    price: "₹200 per person"
}, {
    name: "The Patio",
    description: "A classy bistro with a 90s Hollywood vibe, featuring breezy balcony seating.",
    image: "images/patio cafe.jpg",
    price: "₹450 per person"
}];
      
const craftsLocations = [{
    id: 1,
    name: "Shilpgram Crafts Village",
    location: "3 km west of Udaipur",
    description: "A rural arts and crafts complex showcasing the rich and varied craft traditions of Rajasthan.",
    price: 500,
    images: ["images/s1.jpg", "images/s2.webp", "images/s3.jpg"]
}, {
    id: 2,
    name: "Hathi Pol Bazaar",
    location: "City Palace Road",
    description: "Famous for textiles, especially bandhani (tie-dye) and block printing. Meet local artisans and see them at work.",
    price: 0,
    images: ["images/h1.jpg", "images/h2.jpg", "images/h3.jpg"]
}, {
    id: 3,
    name: "Miniature Painting Workshop",
    location: "Bhattiyani Chohatta",
    description: "Learn the ancient art of Rajasthani miniature painting from master artists in a hands-on workshop.",
    price: 50,
    images: ["images/m1.jpg", "images/m2.jpg", "images/m3.jpg"]
}];

const culturalShows = [{
    id: 1,
    name: "Dharohar Folk Dance",
    location: "Bagore Ki Haveli",
    description: "Experience an evening of vibrant Rajasthani folk dance and traditional music in a beautiful haveli setting.",
    price: 500,
    rating: 4.8,
    images: ["images/dharohar.webp", "images/dharohar 2.jpg", "images/Dharohar3.jpg"]
}, {
    id: 2,
    name: "Traditional Puppet Show",
    location: "Bharatiya Lok Kala Mandal",
    description: "Watch colorful puppets come alive with stories from Rajasthan's rich history and folklore, a delight for all ages.",
    price: 500,
    rating: 4.5,
    images: ["images/tps 1.webp", "images/tps2.jpg", "images/tps 3.jpg"]
}, {
    id: 3,
    name: "Classical Music Evening",
    location: "City Palace",
    description: "Immerse yourself in the soulful melodies of Indian classical music performed by local maestros within the royal palace grounds.",
    price: 1500,
    rating: 4.9,
    images: ["images/cme 1.jpg", "images/cme2.jpg", "images/cme3.jpg"]
}];

const tourGuides = [{
    id: 1,
    name: "Rajesh Kumar",
    languages: ["English", "Hindi"],
    rating: 4.8,
    price: 1000,
    image: "images/g3.png",
    specialty: "Expert in palace history and architecture."
}, {
    id: 2,
    name: "Priya Singh",
    languages: ["English", "French", "Hindi"],
    rating: 4.9,
    price: 1800,
    image: "images/g4.png",
    specialty: "Specializes in local culture and cuisine tours."
}, {
    id: 3,
    name: "Anand Mehta",
    languages: ["English", "German", "Hindi"],
    rating: 4.7,
    price: 2100,
    image: "images/g2.jpg",
    specialty: "Photography expert and hidden gems finder."
}, {
    id: 4,
    name: "Sunita Devi",
    languages: ["English", "Hindi"],
    rating: 4.6,
    price: 1800,
    image: "images/g5.png",
    specialty: "Leads spiritual and temple tours."
}, {
    id: 5,
    name: "Vikram Rathore",
    languages: ["English", "Spanish", "Hindi"],
    rating: 4.9,
    price: 2500,
    image: "images/g1.jpg",
    specialty: "Specializes in trekking and nature tours around Udaipur."
}];


const tourPackages = [{
    id: 1,
    duration: "1 Day Tour",
    title: "The Royal Udaipur Experience",
    price: 3500,
    coverImage: "images/royal.jpg",
    description: "A whirlwind tour of Udaipur's most iconic royal landmarks in a single day.",
    itinerary: [{
        day: "Day 1",
        plan: ["City Palace Complex", "Jagdish Temple", "Boat ride on Lake Pichola", "Saheliyon Ki Bari (Garden of Maids)"]
    }],
    inclusions: ["Private Air-Conditioned Car", "Professional Tour Guide", "All Monument Entry Tickets", "Bottled Water"]
}, {
    id: 2,
    duration: "2 Days Tour",
    title: "Lakes & Legacy Tour",
    price: 6500,
    coverImage: "images/royal2.jpg",
    description: "Explore the royal history and serene lakes of Udaipur over two immersive days.",
    itinerary: [{
        day: "Day 1",
        plan: ["City Palace", "Jagdish Temple", "Boat ride on Lake Pichola", "Cultural Show at Bagore Ki Haveli"]
    }, {
        day: "Day 2",
        plan: ["Saheliyon Ki Bari", "Monsoon Palace (Sajjangarh)", "Shilpgram Craft Village", "Sunset at Fateh Sagar Lake"]
    }],
    inclusions: ["Private Air-Conditioned Car", "Professional Tour Guide", "All Monument Entry Tickets", "2 Days Lunch"]
}, {
    id: 3,
    duration: "3 Days Tour",
    title: "The Complete Udaipur Expedition",
    price: 9000,
    coverImage: "images/fs.jpg",    
    description: "A comprehensive journey through Udaipur's heritage, culture, and natural beauty.",
    itinerary: [{
        day: "Day 1",
        plan: ["City Palace", "Jagdish Temple", "Vintage Car Museum", "Boat ride on Lake Pichola"]
    }, {
        day: "Day 2",
        plan: ["Monsoon Palace (Sajjangarh)", "Shilpgram Craft Village", "Fateh Sagar Lake", "Shopping at Hathi Pol Bazaar"]
    }, {
        day: "Day 3",
        plan: ["Day trip to Kumbhalgarh Fort (UNESCO World Heritage Site)"]
    }],
    inclusions: ["Private Air-Conditioned Car", "Professional Tour Guide", "All Monument Entry Tickets", "3 Days Lunch", "Bottled Water"]
}, {
    id: 4,
    duration: "4 Days Tour",
    title: "Udaipur & Its Majestic Outskirts",
    price: 12500,
    coverImage: "images/chittorgarh.webp",
    description: "The ultimate tour covering Udaipur's finest sights and the legendary forts nearby.",
    itinerary: [{
        day: "Day 1",
        plan: ["Full Udaipur City Tour: City Palace, Jagdish Temple, Saheliyon Ki Bari"]
    }, {
        day: "Day 2",
        plan: ["Monsoon Palace", "Shilpgram", "Lakes Tour (Pichola, Fateh Sagar)"]
    }, {
        day: "Day 3",
        plan: ["Full day trip to Kumbhalgarh Fort"]
    }, {
        day: "Day 4",
        plan: ["Full day trip to Chittorgarh Fort (Largest fort in India)"]
    }],
    inclusions: ["Private Air-Conditioned Car", "Professional Tour Guide", "All Entry Tickets", "4 Days Lunch"]
}];

let bookings = [];
let selectedHotel = null;
let selectedBookingOption = "night";
let bookingCount = 0;
let currentCraftsSlide = 0;
let currentShowSlide = 0;
let selectedPackage = null;
let currentPackagePersons = 1;
let isLoggedIn = false;

document.addEventListener("DOMContentLoaded", function() {
    renderHotels();
    renderCafes();
    renderCraftsList();
    renderShowsList();
    setupEventListeners();
    initGSAP();
     renderPackagesList();
     setupThemeToggle();
         updateAuthState();
});

function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach(section => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true
            }
        });
    });
}

function updateAuthState() {
    const loginBtn = document.getElementById('login-btn');
    const userProfile = document.getElementById('user-profile');
    if (isLoggedIn) {
        loginBtn.style.display = 'none';
        userProfile.style.display = 'block'; // Use 'block' to make the container visible
    } else {
        loginBtn.style.display = 'flex';
        userProfile.style.display = 'none';
    }
}


document.addEventListener("DOMContentLoaded", function() {

    google.accounts.id.initialize({
        client_id: "620087549726-ldrti27f70drp9kk3qpgjh48693c0e13.apps.googleusercontent.com", 
        callback: handleCredentialResponse
    });

    
    updateAuthState();
});

function handleCredentialResponse(response) {
  const userObject = JSON.parse(atob(response.credential.split('.')[1]));
  
  isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(userObject)); 
  // Update the username inside the dropdown
  document.getElementById('username-dropdown').textContent = userObject.name; 
  updateAuthState();
  closeModal(document.getElementById('loginModal'));
  showToast(`Welcome, ${userObject.name}!`, 'success');
}

function renderGuides() {
    const guideContainer = document.getElementById('guide-list-container');
    if (!guideContainer) return;

    guideContainer.innerHTML = ""; 
    tourGuides.forEach(guide => {
        const guideItem = document.createElement('div');
        guideItem.className = 'guide-item-modal';

        guideItem.innerHTML = `
            <img src="${guide.image}" alt="${guide.name}" class="guide-photo">
            <div class="guide-info">
                <h4>${guide.name}</h4>
                <div class="languages">Languages: ${guide.languages.join(', ')}</div>
                <div class="rating">${getRatingStars(guide.rating)}</div>
                <p>${guide.specialty}</p>
            </div>
            <div class="guide-booking">
                <span>₹${guide.price} / day</span>
                <button class="btn btn-outline guide-book-btn" data-guide="${guide.name}" data-price="${guide.price}">Book</button>
            </div>
        `;
        guideContainer.appendChild(guideItem);
    });
}

function renderHotels() {
    const hotelList = document.getElementById("hotelList");
    if (!hotelList) return;
    hotelList.innerHTML = "";
    hotels.forEach(hotel => {
        const hotelCard = document.createElement("div");
        hotelCard.className = "hotel-card";
        hotelCard.innerHTML = `<img src="${hotel.image}" alt="${hotel.name}" class="hotel-image"><div class="hotel-content"><h3 class="hotel-name">${hotel.name}</h3><div class="hotel-rating">${getRatingStars(hotel.rating)}</div><p class="hotel-description">${hotel.description}</p><button class="btn btn-outline view-options-btn" data-id="${hotel.id}">View Options</button></div>`;
        hotelList.appendChild(hotelCard);
    });
}

function renderCafes() {
    const cafeCarousel = document.getElementById("cafeCarousel");
    if (!cafeCarousel) return;
    cafeCarousel.innerHTML = "";
    cafes.forEach(cafe => {
        const cafeCard = document.createElement("div");
        cafeCard.className = "cafe-card";
        cafeCard.innerHTML = `<img src="${cafe.image}" alt="${cafe.name}" class="cafe-image"><div class="cafe-content"><h3 class="cafe-title">${cafe.name}</h3><p>${cafe.description}</p><p style="color: var(--teal); font-weight: bold;">${cafe.price}</p><div class="cafe-buttons"><button class="btn btn-outline cafe-btn cafe-visit-btn" data-cafe="${cafe.name}">Visit</button><button class="btn cafe-btn cafe-order-btn" data-cafe="${cafe.name}" data-price="800">Order</button></div></div>`;
        cafeCarousel.appendChild(cafeCard);
    });
}

function renderBookings() {
    const bookingsList = document.getElementById("bookingsList");
    const totalSection = document.getElementById("totalSection");
    const totalPrice = document.getElementById("totalPrice");
    if (bookings.length === 0) {
        bookingsList.innerHTML = `<div class="empty-bookings">No bookings yet.</div>`;
        totalSection.style.display = "none";
        return;
    }
    bookingsList.innerHTML = "";
    let total = 0;
    bookings.forEach((booking, index) => {
        const bookingItem = document.createElement("div");
        bookingItem.className = "booking-item";
        bookingItem.innerHTML = `<div class="booking-details"><h4>${booking.name}</h4><p>${booking.type} - ${booking.details}</p></div><div class="booking-price">₹${booking.price}</div><button class="cancel-btn" data-index="${index}">&times;</button>`;
        bookingsList.appendChild(bookingItem);
        total += booking.price;
    });
    totalSection.style.display = "flex";
    totalPrice.textContent = `₹${total}`;
}

function cancelBooking(index) {
    const canceledBookingName = bookings[index].name;
    bookings.splice(index, 1);
    bookingCount--;
    updateBookingBadge();
    renderBookings();
    showToast(`Booking for "${canceledBookingName}" has been canceled.`);
}

function getRatingStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<i class="fas fa-star"></i>' : (i - 0.5) <= rating ? '<i class="fas fa-star-half-alt"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

function showHotelDetail(hotelId) {
    const hotelList = document.getElementById("hotelList");
    const hotelDetail = document.getElementById("hotelDetail");
    selectedHotel = hotels.find(hotel => hotel.id === hotelId);
    if (!selectedHotel) return;
    hotelList.style.display = "none";
    hotelDetail.style.display = "block";
    document.getElementById("detailName").textContent = selectedHotel.name;
    document.getElementById("detailRating").innerHTML = getRatingStars(selectedHotel.rating);
    document.getElementById("detailDescription").textContent = selectedHotel.description;
    selectedBookingOption = "night";
    document.querySelectorAll(".booking-option").forEach(option => {
        option.classList.remove("active");
        if (option.getAttribute("data-option") === "night") {
            option.classList.add("active");
        }
    });
    animatePrice(0, selectedHotel.prices[selectedBookingOption]);
}

function animatePrice(from, to) {
    const duration = 1000;
    const startTime = performance.now();
    const priceDisplay = document.getElementById("priceDisplay");
    function updatePrice(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(from + (to - from) * progress);
        priceDisplay.textContent = `₹${currentValue}`;
        if (progress < 1) {
            requestAnimationFrame(updatePrice);
        }
    }
    requestAnimationFrame(updatePrice);
}

function addBooking(booking) {
    bookings.push(booking);
    bookingCount++;
    updateBookingBadge();
    renderBookings();
    showConfirmationModal(booking);
}

function clearBookings() {
    bookings = [];
    bookingCount = 0;
    updateBookingBadge();
    renderBookings();
}
function updateBookingBadge() {
    const bookingsBadge = document.getElementById("bookingsBadge");
    bookingsBadge.textContent = bookingCount;
    bookingsBadge.classList.toggle("show", bookingCount > 0);
}

function getBookingOptionText(option) {
    switch (option) {
        case "night": return "Night Stay";
        case "day": return "Day Stay";
        case "hourly": return "Hourly Rent";
        default: return "Stay";
    }
}

function openModal(modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function showConfirmationModal(booking) {
    const confirmModal = document.getElementById('confirmationModal');
    const confirmSummary = document.getElementById('confirm-summary');
    confirmSummary.textContent = `Your ${booking.type.toLowerCase()} booking for "${booking.name}" has been successfully added to your list.`;
    openModal(confirmModal);
}

function showToast(message, type = 'cancel') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.classList.add(type === 'success' ? 'toast-success' : 'toast-cancel');
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

function showLocationModal(cafeName) {
    const locationModal = document.getElementById('locationModal');
    const cafe = cafes.find(c => c.name === cafeName);
    if (cafe) {
        document.getElementById('location-cafe-name').textContent = cafe.name;
        document.getElementById('location-cafe-address').textContent = cafe.location;
        openModal(locationModal);
    }
}

function animateCounter(element, from, to, duration) {
    const startTime = performance.now();
    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(from + (to - from) * progress);
        element.textContent = currentValue;
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    requestAnimationFrame(updateCounter);
}

function renderCraftsList() {
    const craftsGrid = document.getElementById('crafts-grid');
    if (!craftsGrid) return;
    craftsGrid.innerHTML = '';
    craftsLocations.forEach(location => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div class="card-image-container"><img src="${location.images[0]}" alt="${location.name}"></div><div class="card-content"><h3>${location.name}</h3><p>${location.description.substring(0, 100)}...</p></div><div class="card-footer"><button class="btn btn-primary view-crafts-details-btn" data-id="${location.id}">View Details</button></div>`;
        craftsGrid.appendChild(card);
    });
}

function showCraftsDetail(locationId) {
    const craftsList = document.getElementById('crafts-list');
    const craftsDetail = document.getElementById('crafts-detail');
    const location = craftsLocations.find(l => l.id === locationId);
    if (!location) return;
    document.getElementById('crafts-detail-name').textContent = location.name;
    document.getElementById('crafts-detail-location').textContent = location.location;
    document.getElementById('crafts-detail-description').textContent = location.description;
    document.getElementById('crafts-detail-price').textContent = `₹${location.price}`;
    document.getElementById('book-craft-visit-btn').dataset.id = location.id;
    const slideshow = document.getElementById('crafts-slideshow');
    slideshow.innerHTML = '';
    location.images.forEach(imgUrl => {
        const slide = document.createElement('div');
        slide.className = 'crafts-slide';
        slide.innerHTML = `<img src="${imgUrl}" alt="${location.name}">`;
        slideshow.appendChild(slide);
    });
    currentCraftsSlide = 0;
    displayCraftsSlide(0);
    craftsList.style.display = 'none';
    craftsDetail.style.display = 'block';
}



function displayCraftsSlide(n) {
    const slides = document.querySelectorAll('.crafts-slide');
    if (n >= slides.length) currentCraftsSlide = 0;
    if (n < 0) currentCraftsSlide = slides.length - 1;
    slides.forEach(slide => slide.style.display = "none");
    slides[currentCraftsSlide].style.display = "block";
}

function renderShowsList() {
    const showsGrid = document.getElementById("shows-grid");
    if (!showsGrid) return;
    showsGrid.innerHTML = "";
    culturalShows.forEach(show => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class="card-image-container"><img src="${show.images[0]}" alt="${show.name}"><div class="rating-badge">${show.rating} <i class="fa-solid fa-star"></i></div></div><div class="card-content"><h3>${show.name}</h3><p>${show.description.substring(0,100)}...</p></div><div class="card-footer"><button class="btn btn-primary view-show-details-btn" data-id="${show.id}">View Details</button></div>`;
        showsGrid.appendChild(card);
    });
}

function showShowDetail(showId) {
    const showsList = document.getElementById("shows-list");
    const showsDetail = document.getElementById("shows-detail");
    const show = culturalShows.find(s => s.id === showId);
    if (!show) return;
    document.getElementById("shows-detail-name").textContent = show.name;
    document.getElementById("shows-detail-location").textContent = show.location;
    document.getElementById("shows-detail-description").textContent = show.description;
    document.getElementById("shows-detail-price").textContent = `₹${show.price}`;
    document.getElementById("shows-detail-rating").innerHTML = `${getRatingStars(show.rating)} <span>${show.rating}</span>`;
    document.getElementById("book-show-ticket-btn").dataset.id = show.id;
    const slideshow = document.getElementById("shows-slideshow");
    slideshow.innerHTML = "";
    show.images.forEach(imgUrl => {
        const slide = document.createElement("div");
        slide.className = "show-slide";
        slide.innerHTML = `<img src="${imgUrl}" alt="${show.name}">`;
        slideshow.appendChild(slide);
    });
    currentShowSlide = 0;
    displayShowSlide(0);
    showsList.style.display = "none";
    showsDetail.style.display = "block";
}

function displayShowSlide(n) {
    const slides = document.querySelectorAll(".show-slide");
    if (n >= slides.length) currentShowSlide = 0;
    if (n < 0) currentShowSlide = slides.length - 1;
    slides.forEach(slide => slide.style.display = "none");
    slides[currentShowSlide].style.display = "block";
}

function updatePackageTotalPrice() {
    if (!selectedPackage) return;
    const totalPrice = selectedPackage.price * currentPackagePersons;
    document.getElementById('package-total-price').textContent = `₹${totalPrice}`;
    document.getElementById('package-per-person-price').textContent = `(₹${selectedPackage.price} per person)`;
}

google.accounts.id.initialize({
  client_id: "620087549726-ldrti27f70drp9kk3qpgjh48693c0e13.apps.googleusercontent.com", // Replace with your OAuth Client ID
  callback: handleCredentialResponse
});

google.accounts.id.renderButton(
  document.getElementById("googleSignInDiv"),
  { theme: "outline", size: "large" }
);

function handleCredentialResponse(response) {
  console.log("Google Token:", response.credential);
  isLoggedIn = true;
  updateAuthState();
  closeModal(document.getElementById("loginModal"));
}

document.getElementById("email-login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;

  const nameFromEmail = email.split('@')[0];
  const displayName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

  isLoggedIn = true;

  document.getElementById('username-dropdown').textContent = displayName;
  updateAuthState();
  closeModal(document.getElementById("loginModal"));
  showToast(`Welcome, ${displayName}!`, 'success');
});




function setupEventListeners() {
    const hotelList = document.getElementById("hotelList");
    const hotelDetail = document.getElementById("hotelDetail");
    const backToList = document.getElementById("backToList");
    const bookStayBtn = document.getElementById("bookStayBtn");
    const myBookingsBtn = document.getElementById("myBookingsBtn");
    const bookingsModal = document.getElementById("bookingsModal");
    const cabModal = document.getElementById("cabModal");
    const guideModal = document.getElementById("guideModal");
    const confirmationModal = document.getElementById('confirmationModal');
    const cabForm = document.getElementById("cabForm");
    const craftsGrid = document.getElementById('crafts-grid');
    const backToCraftsListBtn = document.getElementById('back-to-crafts-list-btn');
    const craftsDetail = document.getElementById('crafts-detail');
    const craftsList = document.getElementById('crafts-list');
    const showsGrid = document.getElementById("shows-grid");
    const backToShowsListBtn = document.getElementById("back-to-shows-list-btn");
    const showsDetail = document.getElementById("shows-detail");
    const showsList = document.getElementById("shows-list");
    const bookingsList = document.getElementById("bookingsList");
    const locationModal = document.getElementById('locationModal');
    const packagesGrid = document.getElementById('packages-grid');
     const packagesListView = document.getElementById("packages-list-view");
    const packagesDetailView = document.getElementById("packages-detail-view");
     const BookingsModal = document.getElementById("bookingsModal");
    const paymentModal = document.getElementById("paymentModal");
    const paymentForm = document.getElementById("payment-form");
    const payNowBtn = document.getElementById("pay-now-btn");
    const paymentProcessing = document.getElementById("payment-processing");
    const paymentAmount = document.getElementById("payment-amount");
    const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginModal = document.getElementById("loginModal");
const userProfile = document.getElementById("user-profile");
 const userProfileBtn = document.getElementById('user-profile-btn');
    const userDropdown = document.getElementById('user-dropdown');
    const savedUser = localStorage.getItem("user");


      if (savedUser) {
    const userObject = JSON.parse(savedUser);
    isLoggedIn = true;
    document.getElementById('username-dropdown').textContent = userObject.name;
  }
  updateAuthState(); // This will hide/show login button
});

 userProfileBtn.addEventListener('click', (event) => {
        event.stopPropagation(); 
        userDropdown.classList.toggle('active');
    });

    window.addEventListener('click', () => {
        if (userDropdown.classList.contains('active')) {
            userDropdown.classList.remove('active');
        }
    });
    document.getElementById('logout-btn').addEventListener('click', () => {
        isLoggedIn = false;
        updateAuthState();
        userDropdown.classList.remove('active'); 
        showToast("You have been successfully logged out.", 'cancel');
    });

     

document.getElementById('login-btn').addEventListener('click', () => {
        openModal(loginModal);
        
        google.accounts.id.renderButton(
            document.getElementById('google-btn-placeholder'), 
            { theme: "outline", size: "large", type: "standard", text: "signin_with", shape: "rectangular", logo_alignment: "left" }
        );
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        isLoggedIn = false;
        updateAuthState();
        showToast("You have been successfully logged out.", 'cancel');
    });

loginBtn.addEventListener("click", () => openModal(loginModal));

logoutBtn.addEventListener("click", () => {
  isLoggedIn = false;
  updateAuthState();
});

     document.getElementById('confirm-and-pay-btn').addEventListener('click', () => {
        const total = bookings.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('payment-amount').textContent = `₹${total}`;

        closeModal(document.getElementById('confirmationModal'));
        openModal(document.getElementById('paymentModal'));
    });

   
    bookingsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('cancel-btn')) {
            const index = parseInt(e.target.dataset.index, 10);
            cancelBooking(index);
        }
    });

    packagesGrid.addEventListener('click', e => {
        if (e.target.classList.contains('view-package-details-btn')) {
            showPackageDetail(parseInt(e.target.dataset.id));
        }
    });

document.querySelector('.guide-list').addEventListener('click', e => {
        if (e.target.classList.contains('guide-book-btn')) {
            const guideName = e.target.dataset.guide;
            const price = parseInt(e.target.dataset.price);
            
            addBooking({
                type: "Guide",
                name: guideName,
                price: price,
                details: "Full Day Tour"
            });
            
            closeModal(document.getElementById('guideModal'));
        }
    });

    cabForm.addEventListener("submit", e => {
    e.preventDefault();
    const pickupLocation = document.getElementById("pickupLocation").value;
    const dropLocation = document.getElementById("dropLocation").value;
    const cabType = document.getElementById("cabType").value;

    if (!pickupLocation || !dropLocation) {
        return alert("Please enter both pickup and drop locations.");
    }

    let price = 300;
    if (cabType === "premium") price = 500;
    if (cabType === "suv") price = 700;

    const bookingDetails = {
        type: "Transportation",
        name: `Eco-Cab (${cabType})`,
        price: price,
        details: `From ${pickupLocation} to ${dropLocation}`
    };

    addBooking(bookingDetails);
    closeModal(cabModal);

    const ecoRide = document.getElementById("ecoRide");
    const co2Counter = document.getElementById("co2Counter");
    if (ecoRide && co2Counter) {
        animateCounter(co2Counter, parseInt(co2Counter.textContent), parseInt(co2Counter.textContent) + 5, 1000);
    }
});

    document.querySelector(".guide-btn").addEventListener("click", () => {
        renderGuides(); 
        openModal(document.getElementById('guideModal'));
    });

   document.getElementById('quantity-plus').addEventListener('click', () => {
        if (currentPackagePersons < 10) { 
            currentPackagePersons++;
            document.getElementById('quantity-display').textContent = currentPackagePersons;
            updatePackageTotalPrice();
        }
    });

    document.getElementById('quantity-minus').addEventListener('click', () => {
        if (currentPackagePersons > 1) { 
            currentPackagePersons--;
            document.getElementById('quantity-display').textContent = currentPackagePersons;
            updatePackageTotalPrice();
        }
    });

    document.getElementById('book-package-btn').addEventListener('click', e => {
        if (selectedPackage) {
            addBooking({
                type: "Tour Package",
                name: selectedPackage.title,
                price: selectedPackage.price * currentPackagePersons, 
                details: `${selectedPackage.duration} for ${currentPackagePersons} person(s)`
            });
        }
    });


    hotelList.addEventListener("click", e => {
        if (e.target.classList.contains("view-options-btn")) {
            showHotelDetail(parseInt(e.target.getAttribute("data-id")));
        }
    });

    backToList.addEventListener("click", () => {
        hotelList.style.display = "grid";
        hotelDetail.style.display = "none";
    });

    document.querySelectorAll(".booking-option").forEach(option => {
        option.addEventListener("click", function() {
            document.querySelectorAll(".booking-option").forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");
            selectedBookingOption = this.getAttribute("data-option");
            animatePrice(parseInt(document.getElementById("priceDisplay").textContent.replace("₹", "")), selectedHotel.prices[selectedBookingOption]);
        });
    });

    bookStayBtn.addEventListener("click", () => {
        if (!selectedHotel) return;
        const bookingDetails = {
            type: "Hotel",
            name: selectedHotel.name,
            price: selectedHotel.prices[selectedBookingOption],
            details: getBookingOptionText(selectedBookingOption)
        };
        addBooking(bookingDetails);
    });

     document.getElementById('proceed-to-pay-btn').addEventListener('click', () => {
        if (bookings.length === 0) {
            showToast("Your booking cart is empty.", 'cancel');
            return;
        }
        const total = bookings.reduce((sum, item) => sum + item.price, 0);
        paymentAmount.textContent = `₹${total}`;
        closeModal(bookingsModal);
        openModal(paymentModal);
    });

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        payNowBtn.disabled = true;
        paymentProcessing.style.display = 'block';

        setTimeout(() => {
            paymentProcessing.style.display = 'none';
            payNowBtn.disabled = false;
            
            closeModal(paymentModal);
            clearBookings();
            showToast("Payment successful! Your bookings are confirmed.", 'success');
        }, 2000);
    });

    myBookingsBtn.addEventListener("click", () => openModal(bookingsModal));
    document.querySelector(".cab-btn").addEventListener("click", () => openModal(cabModal));
    document.querySelector(".guide-btn").addEventListener("click", () => openModal(guideModal));

    document.querySelectorAll(".modal-close").forEach(button => {
        button.addEventListener("click", function() {
            closeModal(this.closest(".modal-overlay"));
        });
    });

    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", function(e) {
            if (e.target === this) closeModal(this);
        });
    });

    document.querySelector(".cafe-carousel").addEventListener("click", e => {
        if (e.target.classList.contains('cafe-visit-btn')) {
            showLocationModal(e.target.dataset.cafe);
        }
        if (e.target.classList.contains('cafe-order-btn')) {
            const bookingDetails = {
                type: "Food Order",
                name: e.target.dataset.cafe,
                price: 800,
                details: "Food & Beverages"
            };
            addBooking(bookingDetails);
        }
    });
    
    document.getElementById('close-location-modal-btn').addEventListener('click', () => {
        closeModal(locationModal);
    });

    craftsGrid.addEventListener('click', e => {
        if (e.target && e.target.classList.contains('view-crafts-details-btn')) {
            showCraftsDetail(parseInt(e.target.getAttribute('data-id')));
        }
    });

    backToCraftsListBtn.addEventListener('click', () => {
        craftsDetail.style.display = 'none';
        craftsList.style.display = 'block';
    });

    document.getElementById('crafts-prev-slide').addEventListener('click', () => displayCraftsSlide(--currentCraftsSlide));
    document.getElementById('crafts-next-slide').addEventListener('click', () => displayCraftsSlide(++currentCraftsSlide));

    document.getElementById('book-craft-visit-btn').addEventListener('click', e => {
        const locationId = parseInt(e.target.dataset.id);
        const location = craftsLocations.find(l => l.id === locationId);
        if (location) {
            addBooking({
                type: "Activity",
                name: location.name,
                price: location.price,
                details: "Artisan Experience"
            });
        }
    });

    showsGrid.addEventListener('click', e => {
        if (e.target && e.target.classList.contains('view-show-details-btn')) {
            showShowDetail(parseInt(e.target.getAttribute('data-id')));
        }
    });

    backToShowsListBtn.addEventListener('click', () => {
        showsDetail.style.display = 'none';
        showsList.style.display = 'block';
    });

    document.getElementById('shows-prev-slide').addEventListener('click', () => displayShowSlide(--currentShowSlide));
    document.getElementById('shows-next-slide').addEventListener('click', () => displayShowSlide(++currentShowSlide));

    document.getElementById('book-show-ticket-btn').addEventListener('click', e => {
        const showId = parseInt(e.target.dataset.id);
        const show = culturalShows.find(s => s.id === showId);
        if (show) {
            addBooking({
                type: "Event",
                name: show.name,
                price: show.price,
                details: "Cultural Show"
            });
        }
    });

    document.getElementById('continue-exploring-btn').addEventListener('click', () => {
        closeModal(confirmationModal);
    });

    document.getElementById('view-all-bookings-btn').addEventListener('click', () => {
        closeModal(confirmationModal);
        openModal(bookingsModal);
    });
}

function renderPackagesList() {
    const packagesGrid = document.getElementById("packages-grid");
    if (!packagesGrid) return;
    packagesGrid.innerHTML = "";
    tourPackages.forEach(pkg => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${pkg.coverImage}" alt="${pkg.title}">
            </div>
            <div class="card-content">
                <p style="font-weight: bold; color: var(--teal);">${pkg.duration}</p>
                <h3>${pkg.title}</h3>
                <p>${pkg.description.substring(0, 90)}...</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary view-package-details-btn" data-id="${pkg.id}">View Details</button>
            </div>`;
        packagesGrid.appendChild(card);
    });
}

function showPackageDetail(packageId) {
    const packagesListView = document.getElementById("packages-list-view");
    const packagesDetailView = document.getElementById("packages-detail-view");
    selectedPackage = tourPackages.find(p => p.id === packageId);
    if (!selectedPackage) return;

    document.getElementById("package-detail-image").src = selectedPackage.coverImage;
    document.getElementById("package-detail-title").textContent = selectedPackage.title;
    document.getElementById("package-detail-duration").textContent = selectedPackage.duration;
    document.getElementById("package-detail-description").textContent = selectedPackage.description;
    
    const itineraryContainer = document.getElementById("package-detail-itinerary");
    itineraryContainer.innerHTML = "";
    selectedPackage.itinerary.forEach(dayPlan => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'itinerary-day';
        const planItems = dayPlan.plan.map(item => `<li>${item}</li>`).join('');
        dayDiv.innerHTML = `<strong>${dayPlan.day}:</strong> <ul>${planItems}</ul>`;
        itineraryContainer.appendChild(dayDiv);
    });
    
    const inclusionsList = document.getElementById("package-detail-inclusions");
    inclusionsList.innerHTML = "";
    selectedPackage.inclusions.forEach(item => {
        inclusionsList.innerHTML += `<li>${item}</li>`;
    });

    currentPackagePersons = 1;
    document.getElementById('quantity-display').textContent = currentPackagePersons;
    updatePackageTotalPrice();
    document.getElementById("book-package-btn").dataset.id = selectedPackage.id;

    packagesListView.style.display = 'none';
    packagesDetailView.style.display = 'block';
}
    const inclusionsList = document.getElementById("package-detail-inclusions");
    inclusionsList.innerHTML = "";
    pkg.inclusions.forEach(item => {
        inclusionsList.innerHTML += `<li>${item}</li>`;
    });

    packagesListView.style.display = 'none';
    packagesDetailView.style.display = 'block';


    function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        
        localStorage.setItem('theme', theme);
    });
}
