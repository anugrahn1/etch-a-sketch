// const divs = document.querySelectorAll("div");
let SIZE = 16;
const container = document.querySelector(".container");


let generateBoxes = (size) => {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const dimensions = 800/size ;
            box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${dimensions}px`;
            box.style.height = `${dimensions}px`;
            row.appendChild(box);
        }
        container.appendChild(row);
    }

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            // console.log("over");
            box.style.backgroundColor = "black"
        })
    })
};

let clearBoxes = () => {
    const container = document.querySelector(".container");

    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

}

generateBoxes(SIZE);

const submit = document.querySelector(".submit");
const userSize = document.querySelector(".size");

submit.addEventListener("click", () => {
    
    SIZE = userSize.value;
    if (SIZE > 100 || SIZE < 1){
        return
    }
    console.log(SIZE);
    clearBoxes();
    generateBoxes(SIZE);
})



