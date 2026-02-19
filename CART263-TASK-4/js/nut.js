class nut {
    constructor(x, y, size,nutColor) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.nutColor = nutColor;
    }
    renderNut() {
        //nut - IN the sky
        this.nutDiv.classList.add("nut");
        this.nutDiv.style.background = `rgb(${this.nutColor.r},${this.nutColor.g},${this.nutColor.b})`;
        //append to the SKY div
        document.querySelector(".sky").appendChild(this.nutDiv);
    }
}