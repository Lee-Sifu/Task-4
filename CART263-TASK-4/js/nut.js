class Nut {
    constructor(x, y, size,) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.active = true;
        this.element = null;
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
         nutImg.style.transition = "opacity 0.3s ease";
        document.getElementsByClassName("grass")[0].appendChild(nutImg);
        this.element = nutImg;
    }
     pickup() {
        if (!this.active) return; 
        this.active = false;

        if (this.element) {
            // Fade out visually before removing
            this.element.style.opacity = "0";
            setTimeout(() => {
                if (this.element && this.element.parentNode) {
                    this.element.parentNode.removeChild(this.element);
                }
                this.element = null;
            }, 300);
        }
}
}