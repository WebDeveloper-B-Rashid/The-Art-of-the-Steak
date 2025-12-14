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
                    { name: "Oysters Rockefeller", price: "$18", desc: "Half dozen baked with spinach and hollandaise", image: "https://i.ytimg.com/vi/75Nn0_btUTo/maxresdefault.jpg" },
                    { name: "Steak Tartare", price: "$22", desc: "Hand-cut tenderloin with quail egg and crostini", image: "https://insaneinthebrine.com/wp-content/uploads/2023/02/tartare-main.jpg" },
                    { name: "Burrata & Prosciutto", price: "$20", desc: "Fresh burrata with 24-month aged prosciutto", image: "https://rankiq-prod.s3.us-east-2.amazonaws.com/fd585e68-7f4f-4037-9da5-8c0673b4b870" }
                ],
                steaks: [
                    { name: "Filet Mignon (8oz)", price: "$55", desc: "Center-cut, buttery tender", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMc-FvKmPWv2MmnnZ2MBK8lrmiddxo-pMzw&s" },
                    { name: "Bone-In Ribeye (20oz)", price: "$85", desc: "Dry-aged 28 days for maximum flavor", image: "https://shop.creekstonefarms.com/cdn/shop/files/24_WSC_Cowboy_Shop_1500_x_1000_px.png?v=1736442440" },
                    { name: "Porterhouse for Two (40oz)", price: "$150", desc: "The ultimate sharing experience", image: "https://chowfancy.com/wp-content/uploads/2015/06/img_8155.jpg" },
                    { name: "New York Strip (12oz)", price: "$60", desc: "Classic cut, bold flavor, perfect marbling", image: "https://www.wholesomeyum.com/wp-content/uploads/2023/08/wholesomeyum-New-York-Strip-Steak-14.jpg" },
                    { name: "T-Bone (24oz)", price: "$95", desc: "For those who can't decide between strip and filet", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0zwwQpwkSigDWk-XzUra3_fr6AFEG0IKSQ&s" }
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
                    { name: "Lobster Bisque", price: "$16", desc: "Creamy, rich, with a hint of brandy", image: "https://www.africanbites.com/wp-content/uploads/2018/02/IMG_0866-500x500.jpg" },
                    { name: "Scallops", price: "$24", desc: "Pan-seared with a cauliflower purée", image: "https://cdn.sanity.io/images/2t27tguw/production/2556b41c637cb714b348084f5394092ca470d7b2-515x439.jpg?w=3840&auto=format" },
                    { name: "Foie Gras", price: "$28", desc: "Classic seared foie gras with brioche", image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Foie_gras_en_cocotte.jpg" }
                ],
                steaks: [
                    { name: "Wagyu Sirloin (10oz)", price: "$120", desc: "A5 Japanese Wagyu, an unforgettable experience", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomVUa6EoBw-IyhZaGDbHz2Hbxz8TQ0Orw6g&s" },
                    { name: "Tomahawk Ribeye (38oz)", price: "$135", desc: "A dramatic and flavorful cut for sharing", image: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/482049657_665260786059196_1503792153291938085_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2PYJF04wB9YdoGwVudTY_50f-Bz_GCaznR_4HP8YJrMryxVQdNdqCfh4AkttGDH_hY2KRJJ0mmTLyvEpu24cZ&_nc_ohc=OUrsCH29UqsQ7kNvwHb4kJe&_nc_oc=Adkx_xATaXaAr5R3Cw9J8IDoj5hBFLlMh_4Qwy5j7xPVRTQ0qiHzxWNzzwawiudxjAc&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=6Gq-dtBBMkZP6WN3stBSEA&oh=00_AfmrJaFyEa_3IAw6yHRn6ma5dsmyysjuUT_MSFSDNZLokg&oe=6944BA34" },
                    { name: "Dry-Aged Strip (14oz)", price: "$75", desc: "Intensely flavorful and tender", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyL-aS0LQgN1jy7NlIFWrWQ5SQtofI_5PN8Q&s" },
                    { name: "Filet Mignon (10oz)", price: "$65", desc: "Our signature cut, now larger", image: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/mcjpbwuk/da5b59d7-63dc-4722-857a-3a84ef7ac1cd.jpg" },
                    { name: "Cowboy Ribeye (26oz)", price: "$95", desc: "A bone-in ribeye with a rich, beefy flavor", image: "https://doublejcuts.com/wp-content/uploads/2014/12/Renderings.psd_0006_cowboy.png" }
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
                    { name: "Tuna Tartare", price: "$21", desc: "Fresh ahi tuna with avocado and wonton crisps", image: "https://www.twopurplefigs.com/wp-content/uploads/2022/04/Tuna-Tartare-17-500x500.jpg" },
                    { name: "Calamari", price:           "$18", desc: "Crispy fried with spicy marinara", image: "https://sealandqualityfoods.com/cdn/shop/articles/20230614185559-sealand-breaded-calamari-with-homemade-sauces_a2938c71-f0b4-4fc9-8f1d-b9600b4fa9d8-4453184.jpg?v=1751333104&width=1600" },
                    { name: "Shrimp Cocktail", price: "$19", desc: "Jumbo shrimp with our signature cocktail sauce", image: "https://twokooksinthekitchen.com/wp-content/uploads/2021/09/IMG_8391-5.jpg" }
                ],
                steaks: [
                    { name: "Surf & Turf", price: "$95", desc: "A 6oz filet mignon paired with lobster tail", image: "https://www.allrecipes.com/thmb/3kYcOk_B0llE0PdIDrENsLM_Hss=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/233259-surf-and-turf-for-two-VAT-012-step-08-01ab338f01ba486d9790a6e9958271df.jpg" },
                    { name: "Grilled Salmon", price: "$32", desc: "Atlantic salmon with a lemon-dill sauce", image: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/41765-sfs-grilled-salmon-10664" },
                    { name: "Prime Rib (10oz)", price: "$58", desc: "Slow-roasted and served with au jus", image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/d7/5a/f3/prime-rib-10oz.jpg" },
                    { name: "Skirt Steak", price: "$48", desc: "Marinated and grilled to perfection", image: "https://media.istockphoto.com/id/545373166/photo/homemade-cooked-skirt-steak-with-chimichurri.jpg?s=612x612&w=0&k=20&c=9z4_hhknorHOTsTpUQ0WmJaZLa-7PnD1fzF8qnEWFNg=" },
                    { name: "Ribeye (14oz)", price: "$72", desc: "Rich, juicy, and full of flavor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWUChIpCs5jLoh5f85hOFJgx7SD0yu9tIQg&s" }
                ]
            },
            events: [
                { title: "Sunset Dinner Cruise", date: "Every evening (weather permitting)", desc: "Book a table for a sunset view like no other.", image: "https://media.gettyimages.com/id/1318757180/photo/wat-arun-temple-at-sunset-in-bangkok-thailand-wat-arun-is-a-buddhist-temple-in-bangkok-yai.jpg?s=612x612&w=0&k=20&c=FRLEm7lvOHp6qFMAutUUH8WXPn-eNRk8fDMvzOmiks4=" },
                { title: "Seafood Boil Sunday", date: "Sundays 5pm - 9pm", desc: "All-you-can-eat seafood boil with corn and potatoes.", image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-05-Seafood-Boil%2FSeafood_Boil-4_828c6d_landscape" },
                { title: "Acoustic Duo", date: "Wednesday & Thursday 7pm - 9pm", desc: "Relax with live acoustic music.", image: "https://images.squarespace-cdn.com/content/v1/64d6c828b2f325097bb510a9/7e268d8b-bc98-4b91-8364-57f170a23254/FF22+Saturday+night+banquet+Hayley+Skousen+Pablo+Aragona+acoustic+music+7+smiling.jpg" },
                { title: "Mixology Masterclass", date: "First Monday of the month", desc: "Learn to craft classic cocktails with our head bartender.", image: "https://images.squarespace-cdn.com/content/v1/636f5dbfab8c8b1d03cfa462/1704882653762-LV6TWFIH4IW1NKNOXEX3/Mojo+July21+0166.jpg" }
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