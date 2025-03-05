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

const getMap = async(latitude, longitude) => {
  try {
      return (
          await fetch(
              `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
          )
      ).url;
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
    outerimage.src = `images/${spotlight.outerimage}`;
    console.log(outerimage);
    a.append(outerimage); 
    
    const outername = document.createElement("h3");
    outername.innerHTML = `${spotlight.name} River`;
    a.append(outername);
    
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
    const innerimage = document.createElement("img");
    innerimage.src = `images/${spotlight.innerimage}`;
    modaldivtwo.append(innerimage);
    const name = document.createElement("h2");
    name.innerHTML = spotlight.name;
    modaldivtwo.append(name); 

    //create the section for summary
    const summary = document.createElement("section");
    const summaryp = document.createElement("p");
    modaldivtwo.append(summary)
    summaryp.innerHTML = spotlight.summary;
    modaldivtwo.append(summaryp)

    //info section
    const infosection = document.createElement("section");
    infosection.classList = "f-container";
    modaldivtwo.append(infosection);

    const firsth2 = document.createElement("h2");
    firsth2.innerHTML = "Types of Flies and Fishes";
    infosection.append(firsth2);

    const flyp = document.createElement("p");
    flyp.innerHTML = `What Type of Flies: ${spotlight.flies}`;
    infosection.append(flyp);

    const fishp = document.createElement("p");
    fishp.innerHTML = `What Type of Fishes: ${spotlight.fishes}`;
    infosection.append(fishp);

    const infoh2 = document.createElement("h2");
    infoh2.innerHTML = "Useful Information";
    infosection.append(infoh2);

    const bodyofwater = document.createElement("p");
    bodyofwater.innerHTML = `What Body of Water: ${spotlight.watertype}`;
    infosection.append(bodyofwater);

    const access = document.createElement("p");
    access.innerHTML = `Public or Private Access: ${spotlight.typeofentry}`;
    infosection.append(access);

    const season = document.createElement("p");
    season.innerHTML = `Best Season: ${spotlight.seasons}`;
    infosection.append(season);

    const rating = document.createElement("h3");
    rating.innerHTML = `Final Rating: ${spotlight.rating}/5`;
    infosection.append(rating); 

    const iframe = document.createElement("iframe");
    iframe.src = await getMap(spotlight.latitude, spotlight.longitude);
    infosection.append(iframe);
  });

  document.getElementById("sboxChattooga").onclick = () => {
    const spot = document.getElementById("modal-spotlightChattooga");
    spot.classList.remove("hide");
  
    const close = spot.querySelector(".x-button");
    close.onclick = () => {
      spot.classList.add("hide");
    }; 
  };
  
};

showSpotlight();


