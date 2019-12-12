addEventListener("load", init, false);

let mieren = [];

function init() {
    document.querySelector("#maak").addEventListener("click", handleMaak, false);
    document.querySelector("#beweeg").addEventListener("click", handleBeweeg, false);
}

class Mier {
    constructor() {
        this.x = Math.floor(Math.random()*window.innerWidth);
        this.y = Math.floor(Math.random()*window.innerHeight);
        this.rotation = Math.floor(Math.random()*360);
        this.node = document.createElement("img");
        this.node.setAttribute("src", "../images/black_ant.png");
        this.node.setAttribute("alt", "levende mier");
        this.node.setAttribute("class", "levend");
        this.node.style.position = "absolute";
        this.updateImageTag();
        this.node.addEventListener("click", handleVerpletter, false);
    }

    getImageTag() {
        return this.node;
    }

    updateImageTag() {
        this.node.style.top = this.y+"px";
        this.node.style.left = this.x+"px";
        this.node.style.transform = "rotate("+ this.rotation+"deg)";
    }

    beweeg() {
        if(this.node.classList.contains("levend")) {
            this.x += Math.floor(Math.random()*21)-5;
            this.y += Math.floor(Math.random()*11)-5;
            this.rotation += Math.floor(Math.random()*41)-10;
            this.updateImageTag();
        }
    }
}

function handleMaak() {
    let div = document.querySelector("#mieren");
    let aantal = document.querySelector("#aantal").value;

    for(let i = 0; i < aantal; i++) {
        let mier = new Mier();
        mieren.push(mier);
        div.appendChild(mier.getImageTag());
    }
}

function handleBeweeg() {
    setInterval(function() {
        for(let i = 0; i < mieren.length; i++) {
            mieren[i].beweeg();
        }
    }, 100);
}

function handleVerpletter(event) {
    event.target.setAttribute("src", "../images/ant_dead.png");
    event.target.setAttribute("alt", "dode mier");
    event.target.setAttribute("class", "dood");
}