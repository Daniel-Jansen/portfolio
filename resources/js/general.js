import './bootstrap';

//DOM loads before resources
document.addEventListener('DOMContentLoaded', function() {
    // DOM is loaded here
    console.log('Page loaded');

    window.addEventListener('load', function() {
        // Resources are loaded here
        console.log('All resources loaded');
        // Loading animation fade-out, fade-in main content
        finishedLoading();
        loadingJavascript();
    });
});

function finishedLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    //hide loadingScreen
    loadingScreen.classList.add('opacity-0');

    //after transition, remove loadingScreen and show mainContent
    loadingScreen.addEventListener('transitionend', () => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.remove('max-h-screen', 'overflow-hidden', 'opacity-0');
    })
}

function loadingJavascript() {
    // Gets URL, removing anything before the '/' at the end
    const url = window.location.href;
    const urlParts = url.split('/');
    const endpoint = urlParts[urlParts.length - 1];

    // Load JavaScript file based on last part of URL
    function loadScript(endpoint) {
    const script = document.createElement('script');
    script.src = `http://localhost:5173/resources/js/${endpoint}.js`;
    document.head.appendChild(script);
    }

    // Load JavaScript dynamically based on the URL
    loadScript(endpoint);
}