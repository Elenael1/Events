addEventListener('keydown', onKeyDown)

function onKeyDown(e) {
    if (e.code === "Escape") {
        console.log("I pressed Escape");
        document.body.style.backgroundColor = "#420042"
    }

    if ((e.altKey || e.ControlLeft) & (e.code === "KeyS")) {
        document.body.style.backgroundColor = "#303030"
    }
}

addEventListener('keyup', onKeyUp)

function onKeyUp(e) {
    if ((e.altKey || e.ControlLeft) & (e.code === "KeyS")) {
        document.body.style.backgroundColor = "#ffffff"
    }

}