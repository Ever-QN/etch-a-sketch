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

function createNewGrid () {
    let userInput = window.prompt("Enter your new grid space (max is 100, making 100x100, min 1)");
    
    if (userInput <= Math.floor(100) && userInput >= Math.floor(1)) {

    } else {
        return "Error! Invalid input!";
    }
}

function callNewGridBtn() {
    let createGridBtn = document.createElement("button");
    createGridBtn.classList.add("newGridBtn")
    createGridBtn.innerText = "Create new grid";
    document.body.insertBefore(createGridBtn, container);
    createGridBtn.addEventListener("click", createNewGrid)
}

callNewGridBtn();
createSquareGrid(16 * 16);