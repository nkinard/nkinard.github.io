//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//hamburger toggle switch
document.getElementById("hamburger-toggle").onclick = () => {
  document.getElementById("nav-list").classList.toggle("hide-small");
};


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
  const pagediv = document.getElementById("spotlightlib");
  const section = document.createElement("section");
  section.classList = "f-container four-img-stack";
  pagediv.append(section);

  spotlightDesign.forEach(async(spotlight)=>{
    console.log(spotlight);
    
    //this part will create the main clickable buttons based on the json file
    const divbox = document.createElement("div");
    divbox.id = "sbox"+spotlight.name;
    divbox.classList = "page-button-block";
    section.append(divbox);

    const a = document.createElement("a");
    divbox.append(a);

    const outerimage = document.createElement("img");
    outerimage.src = spotlight.outerimage;
    console.log(outerimage);
    a.append(outerimage);
    
    const outername = document.createElement("h3");
    outername.innerHTML = spotlight.name;
    a.append(outername);

    /*
    const outerh2 = document.createElement("h2");
    outerh2.innerHTML = `${spotlight.name} River`;
    pagediv.append(outerh2);

    const spotlightitem = document.createElement("div");
    spotlightitem.id = `${spotlight.name}`;
    spotlightitem.classList = "page-button-block";
    spotlightsection.append(spotlightitem);

    const spotlightinfo = document.createElement("a");
    spotlightsection.append(spotlightinfo);

    const spotlightoutername = document.createElement("h3");
    const spotlightouterimage = document.createElement("img");
    spotlightouterimage.src = spotlight.outerimage;
    spotlightoutername.innerHTML = spotlight.name;
    spotlightsection.append(spotlightouterimage);
    spotlightsection.append(spotlightoutername);
    */

    //this part fully creates all the modals for them!
    const modaldiv = document.createElement("div");
    modaldiv.id = "modal-spotlight"+spotlight.name;
    modaldiv.classList = "modal-style hide";
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

    //create the header image and name
    const image = document.createElement("img");
    image.src = spotlight.image;
    modaldivtwo.append(image);
    const name = document.createElement("h2");
    name.innerHTML = spotlight.name;
    modaldivtwo.append(name);

  });
};

showSpotlight();
/*
document.getElementById("spotlightC").onclick = () => {
  const spot = document.getElementById("modal-spotlightChattooga");
  spot.classList.remove("hide");

  const close = spot.querySelector(".x-button");
  close.onclick = () => {
    spot.classList.add("hide");
  }; 
} */
