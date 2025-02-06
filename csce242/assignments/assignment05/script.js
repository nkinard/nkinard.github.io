//script by Nicholas Kinard
document.getElementById("column1").onclick = () => {
    const hellomessageP = document.getElementById("hello-message");
    hellomessageP.innerHTML += "hello<br>";
};

document.getElementById("color-picker").oninput = () => {
    document.getElementById("star").style.color = document.getElementById("color-picker").value;
};

document.getElementById("image-change").onclick = () => {
    const randomnum = Math.floor(Math.random() * 10);
    const tag = ".jpg";
    const newimg = "images/img"+randomnum+tag;
    console.log(newimg);
    document.getElementById("image-change").src = newimg;
};

