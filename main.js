let container = document.querySelector("#container");
let colorInput = document.querySelector("#color-input");

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return "rgb(" + color.join(", ") + ")";
}

function createSquareGrid(amount) {
    for (let i = 0; i < amount; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.classList.add("squareClass");
        newDiv.id = "squareid";
        newDiv.style.minWidth = "25px";
        newDiv.style.minHeight = "25px";
        newDiv.style.backgroundColor = "#fff";

        newDiv.addEventListener("mousedown", () => {
            newDiv.style.backgroundColor = colorInput.value;

            // Add event listener to the entire document
            document.addEventListener("mousemove", colorSquare);
        });

        newDiv.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", colorSquare);
        });
}

    // Function to check if mouse is within grid bounds
function isMouseWithinGridBounds(e) {
        const gridBounds = container.getBoundingClientRect();
        return e.clientX >= gridBounds.left && e.clientX <= gridBounds.right && e.clientY >= gridBounds.top && e.clientY <= gridBounds.bottom;
}

    // Function to color the square when the mouse is moved within the grid bounds
function colorSquare(e) {
        if (!isMouseWithinGridBounds(e)) {
            document.removeEventListener("mousemove", colorSquare);
            return;
        }
        
        let square = e.target;
        square.style.backgroundColor = colorInput.value;
    }
}


function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function createNewGrid () {
    removeElementsByClass("squareClass");
    let userInput = window.prompt("Enter your new grid space (min 0, max is 100 making 100x100. Rounds down to the nearest number. Don't forget to zoom out if the canvas isn't big enough");
    let roundedInput = Math.floor(userInput);

    if (roundedInput <= 100 && roundedInput >= 1) {
        createSquareGrid(roundedInput * roundedInput);
        container.style.gridTemplateColumns = `repeat(${roundedInput}, 1fr`;
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