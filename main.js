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

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function createNewGrid () {
    removeElementsByClass("square");
    let userInput = window.prompt("Enter your new grid space (min 0, max is 100 making 100x100. Rounds down to the nearest number.");
    let roundedInput = Math.floor(userInput);

    if (roundedInput <= 100 && roundedInput >= 1) {
        createSquareGrid(roundedInput);
    } else {
        return alert("Error! Invalid input!");
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