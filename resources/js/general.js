import "./bootstrap";

// Remove screen about if JavaScript can't be loaded
const noScript = document.getElementById("nojavascript");
noScript.parentNode.removeChild(noScript);

// Checks height of footer, changing the padding of the <main> content so footer always stays at bottom
new ResizeObserver(footerCorrection).observe(document.querySelector("footer"));

// DOM loads before resources
document.addEventListener("DOMContentLoaded", function () {
    // DOM is loaded here
    console.log("DOM loaded");

    window.addEventListener("load", function () {
        // Resources are loaded here
        console.log("All resources loaded");
        // Activates all functions after resources have been loaded
        finishedLoading();
        loadingJavascript();
        rocketAnimation();
        footerCorrection();
    });
});

function finishedLoading() {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Animation of hiding loadingScreen
    loadingScreen.classList.add("opacity-0");

    // After transition, completely remove loadingScreen and show mainContent
    loadingScreen.addEventListener("transitionend", () => {
        loadingScreen.parentNode.removeChild(loadingScreen);
        mainContent.classList.remove(
            "max-h-screen",
            "overflow-hidden",
            "opacity-0"
        );
    });
}

function loadingJavascript() {
    // Gets URL, removing anything before the '/' at the end
    const url = window.location.href;
    const urlParts = url.split("/");
    const endpoint = urlParts[urlParts.length - 1];

    // Load JavaScript file based on last part of URL
    function loadScript(endpoint) {
        const script = document.createElement("script");
        script.src = `http://localhost:5173/resources/js/${endpoint}.js`;
        document.head.appendChild(script);
    }

    // Activate function to load JavaScript dynamically based on the URL
    loadScript(endpoint);
}

function rocketAnimation() {
    // Gets needed information
    const headerContent = document.querySelector("header");
    const mainContent = document.getElementById("main-content");
    const rocket = document.getElementById("rocket");
    let moveRight = true;

    // Function that moves rocket left or right depending on boolean
    function rocketMove() {
        if (moveRight) {
            rocket.style.left = "calc(100vw + 100px)";
            rocket.style.transform = "rotate(90deg)";
        } else {
            rocket.style.left = "-100px";
            rocket.style.transform = "rotate(-90deg)";
        }

        // Resets boolean
        moveRight = !moveRight;
        // Starts Position functions
        rocketPosition();
    }

    // Function that randomly moves rocket up or down
    function rocketPosition() {
        // Gets height from header + main content and randomly picks px amount
        const headerHeight = headerContent.offsetHeight;
        const mainHeight = mainContent.clientHeight - headerHeight;
        const randomHeight =
            Math.floor(Math.random() * mainHeight) + headerHeight;
        rocket.style.top = randomHeight + "px";
    }

    function rocketStart() {
        // After amount of ms activate Animation again
        setInterval(rocketMove, 11000);
    }

    // Activates the move animation instantly
    rocketMove();
    // Activates the animation loop
    rocketStart();
}

// Unused ChatGPT loading animation of "loading..." but the dots are replaced with planets (not used because too slow)
// function loadingAnimation() {
//     const planets = document.querySelectorAll('.planet');
//     let currentIndex = 0;

//     function showNextPlanet() {
//         planets.forEach((planet, index) => {
//             if (
//                 index === currentIndex ||
//                 index === (currentIndex + 1) % planets.length ||
//                 index === (currentIndex + 2) % planets.length
//             ) {
//                 planet.style.display = 'block';
//             } else {
//                 planet.style.display = 'none';
//             }
//         });

//         currentIndex = (currentIndex + 1) % planets.length; // Move to the next planet in the sequence

//         setTimeout(showNextPlanet, 500); // Change planet every 1 second (adjust timing as needed)
//     }

//     // Start the animation
//     showNextPlanet();
// }

function footerCorrection() {
    // Gets the height of "footer"
    const footerHeight = document.querySelector("footer").offsetHeight;

    // Finds "main" to then change the paddingBottom style according to footerHeight
    document.querySelector("main").style.paddingBottom = footerHeight + "px";
}
