document.getElementById("generate").addEventListener("click", function() {
    let color = getRandomColor();
    document.getElementById("colorBox").style.backgroundColor = color;
    document.getElementById("colorCode").innerText = color;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
