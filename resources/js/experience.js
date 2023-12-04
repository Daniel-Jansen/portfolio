console.log("Experience javascript loaded");

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
    circle.addEventListener("click", function (event) {
        const content = circle.querySelector(".content");
        const bar = circle.querySelector(".bar");
        const contentOpacity = content.style.opacity;

        if (contentOpacity === "0" || contentOpacity === "") {
            content.style.opacity = "1";
            content.classList.remove("select-none", "cursor-default");
            circle.classList.add("w-16", "h-16");
            bar.classList.add("min-h-[12rem]");
        } else {
            content.style.opacity = "0";
            content.classList.add("select-none", "cursor-default");
            circle.classList.remove("w-16", "h-16");
            bar.classList.remove("min-h-[12rem]");
        }
    });

    circle.querySelector('.content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
