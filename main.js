let container = document.querySelector("#container");

function createSquareGrid (amount) {
    for (let i = 0; i < amount; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add("square");
        newDiv.innerText = "temp text";
        newDiv.style.border = "2px solid black"; // for reference
    }
}

createSquareGrid(16 * 16);