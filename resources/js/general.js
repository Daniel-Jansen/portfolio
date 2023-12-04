import "./bootstrap";

// Checks height of footer, changing the padding of the <main> content so footer always stays at bottom
new ResizeObserver(footerCorrection).observe(document.querySelector('footer'));

// DOM loads before resources
document.addEventListener("DOMContentLoaded", function () {
    // DOM is loaded here
    console.log("Page loaded");

    window.addEventListener("loa", function () {
        // Resources are loaded here
        console.log("All resources loaded");
        // Loading animation fade-out, fade-in main content
        finishedLoading();
        loadingJavascript();
        rocketAnimation();
        footerCorrection();
    });
});

function finishedLoading() {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Hide loadingScreen
    loadingScreen.classList.add("opacity-0");

    // After transition, remove loadingScreen and show mainContent
    loadingScreen.addEventListener("transitionend", () => {
        loadingScreen.classList.add("hidden");
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

    // Load JavaScript dynamically based on the URL
    loadScript(endpoint);
}

function rocketAnimation() {
    const rocket = document.getElementById("rocket");
    const rocketCords = rocket.getBoundingClientRect();
    console.log(rocketCords.top, rocketCords.right, rocketCords.bottom, rocketCords.left);

    function rocketStart() {
        console.log("Rocket started");
        rocket.classList.add("left-[-100px]");
        rocket.classList.remove("left-[110%]");
        rocket.classList.add("-rotate-90");
        rocket.classList.remove("rotate-90");
    }
    rocketStart();
}

function rocketChange() {
    const rocket = document.getElementById("rocket");
    rocket.classList.remove("-rotate-90");
    rocket.classList.add("rotate-90");
    rocket.classList.add("left-[110%]");
    rocket.classList.remove("left-[-100px]");
}

function rocketPosition() {
    const bodyHeight = document.body.clientHeight;
    const minHeight = 50;

    const randomHeight = Math.floor(Math.random() * (bodyHeight - minHeight)) + minHeight;

    document.querySelector('.rocket').style.top = randomHeight + 'px';
}

document.getElementById("rocketPositioningButton").addEventListener("click", rocketPosition)
document.getElementById("rocketStartButton").addEventListener("click", rocketAnimation)
document.getElementById("rocketChangeButton").addEventListener("click", rocketChange)

function footerCorrection() {
    // Gets the height of "footer"
    const footerHeight = document.querySelector('footer').offsetHeight;

    // Finds "main" to then change the paddingBottom style
    document.querySelector('main').style.paddingBottom = footerHeight + 'px';
}
