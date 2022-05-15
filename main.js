let container = document.querySelector("#container");



function createSquareGrid (amount) {
    for (let i = 0; i < amount; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add("square");
        newDiv.style.minWidth ="25px";
        newDiv.style.minHeight="25px";
        newDiv.style.border = "1px solid black"; // for reference
        newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = "black");
    }
}

function callNewGridBtn() {
    let createGridBtn = document.createElement("button");
    createGridBtn.classList.add("newGridBtn")
    createGridBtn.innerText = "Create new grid";
    document.body.insertBefore(createGridBtn, container);
}

callNewGridBtn();
createSquareGrid(16 * 16);