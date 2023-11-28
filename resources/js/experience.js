console.log("Experience javascript loaded");

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
    circle.addEventListener("click", function (event) {
        const content = circle.querySelector(".content");
        const contentOpacity = content.style.opacity;

        if (contentOpacity === "0" || contentOpacity === "") {
            content.style.opacity = "1";
        } else {
            content.style.opacity = "0";
        }
    });
});
