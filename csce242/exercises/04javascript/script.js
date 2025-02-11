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