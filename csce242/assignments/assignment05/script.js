//script by Nicholas Kinard
document.getElementById("column1").onclick = () => {
  const hellomessageP = document.getElementById("hello-message");
  hellomessageP.innerHTML += "hello<br>";
};

document.getElementById("color-picker").oninput = () => {
  document.getElementById("star").style.color =
    document.getElementById("color-picker").value;
};

document.getElementById("image-change").onclick = () => {
  const oldimg = document.getElementById("image-change").src;
  const randomnum = Math.floor(Math.random() * 15);
  const tag = "/200/200";
  const front = "https://picsum.photos/id/";
  const newimg = front + randomnum + tag;
  document.getElementById("image-change").src = newimg;
};
