console.log("Experience javascript loaded");

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
    circle.addEventListener("click", function (event) {
        const content = circle.querySelector(".content");
        const contentOpacity = content.style.opacity;

        if (contentOpacity === "0" || contentOpacity === "") {
            content.style.opacity = "1";
            content.style.cursor = "auto"
        } else {
            content.style.opacity = "0";
            content.style.cursor = "default"
        }
    });

    circle.querySelector('.content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
