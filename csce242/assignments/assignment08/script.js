//help from W3 schools
window.onload = () => {
  arraybuilder();
};

const arraybuilder = () => {
  const arrayimage = [];
  arrayimage["Happy Birthday"] = "images/birthday.jpg";
  arrayimage["Crazy Clown"] = "images/clown.jpg";
  arrayimage["It's Raining"] = "images/rain.jpg";
  arrayimage["Quiet Time"] = "images/read.jpg";
  arrayimage["Working Hard"] = "images/shovel.jpg";
  arrayimage["Work From Home"] = "images/work.jpg";

  const ul = document.createElement("ul");
  document.getElementById("display-array").append(ul);
  const div = document.getElementById("display-popup");

  for (let image in arrayimage) {
    const li = document.createElement("li");
    const h2 = document.getElementById("popup-title");
    const img = document.getElementById("popup-img");
    ul.append(li);
    li.innerHTML = `${image}`;
    li.onclick = () => {
      div.classList.remove("hidden");
      h2.innerHTML = `${image}`;
      img.src = `${arrayimage[image]}`;
    };
  }
};

document.getElementById("close").onclick = () => {
  const div = document.getElementById("display-popup");
  div.classList.add("hidden");
};
