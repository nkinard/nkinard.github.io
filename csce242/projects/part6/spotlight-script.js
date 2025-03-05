//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//hamburger toggle switch
document.getElementById("hamburger-toggle").onclick = () => {
  document.getElementById("nav-list").classList.toggle("hide-small");
};

//pop ups for the spotlight
document.getElementById("spotlight").onclick = () => {
  const spot = document.querySelector()
  console.log(spot);

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

//https://nkinard.github.io/csce242/projects/part6/json/spotlight.json

const getSpotlight = async () => {
  const url = "https://nkinard.github.io/csce242/projects/part6/json/spotlight.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showSpotlight = async()=> {
  const spotlightDesign = await getSpotlight();
  const modalSpotlight = document.getElementById("modalSpotlight");

  spotlightDesign.forEach(async(spotlight)=>{
    //this part fully creates all the modals for them!
    const modaldiv = document.createElement("div");
    modaldiv.classList = "modal-style hide";
    modaldiv.id = "modal-spotlight"+spotlight.name;
    modalSpotlight.append(modaldiv);

    const innerdiv = document.createElement("div");
    innerdiv.classList = "modal-header";
    modaldiv.append(innerdiv);

    const button = document.createElement("span");
    button.innerHTML = "&times;";
    button.classList = "x-button";
    innerdiv.append(button);

    const modaldivtwo = document.createElement("div");
    modaldivtwo.classList = "modal-box-content";
    modaldiv.append(modaldivtwo);



  });
};

  showSpotlight();