document.getElementById("btn-stairs").onclick = () => {
    const stairs = document.getElementById("stair-js");
    const climb = document.getElementById("btn-climb");
    climb.classList.toggle("hide-section");
    stairs.classList.toggle("hide-section");

    if(stairs.classList.contains("hide-section")) {
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

document.getElementById("btn-climb").onclick = () => {
    console.log("hi");
};
