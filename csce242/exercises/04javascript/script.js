//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log ("why!");
    document.getElementById("result").innerHTML="Hi Nick";
};

//do stuff for second button 
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Goodbye!"
    messageP.classList.toggle("sad");
}

//third buttons
document.getElementById("btn-one").onclick = () => {
    const messageP = document.getElementById("experience");
    messageP.innerHTML = "Be Happy!";
};
document.getElementById("btn-two").onclick = () => {
    const messageP = document.getElementById("experience");
    messageP.innerHTML = "Be Sad!";
};
document.getElementById("btn-three").onclick = () => {
    const messageP = document.getElementById("experience");
    messageP.innerHTML = "";
};

//key down
document.getElementById("input-emotion").onkeyup = (event) => {
    document.getElementById("emotional-message").innerHTML = "You are feeling " + event.currentTarget.value;
};

//color choose
document.getElementById("btn-choose-color").onclick = () => {
    const color = document.getElementById("text-color").value.toLowerCase().trim();
    let mood = "";
    
    if(color == "blue"){
        mood = "grumpy";
    } 
    else if(color == "yellow"){
        mood="mellow";
    }

    document.getElementById("color-message").innerHTML = `You choose ${color}. You are feeling ${mood}.`;
};

let pos = 0;
const changeCirclePos = (increment) => {
    pos += increment;
    document.getElementById("circle").style.setProperty("top", pos + "px");
};

//ball buttons 
document.getElementById("btn-down").onclick = () => {
    changeCirclePos(10);
};

document.getElementById("btn-up").onclick = () => {
    changeCirclePos(-10);
};

document.getElementById("btn-pick-color").onchange = (event) => {
    const color = event.currentTarget.value;
    //document.getElementById("circle").style.setProperty("background", color);
    document.getElementById("circle").style.setProperty("--circle-color",color);
};

/* donations */
const GOAL = 1000;
let donations = 0;

document.getElementById("goal-display").innerHTML = `Goal $${GOAL}`;

document.getElementById("btn-add-donation").onclick = () => {
    const donation = document.getElementById("txt-donation").value;
    document.getElementById("donation-error").classList.add("hidden")
 
    if(isNaN(donation) ||donation <= 0){
        documentgetElementById("donation-error").classList.remove("hidden");
        return;
    }

    donations += donation;
    donationPercent = 

    document.getElementById("donation-message").innerHTML = `$${GOAL - donations} to go`;
    document.getElementById("thermometer").style.setProperty("--donation-percent", donationPercent + "%");
}

