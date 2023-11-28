console.log("Home javascript loaded");
let hasWaved = false;

document
    .getElementById("main-content")
    .addEventListener("transitionend", (event) => {
        // Checks for opacity change specifically, otherwise loops
        if (!hasWaved && event.propertyName === "opacity") {
            handWave();
            hasWaved = true;
        }
    });

function handWave() {
    const handEmoticon = document.getElementById("hand-emoticon");
    let waveCount = 0;

    function wave() {
        if (waveCount < 2) {
            handEmoticon.classList.add("rotate-[25deg]", "-skew-x-6");
            setTimeout(() => {
                handEmoticon.classList.remove("rotate-[25deg]", "-skew-x-6");
                waveCount++;
                setTimeout(wave, 150);
            }, 150);
        }
    }
    wave();
}
