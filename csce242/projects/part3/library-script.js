//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//pop ups for the fish
document.getElementById("redfish").onclick = () => {
  const fish = document.getElementById("modal-fishR");
  fish.classList.remove("hide");

  const close = fish.querySelector(".x-button");
  close.onclick = () => {
    fish.classList.add("hide");
  };
};
document.getElementById("trout").onclick = () => {
  const fish = document.getElementById("modal-fishT");
  fish.classList.remove("hide");

  const close = fish.querySelector(".x-button");
  close.onclick = () => {
    fish.classList.add("hide");
  };
};
document.getElementById("sheep").onclick = () => {
  const fish = document.getElementById("modal-fishSH");
  fish.classList.remove("hide");

  const close = fish.querySelector(".x-button");
  close.onclick = () => {
    fish.classList.add("hide");
  };
};
document.getElementById("bass").onclick = () => {
  const fish = document.getElementById("modal-fishB");
  fish.classList.remove("hide");

  const close = fish.querySelector(".x-button");
  close.onclick = () => {
    fish.classList.add("hide");
  };
};

//pop ups for the flies
document.getElementById("dryfly").onclick = () => {
  const fly = document.getElementById("modal-flyD");
  fly.classList.remove("hide");

  const close = fly.querySelector(".x-button");
  close.onclick = () => {
    fly.classList.add("hide");
  };
};
document.getElementById("emergerfly").onclick = () => {
  const fly = document.getElementById("modal-flyE");
  fly.classList.remove("hide");

  const close = fly.querySelector(".x-button");
  close.onclick = () => {
    fly.classList.add("hide");
  };
};
document.getElementById("nymphfly").onclick = () => {
  const fly = document.getElementById("modal-flyN");
  fly.classList.remove("hide");

  const close = fly.querySelector(".x-button");
  close.onclick = () => {
    fly.classList.add("hide");
  };
};
document.getElementById("wetfly").onclick = () => {
  const fly = document.getElementById("modal-flyW");
  fly.classList.remove("hide");

  const close = fly.querySelector(".x-button");
  close.onclick = () => {
    fly.classList.add("hide");
  };
};
