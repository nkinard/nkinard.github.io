document.getElementById("btn-stairs").onclick = () => {
    const stairs = document.getElementById("stair-js");
    const climb = document.getElementById("btn-climb");
    const block = document.getElementById("block");
    
    block.classList.toggle("hide-section");
    climb.classList.toggle("hide-section");

    if(block.classList.contains("hide-section")) {
        stairs.innerHTML = "";
    } else {
        for(let i=1; i <= 10; i++) {
            const hr = document.createElement("hr");
            hr.innerHMTL = i;
            console.log(i);
            stairs.append(hr);
        }
    }
};

let pos = 190;
let change = 0;
document.getElementById("btn-climb").onclick = () => {
    pos=190;
    document.getElementById("btn-climb").disabled = true;  //so that way the button cannot be spammed and the setIntervals stack 
    beginclimb = setInterval(() => {
        const stick = document.getElementById("climb-stick");
        if(pos<540) {
            if(change==0) {
                stick.src="images/right.png";
                change++;
                pos+=10;
                stick.style.setProperty("bottom", pos+"px");
            } else {
                stick.src="images/left.png";
                change--;
                pos+=10;
                stick.style.setProperty("bottom", pos+"px");
        } 
        } else {
            document.getElementById("btn-climb").disabled = false;  //stick reaches the top, button can be pressed again 
            clearInterval(beginclimb);
        }
    }, 500);
};