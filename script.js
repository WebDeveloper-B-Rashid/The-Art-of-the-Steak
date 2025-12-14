document.addEventListener('DOMContentLoaded', () => {

    // --- Data Store (Simulates a Database) ---
    const locationData = {
        downtown: {
            name: "Downtown Location",
            address: "123 Main St, Metropolitan City, 10101",
            hours: "Mon-Sat: 5pm - 11pm | Sun: Closed",
            locationImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
            menu: {
                appetizers: [
                    { name: "Oysters Rockefeller", price: "$18", desc: "Half dozen baked with spinach and hollandaise", image: "https://picsum.photos/seed/oysters/80/80.jpg" },
                    { name: "Steak Tartare", price: "$22", desc: "Hand-cut tenderloin with quail egg and crostini", image: "https://picsum.photos/seed/tartare/80/80.jpg" },
                    { name: "Burrata & Prosciutto", price: "$20", desc: "Fresh burrata with 24-month aged prosciutto", image: "https://picsum.photos/seed/burrata/80/80.jpg" }
                ],
                steaks: [
                    { name: "Filet Mignon (8oz)", price: "$55", desc: "Center-cut, buttery tender", image: "https://picsum.photos/seed/filet/80/80.jpg" },
                    { name: "Bone-In Ribeye (20oz)", price: "$85", desc: "Dry-aged 28 days for maximum flavor", image: "https://picsum.photos/seed/ribeye/80/80.jpg" },
                    { name: "Porterhouse for Two (40oz)", price: "$150", desc: "The ultimate sharing experience", image: "https://picsum.photos/seed/porterhouse/80/80.jpg" },
                    { name: "New York Strip (12oz)", price: "$60", desc: "Classic cut, bold flavor, perfect marbling", image: "https://picsum.photos/seed/strip/80/80.jpg" },
                    { name: "T-Bone (24oz)", price: "$95", desc: "For those who can't decide between strip and filet", image: "https://picsum.photos/seed/tbone/80/80.jpg" }
                ]
            },
            events: [
                { title: "Wine Maker's Dinner", date: "First Thursday of the month", desc: "A curated 5-course meal with exclusive pairings.", image: "https://picsum.photos/seed/wine/400/200.jpg" },
                { title: "Jazz Night", date: "Every Saturday 9pm - 11pm", desc: "Live smooth jazz in our lounge.", image: "https://picsum.photos/seed/jazz/400/200.jpg" },
                { title: "Chef's Table Experience", date: "By reservation only", desc: "An exclusive tasting menu directly from our head chef.", image: "https://picsum.photos/seed/chefstable/400/200.jpg" },
                { title: "Whiskey Tasting", date: "Third Wednesday of the month", desc: "Explore rare and fine whiskeys from around the world.", image: "https://picsum.photos/seed/whiskey/400/200.jpg" }
            ]
        },
        uptown: {
            name: "Uptown Location",
            address: "456 Luxury Ave, Metropolitan City, 10202",
            hours: "Tue-Sun: 5pm - 12am | Mon: Closed",
            locationImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
            menu: {
                appetizers: [
                    { name: "Lobster Bisque", price: "$16", desc: "Creamy, rich, with a hint of brandy", image: "https://picsum.photos/seed/bisque/80/80.jpg" },
                    { name: "Scallops", price: "$24", desc: "Pan-seared with a cauliflower purée", image: "https://picsum.photos/seed/scallops/80/80.jpg" },
                    { name: "Foie Gras", price: "$28", desc: "Classic seared foie gras with brioche", image: "https://picsum.photos/seed/foiegras/80/80.jpg" }
                ],
                steaks: [
                    { name: "Wagyu Sirloin (10oz)", price: "$120", desc: "A5 Japanese Wagyu, an unforgettable experience", image: "https://picsum.photos/seed/wagyusirloin/80/80.jpg" },
                    { name: "Tomahawk Ribeye (38oz)", price: "$135", desc: "A dramatic and flavorful cut for sharing", image: "https://picsum.photos/seed/tomahawk/80/80.jpg" },
                    { name: "Dry-Aged Strip (14oz)", price: "$75", desc: "Intensely flavorful and tender", image: "https://picsum.photos/seed/drystrip/80/80.jpg" },
                    { name: "Filet Mignon (10oz)", price: "$65", desc: "Our signature cut, now larger", image: "https://picsum.photos/seed/filet2/80/80.jpg" },
                    { name: "Cowboy Ribeye (26oz)", price: "$95", desc: "A bone-in ribeye with a rich, beefy flavor", image: "https://picsum.photos/seed/cowboy/80/80.jpg" }
                ]
            },
            events: [
                { title: "Vegan Tasting Night", date: "Last Tuesday of the month", desc: "A surprising and delicious plant-based menu.", image: "https://picsum.photos/seed/vegan/400/200.jpg" },
                { title: "Live Blues Night", date: "Every Friday 10pm - Midnight", desc: "Soulful blues to accompany your dinner.", image: "https://picsum.photos/seed/blues/400/200.jpg" },
                { title: "Cigar & Spirits Evening", date: "Second Saturday of the month", desc: "An evening of fine cigars and aged spirits on our patio.", image: "https://picsum.photos/seed/cigar/400/200.jpg" },
                { title: "Anniversary Special", date: "All of February", desc: "Celebrate our anniversary with a special menu and a glass of champagne.", image: "https://picsum.photos/seed/anniversary/400/200.jpg" }
            ]
        },
        waterfront: {
            name: "Waterfront Location",
            address: "789 Harbor View Dr, Metropolitan City, 10303",
            hours: "Daily: 4pm - 11pm",
            locationImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop",
            menu: {
                appetizers: [
                    { name: "Tuna Tartare", price: "$21", desc: "Fresh ahi tuna with avocado and wonton crisps", image: "https://picsum.photos/seed/tuna/80/80.jpg" },
                    { name: "Calamari", price: "$18", desc: "Crispy fried with spicy marinara", image: "https://picsum.photos/seed/calamari/80/80.jpg" },
                    { name: "Shrimp Cocktail", price: "$19", desc: "Jumbo shrimp with our signature cocktail sauce", image: "https://picsum.photos/seed/shrimp/80/80.jpg" }
                ],
                steaks: [
                    { name: "Surf & Turf", price: "$95", desc: "A 6oz filet mignon paired with lobster tail", image: "https://picsum.photos/seed/surfturf/80/80.jpg" },
                    { name: "Grilled Salmon", price: "$32", desc: "Atlantic salmon with a lemon-dill sauce", image: "https://picsum.photos/seed/salmon/80/80.jpg" },
                    { name: "Prime Rib (10oz)", price: "$58", desc: "Slow-roasted and served with au jus", image: "https://picsum.photos/seed/primerib/80/80.jpg" },
                    { name: "Skirt Steak", price: "$48", desc: "Marinated and grilled to perfection", image: "https://picsum.photos/seed/skirt/80/80.jpg" },
                    { name: "Ribeye (14oz)", price: "$72", desc: "Rich, juicy, and full of flavor", image: "https://picsum.photos/seed/ribeye2/80/80.jpg" }
                ]
            },
            events: [
                { title: "Sunset Dinner Cruise", date: "Every evening (weather permitting)", desc: "Book a table for a sunset view like no other.", image: "https://picsum.photos/seed/sunset/400/200.jpg" },
                { title: "Seafood Boil Sunday", date: "Sundays 5pm - 9pm", desc: "All-you-can-eat seafood boil with corn and potatoes.", image: "https://picsum.photos/seed/boil/400/200.jpg" },
                { title: "Acoustic Duo", date: "Wednesday & Thursday 7pm - 9pm", desc: "Relax with live acoustic music.", image: "https://picsum.photos/seed/acoustic/400/200.jpg" },
                { title: "Mixology Masterclass", date: "First Monday of the month", desc: "Learn to craft classic cocktails with our head bartender.", image: "https://picsum.photos/seed/mixology/400/200.jpg" }
            ]
        }
    };

    // --- DOM Elements ---
    const locationButtons = document.querySelectorAll('.btn-location');
    const infoDisplay = document.getElementById('info-display');
    const menuDisplay = document.getElementById('menu-display');
    const eventsDisplay = document.getElementById('events-display');
    const modal = document.getElementById('reservation-modal');
    const reserveBtns = document.querySelectorAll('#reserve-btn-top, #reserve-btn-hero');
    const closeBtn = document.querySelector('.close-btn');
    const reservationForm = document.getElementById('reservation-form');
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    // --- Functions ---
    function updateLocation(locationId) {
        const data = locationData[locationId];
        if (!data) return;

        // Update active button
        locationButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-location="${locationId}"]`).classList.add('active');

        // Update Info with Image
        infoDisplay.innerHTML = `
            <img src="${data.locationImage}" alt="${data.name}">
            <h3>${data.name}</h3>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>Hours:</strong> ${data.hours}</p>
        `;

        // Update Menu with Images
        let menuHTML = '<h2>Our Menu</h2><div class="menu-grid">';
        for (const category in data.menu) {
            menuHTML += `
                <div class="menu-card">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    ${data.menu[category].map(item => `
                        <div class="menu-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="menu-item-content">
                                <h4>${item.name} <span>${item.price}</span></h4>
                                <p>${item.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        menuHTML += '</div>';
        menuDisplay.innerHTML = menuHTML;

        // Update Events with Images
        let eventsHTML = '<h2>Events & Specials</h2>';
        data.events.forEach(event => {
            eventsHTML += `
                <div class="event-card">
                    <img src="${event.image}" alt="${event.title}">
                    <div class="event-card-content">
                        <h3>${event.title}</h3>
                        <p><strong>${event.date}</strong></p>
                        <p>${event.desc}</p>
                    </div>
                </div>
            `;
        });
        eventsDisplay.innerHTML = eventsHTML;
    }

    function openModal() { modal.style.display = 'flex'; }
    function closeModal() { modal.style.display = 'none'; }

    // --- Event Listeners ---
    locationButtons.forEach(button => {
        button.addEventListener('click', () => {
            updateLocation(button.dataset.location);
        });
    });

    reserveBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your reservation request! We will contact you shortly to confirm.');
        closeModal();
        reservationForm.reset();
    });

    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // --- Initial Load ---
    updateLocation('downtown');
});