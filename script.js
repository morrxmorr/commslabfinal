// wait for things to load or else they don't render right
document.addEventListener('DOMContentLoaded', function () {
    // variables for scrolling stuff
    const background = document.getElementById('background');
    const sprite = document.getElementById('sprite');
    let bgX = -5000;
    let bgY = -300;
    const speed = 7;
    let keys = {};
    let buildings = [];

    //project links and all other links too (from 1-8 in order)
    const projectsLinks = [
        'https://morrxmorr.github.io/comms-lab/',
        'https://sohaila-abdulsattar-mohammed.github.io/The-NYUAD-Hunger-Quest/',
        'https://xiaotianfan.github.io/Kitchen-Chaos/',
        'https://sohaila-abdulsattar-mohammed.github.io/The-Fifth-Floor/',
        'https://instagram.com', // too embarassing for me to put my real socials for these 3
        'https://www.youtube.com/',
        'https://linkedin.com',
        'https://github.com/morrxmorr/' // here is my github :)
    ];

    //------------------INTERACTION ICONS---------------------

    //for the social media icons and embeds
    // arrway was used with basic info to keep track of what appears where and what visuals they were assigned
    const icons = [ 
        {
            id: 5, 
            width: 120,
            height: 120,
            x: 1550,
            y: 160,
            image: 'logo1.png'
        },
        {
            id: 6,
            width: 120,
            height: 120,
            x: 1400,
            y: 310,
            image: 'logo2.png'
        },
        {
            id: 7,
            width: 120,
            height: 120,
            x: 1700,  // Far right
            y: 310,   // Near top
            image: 'logo3.png'
        },
        {
            id: 8,
            width: 120,
            height: 120,
            x: 1550,    // Far left
            y: 460,  // Near bottom
            image: 'logo4.png'
        }
    ];

    //for the 4 main project portals
    //uses the same array 
 
    function createBuildings() {
        const buildingWidth = 250;
        const buildingHeight = 350;
        const gap = 150;
        const gridWidth = (buildingWidth * 2) + gap;
        const gridHeight = (buildingHeight * 2) + gap;
        const startX = (2000 - gridWidth) / 2 - 280;
        const startY = ((2000 - gridHeight) / 2) + 150;
    //the spacing for these was really confusing at the start so I got deepseek to help me,
    //afterwards I figured it out (as youll see for the text all over the website)
        for (let i = 0; i < 4; i++) {
            const building = document.createElement('img');
            building.className = 'building';
            const row = Math.floor(i / 2);
            const col = i % 2;
            //building data for each
            const buildingData = {
                element: building,
                id: i + 1,
                x: startX + (col * (buildingWidth + gap)),
                y: startY + (row * (buildingHeight + gap)),
                width: buildingWidth,
                height: buildingHeight,
                url: projectsLinks[i]
            };

            buildings.push(buildingData);

            // Setting building style
            building.style.width = buildingData.width + 'px';
            building.style.height = buildingData.height + 'px';
            building.style.left = buildingData.x + 'px';
            building.style.top = buildingData.y + 'px';

            building.src = `building${buildingData.id}.png`;

            background.appendChild(building);
        }

        icons.forEach(custom => {
            const building = document.createElement('img');
            building.className = 'building';

            const buildingData = {
                element: building,
                id: custom.id,
                x: custom.x,
                y: custom.y,
                width: custom.width,
                height: custom.height,
                url: projectsLinks[custom.id - 1]
            };

            buildings.push(buildingData);

            // set link 'buildings size + location
            building.style.width = custom.width + 'px';
            building.style.height = custom.height + 'px';
            building.style.left = custom.x + 'px';
            building.style.top = custom.y + 'px';
            building.src = custom.image;

            background.appendChild(building);
        });

        // -------------------TITLES AND SUBTITLES-----------------------
        //here are the titles and subtitles, any other text on the page (because of the scrolling)
        const title = document.createElement('img');
        title.src = 'title.png';
        title.className = 'scrolling-title main';
        background.appendChild(title);

        const subtitleImg = document.createElement('img');
        subtitleImg.src = 'subtitle.png';
        subtitleImg.className = 'scrolling-title sub';
        background.appendChild(subtitleImg);

        const subtitleImg2 = document.createElement('img');
        subtitleImg2.src = 'subtitle2.png';
        subtitleImg2.className = 'scrolling-title sub2';
        background.appendChild(subtitleImg2);

        const subtitleImg3 = document.createElement('img');
        subtitleImg3.src = 'subtitle3.png';
        subtitleImg3.className = 'scrolling-title sub3';
        background.appendChild(subtitleImg3);

        const subtitleImg4 = document.createElement('img');
        subtitleImg4.src = 'subtitle4.png';
        subtitleImg4.className = 'scrolling-title sub4';
        background.appendChild(subtitleImg4);

        const subtitleImg5 = document.createElement('img');
        subtitleImg5.src = 'subtitle5.png';
        subtitleImg5.className = 'scrolling-title sub5';
        background.appendChild(subtitleImg5);

        const subtitleImg6 = document.createElement('img');
        subtitleImg6.src = 'subtitle6.png';
        subtitleImg6.className = 'scrolling-title sub6';
        background.appendChild(subtitleImg6);

        const subtitleImg7 = document.createElement('img');
        subtitleImg7.src = 'subtitle7.png';
        subtitleImg7.className = 'scrolling-title sub7';
        background.appendChild(subtitleImg7);

        const subtitleImg8 = document.createElement('img');
        subtitleImg8.src = 'subtitle8.png';
        subtitleImg8.className = 'scrolling-title sub8';
        background.appendChild(subtitleImg8);

        const subtitleImg9 = document.createElement('img');
        subtitleImg9.src = 'subtitle9.png';
        subtitleImg9.className = 'scrolling-title sub9';
        background.appendChild(subtitleImg9);

        const subtitleImg10 = document.createElement('img');
        subtitleImg10.src = 'subtitle10.png';
        subtitleImg10.className = 'scrolling-title sub10';
        background.appendChild(subtitleImg10);

        const subtitleImg11 = document.createElement('img');
        subtitleImg11.src = 'subtitle11.png';
        subtitleImg11.className = 'scrolling-title sub11';
        background.appendChild(subtitleImg11);

    }


    function setInitialPosition() {
        // makes sure character starts in the middle of the map
        bgX = 0;
        bgY = 0;
        background.style.transform = `translate(${bgX}px, ${bgY}px)`;
        sprite.style.visibility = 'visible';
        sprite.style.display = 'block';
    }

    // check if sprite over elements
    // allows us to open links 
    function isOnBuilding() {
        const screenCenterX = window.innerWidth / 2;
        const screenCenterY = window.innerHeight / 2;


// more overlap detection 
        for (let i = 0; i < buildings.length; i++) {
            const building = buildings[i];
            const buildingScreenX = building.x + bgX;
            const buildingScreenY = building.y + bgY;
            if (screenCenterX >= buildingScreenX &&
                screenCenterX <= buildingScreenX + building.width &&
                screenCenterY >= buildingScreenY &&
                screenCenterY <= buildingScreenY + building.height) {
                return building.id; //links to id used in array that syncs up to the link
            }
        }

        return 0; //important to make sure it doesn't open up what it was last standing on
    }

    function checkBuildingHover() {
        const screenCenterX = window.innerWidth / 2;
        const screenCenterY = window.innerHeight / 2;

        // Remove hover from all buildings
        buildings.forEach(building => {
            building.element.classList.remove('hovered');
        });

        // Check if sprite is on any building
        for (let i = 0; i < buildings.length; i++) {
            const building = buildings[i];

            // Calculate building position on screen
            const buildingScreenX = building.x + bgX;
            const buildingScreenY = building.y + bgY;

            // Check if sprite center is inside building
            if (screenCenterX >= buildingScreenX &&
                screenCenterX <= buildingScreenX + building.width &&
                screenCenterY >= buildingScreenY &&
                screenCenterY <= buildingScreenY + building.height) {

                // Add hover to this building
                building.element.classList.add('hovered');
                break; // Stop checking once we find one
            }
        }
    }

    document.addEventListener('keydown', function (e) {
        if (e.key.startsWith('Arrow')) {
            keys[e.key] = true;

            // this was added to prevent diagonal movement as I felt that went against the retro arcade theme
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                keys['ArrowLeft'] = false;
                keys['ArrowRight'] = false;
            } else {
                keys['ArrowUp'] = false;
                keys['ArrowDown'] = false;
            }
        }

        // Check for Enter key on building
        if (e.key === 'Enter') {
            const buildingId = isOnBuilding();
            if (buildingId > 0) {
                //update building no.
                const building = buildings[buildingId - 1];

                if (building && building.url) {
                    window.open(building.url, '_blank');
                }
            }
        }

        e.preventDefault();
    });

    document.addEventListener('keyup', function (e) {
        if (e.key.startsWith('Arrow')) {
            keys[e.key] = false;
        }
        e.preventDefault();
    });

    // main loop
    function update() {
        let moved = false;

        // keys change bgX/bgY to make screen elements move relative to sprite
        if (keys['ArrowUp']) {
            bgY += speed;
            moved = true;
        }
        if (keys['ArrowDown']) {
            bgY -= speed;
            moved = true;
        }
        if (keys['ArrowLeft']) {
            bgX += speed;
            moved = true;
        }
        if (keys['ArrowRight']) {
            bgX -= speed;
            moved = true;
        }

        // update background
        if (moved) {
            background.style.transform = `translate(${bgX}px, ${bgY}px)`;
        }

        requestAnimationFrame(update);
        checkBuildingHover();
    }

    // before I added this the window resize messed everything up
    window.addEventListener('resize', function () {
        // make sure sprite stays in middle
        sprite.style.top = '50%';
        sprite.style.left = '50%';
        sprite.style.transform = 'translate(-50%, -50%)';
    });

    // initializeee
    createBuildings();
    setInitialPosition();
    update();
});
