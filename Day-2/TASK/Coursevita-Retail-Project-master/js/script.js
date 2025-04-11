function zoomIn(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s ease";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.3s ease";
}
