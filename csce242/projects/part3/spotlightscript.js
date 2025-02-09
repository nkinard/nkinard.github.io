//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//pop ups for the spotlight
document.getElementById("spotlightC").onclick = () => {
  const spot = document.getElementById("modal-spotlightC");
  spot.classList.remove("hide");

  const close = spot.querySelector(".x-button");
  close.onclick = () => {
    spot.classList.add("hide");
  };
};

document.getElementById("spotlightS").onclick = () => {
  const spot = document.getElementById("modal-spotlightS");
  spot.classList.remove("hide");

  const close = spot.querySelector(".x-button");
  close.onclick = () => {
    spot.classList.add("hide");
  };
};

document.getElementById("spotlightW").onclick = () => {
  const spot = document.getElementById("modal-spotlightW");
  spot.classList.remove("hide");

  const close = spot.querySelector(".x-button");
  close.onclick = () => {
    spot.classList.add("hide");
  };
};

document.getElementById("spotlightM").onclick = () => {
  const spot = document.getElementById("modal-spotlightM");
  spot.classList.remove("hide");

  const close = spot.querySelector(".x-button");
  close.onclick = () => {
    spot.classList.add("hide");
  };
};
