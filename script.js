document.addEventListener('DOMContentLoaded', () => {

    // --- Data Store (Simulates a Database) ---
    const locationData = {
        downtown: {
            name: "Downtown Location",
            address: "123 Main St, Metropolitan City, 10101",
            hours: "Mon-Sat: 5pm - 11pm | Sun: Closed",
            menu: {
                appetizers: [
                    { name: "Oysters Rockefeller", price: "$18", desc: "Half dozen baked with spinach and hollandaise" },
                    { name: "Steak Tartare", price: "$22", desc: "Hand-cut tenderloin with quail egg and crostini" }
                ],
                steaks: [
                    { name: "Filet Mignon (8oz)", price: "$55", desc: "Center-cut, buttery tender" },
                    { name: "Bone-In Ribeye (20oz)", price: "$85", desc: "Dry-aged 28 days for maximum flavor" },
                    { name: "Porterhouse for Two (40oz)", price: "$150", desc: "The ultimate sharing experience" }
                ]
            },
            events: [
                { title: "Wine Maker's Dinner", date: "First Thursday of the month", desc: "A curated 5-course meal with exclusive pairings." },
                { title: "Jazz Night", date: "Every Saturday 9pm - 11pm", desc: "Live smooth jazz in our lounge." }
            ]
        },
        uptown: {
            name: "Uptown Location",
            address: "456 Luxury Ave, Metropolitan City, 10202",
            hours: "Tue-Sun: 5pm - 12am | Mon: Closed",
            menu: {
                appetizers: [
                    { name: "Burrata & Prosciutto", price: "$20", desc: "Fresh burrata with 24-month aged prosciutto" },
                    { name: "Lobster Bisque", price: "$16", desc: "Creamy, rich, with a hint of brandy" }
                ],
                steaks: [
                    { name: "New York Strip (12oz)", price: "$60", desc: "Classic cut, bold flavor, perfect marbling" },
                    { name: "Wagyu Sirloin (10oz)", price: "$120", desc: "A5 Japanese Wagyu, an unforgettable experience" },
                    { name: "T-Bone (24oz)", price: "$95", desc: "For those who can't decide between strip and filet" }
                ]
            },
            events: [
                { title: "Chef's Table Experience", date: "By reservation only", desc: "An exclusive tasting menu directly from our head chef." },
                { title: "Whiskey Tasting", date: "Third Wednesday of the month", desc: "Explore rare and fine whiskeys from around the world." }
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

        // Update Info
        infoDisplay.innerHTML = `
            <h3>${data.name}</h3>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>Hours:</strong> ${data.hours}</p>
        `;

        // Update Menu
        let menuHTML = '<h2>Our Menu</h2><div class="menu-grid">';
        for (const category in data.menu) {
            menuHTML += `
                <div class="menu-card">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    ${data.menu[category].map(item => `
                        <div class="menu-item">
                            <h4>${item.name} <span>${item.price}</span></h4>
                            <p>${item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        menuHTML += '</div>';
        menuDisplay.innerHTML = menuHTML;

        // Update Events
        let eventsHTML = '<h2>Events & Specials</h2>';
        data.events.forEach(event => {
            eventsHTML += `
                <div class="event-card">
                    <h3>${event.title}</h3>
                    <p><strong>${event.date}</strong></p>
                    <p>${event.desc}</p>
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