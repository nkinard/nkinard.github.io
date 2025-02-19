document.getElementById("btn-stairs").onclick = () => {
    const stairs = document.getElementById("stair-js");
    stairs.classList.toggle("hide-section");
    stairs.innerHTML = "";

    for(let i=1; i <= 10; i++) {
        const hr = document.createElement("hr");
        hr.innerHMTL = i;
        console.log(i);
        stairs.append(hr);
    }
}