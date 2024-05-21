// const divs = document.querySelectorAll("div");
const SIZE = 16;
const container = document.querySelector(".container");
let generateBoxes = (size) => {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 16; j++) {
            box = document.createElement("div");
            box.classList.add("box");
            // box.textContent = "hi";
            row.appendChild(box);
        }
        container.appendChild(row);
    }
};

generateBoxes(SIZE);


const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        // console.log("over");
        box.style.backgroundColor = "black"
    })
})

// divs.forEach((div) => {
//     div.addEventListener
// })