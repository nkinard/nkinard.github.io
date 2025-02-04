//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log ("WOW!");
    document.getElementById("result").innerHTML="Hi Nick";
};

//do stuff for second button 
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Goodbye!"
    messageP.classList.toggle("sad");
}