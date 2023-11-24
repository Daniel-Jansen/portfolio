import './bootstrap';

//DOM loads before resources
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');

    window.addEventListener('load', function() {
        console.log('All resources loaded');
        finishedLoading();
    });
});

function finishedLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    console.log('loaded')
    loadingScreen.classList.add('opacity-0');
    console.log('transitioning...')
    loadingScreen.addEventListener('transitionend', () => {
        console.log('transitioned')
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.remove('opacity-0');
        mainContent.classList.add('opacity-100');
    })
}