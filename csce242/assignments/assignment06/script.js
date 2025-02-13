//hamburger toggle switch
//arrow keys from W3 Schools
document.getElementById("hamburger-toggle").onclick = () => {
    const nav = document.getElementById("nav-list");
    if(nav.classList.contains("hide-small")) {
      nav.classList.toggle("hide-small");
      document.getElementById("btn-down").innerHTML = "&#9650";
    } else {
      nav.classList.toggle("hide-small");
      document.getElementById("btn-down").innerHTML = "&#9660";
    }
  };

//exercise clicks
document.getElementById("btn-exercise-one").onclick = () => {
  document.getElementById("exercise-block-one").classList.remove("hide-section");
  document.getElementById("exercise-block-two").classList.add("hide-section");
}

document.getElementById("btn-exercise-two").onclick = () => {
  document.getElementById("exercise-block-two").classList.remove("hide-section");
  document.getElementById("exercise-block-one").classList.add("hide-section");
}

//traveling input validation - one function on a big if statement
document.getElementById("transportation-text").onkeyup = (event) => {
  const transport = event.currentTarget.value;
  if(transport == "bike"){
    document.getElementById("transport-img").innerHTML = '<img src="images/bike.jpg" alt="image of bike">';
  } 
  else if(transport == "scooter"){
    document.getElementById("transport-img").innerHTML = '<img src="images/scooter.jpg" alt="image of scooter">';
  }
  else if(transport == "car"){
    document.getElementById("transport-img").innerHTML = '<img src="images/car.jpg" alt="image of car">';
  }
  else if(transport == "skateboard"){
    document.getElementById("transport-img").innerHTML = '<img src="images/skateboard.jpg" alt="image of skateboard">';
  } else {
    document.getElementById("transport-img").innerHTML = "";
  }
};

//change heart color - one function
const changeColor = (event) => {
  const heart = document.getElementById("heart");
  const color = event.target.id;
  if(color === "heartcolor-red") {
    heart.style.color = "red";
  } else if(color === "heartcolor-blue") {
    heart.style.color = "blue";
  } else if(color === "heartcolor-green") {
    heart.style.color = "green";
  } else {
    heart.style.color = "white";
  }
};
//all three buttons point to the same function
document.getElementById("heartcolor-blue").onclick = changeColor;
document.getElementById("heartcolor-red").onclick = changeColor;
document.getElementById("heartcolor-green").onclick = changeColor;

