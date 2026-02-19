class Nut {
    constructor(x, y, size, nutColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.nutColor = nutColor;
    }
    renderNut() {
        // create an <img> element to render the nut image
        let nutImg = document.createElement("img");
        nutImg.classList.add("nut");
        // path relative to index.html
        nutImg.src = "img/nut.svg";
        nutImg.style.width = this.size + "px";
        nutImg.style.height = this.size + "px";
        nutImg.style.position = "absolute";
        nutImg.style.left = this.x + "px";
        nutImg.style.top = this.y + "px";
        document.getElementsByClassName("grass")[0].appendChild(nutImg);
    }
}