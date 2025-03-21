//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//hamburger toggle switch
document.getElementById("hamburger-toggle").onclick = () => {
    document.getElementById("nav-list").classList.toggle("hide-small");
  };

//for the form section from class video
const submitSpotlight = (e) => {
    e.preventDefault();
    const results = document.getElementById("results");

    const form = document.getElementById("form");
    const location = form.elements["location"].value;
    const long = form.elements["longitude"].value;
    const lat = form.elements["latitude"].value;
    const fish = form.elements["fish"].value;
    const flies = form.elements["flies"].value;
    const bodywater = form.elements["bodywater"].value;
    const entry = form.elements["entrytype"].value;
    const rating = form.elements["rating"].value;
    const imageR = form.elements["imageriver"].value;
    const imageH = form.elements["imagehole"].value;
    const season = form.elements["season"].value;

    console.log(location);
    console.log(long);
    console.log(lat);
    console.log(fish);
    console.log(flies);
    console.log(bodywater);
    console.log(entry);
    console.log(rating);
    console.log(imageR);
    console.log(imageH);
    console.log(season);

    form.reset();

    const h2 = document.createElement("h2");
    h2.innerHTML = "Thank you for your submission! Responses are monitored."
    h2.style.fontWeight = "bold";
    const info = document.createElement("p");
    info.innerHTML = "Information: "
    results.append(h2);
    results.append(info);
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const sect = document.createElement("section");
    sect.classList = "f-container resultscontainer"
    results.append(sect);
    sect.append(div1);
    sect.append(div2);

    const p1 = document.createElement("p");
    p1.innerHTML = `Name: ${location}`;
    div1.append(p1);
    const p2 = document.createElement("p");
    p2.innerHTML = `Longitude: ${long}`;
    div1.append(p2);
    const p3 = document.createElement("p");
    p3.innerHTML = `Latitude: ${lat}`;
    div1.append(p3);
    const p4 = document.createElement("p");
    p4.innerHTML = `Fish Caught: ${fish}`;
    div1.append(p4);
    const p5 = document.createElement("p");
    p5.innerHTML = `Flies Used: ${flies}`;
    div1.append(p5);
    const p6 = document.createElement("p");
    p6.innerHTML = `Body of Water: ${bodywater}`;
    div1.append(p6);
    const p7 = document.createElement("p");
    p7.innerHTML = `Entry Type: ${entry}`;
    div2.append(p7);
    const p8 = document.createElement("p");
    p8.innerHTML = `Rating: ${rating}`;
    div2.append(p8);
    const p9 = document.createElement("p");
    p9.innerHTML = `Image of River: ${imageR}`;
    div2.append(p9);
    const p10 = document.createElement("p");
    p10.innerHTML = `Image of Hole: ${imageH}`;
    div2.append(p10);
    const p11 = document.createElement("p");
    p11.innerHTML = `Seasons to Fish: ${season}`;
    div2.append(p11);


    //this came from w3schools, allows a timer so that the information submission goes away!
    setTimeout(() => { results.innerHTML = ""; }, 10000);
};
document.getElementById("form").onsubmit = submitSpotlight;

//call in my json file
const getSpotlight = async () => {
    const url = "https://nkinard.github.io/csce242/projects/part6/json/spotlight.json";
        try {
            const response = await fetch(url);
            return response.json();
        } catch (error) {
            console.log(error);
        }
    };
    //map for modal
    const getMap = async (latitude, longitude) => {
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

//this takes in my json and parses
const showSpotlight = async() => {
    const spotlightDesign = await getSpotlight();
    const modalSpotlight = document.getElementById("gallery");
    const mainContent = document.getElementById("main-content");

    //create modal block
    const modaldiv = document.createElement("div");
    mainContent.append(modaldiv);
    modaldiv.id = "modal-spotlight";
    modaldiv.classList = "modal-style hide";
    
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

    //create all items for modal
    //inner image and name
    const innerimage = document.createElement("img");
    modaldivtwo.append(innerimage);
    const innername = document.createElement("h2");
    modaldivtwo.append(innername);


    //summary
    const summary = document.createElement("section");
    const summaryp = document.createElement("p");
    modaldivtwo.append(summary);
    summary.append(summaryp);

    //info section
    const infosection = document.createElement("section");
    infosection.classList = "f-container";
    modaldivtwo.append(infosection);
    const infodiv = document.createElement("div");
    infosection.append(infodiv);

    const firsth2 = document.createElement("h2");
    firsth2.innerHTML = "Types of Flies and Fishes";
    infodiv.append(firsth2);

    const flyp = document.createElement("p");
    infodiv.append(flyp);

    const fishp = document.createElement("p");
    infodiv.append(fishp);

    const infoh2 = document.createElement("h2");
    infoh2.innerHTML = "Useful Information";
    infodiv.append(infoh2);

    const bodyofwater = document.createElement("p");
    infodiv.append(bodyofwater);

    const access = document.createElement("p");
    infodiv.append(access);

    const season = document.createElement("p");
    infodiv.append(season);

    const rating = document.createElement("h3");
    infodiv.append(rating);

    const iframe = document.createElement("iframe");
    infosection.append(iframe);

    //create design for all spotlight
    spotlightDesign.forEach(async(spotlight) => {

        const galleryitem = document.createElement("div");
        galleryitem.id = "gallery-item"
        modalSpotlight.append(galleryitem);

        const a = document.createElement("a");
        galleryitem.append(a);

        const outerimage = document.createElement("img");
        outerimage.src = `json/images/${spotlight.outerimage}`;
        a.append(outerimage);

        const outername = document.createElement("h3");
        outername.innerHTML = `${spotlight.name} River`;
        a.append(outername);

        //open and fill modal block
        galleryitem.onclick = async() => {
            //open and close modal
            modaldiv.classList.remove("hide");
           
            //fill unique modal items
            innerimage.src = `json/images/${spotlight.innerimage}`;
            innername.innerHTML = `${spotlight.name} River Spotlight`;
            summaryp.innerHTML = spotlight.summary;
            flyp.innerHTML = `What Type of Flies: ${spotlight.flies}`;
            fishp.innerHTML = `What Type of Fishes: ${spotlight.fishes}`;
            bodyofwater.innerHTML = `What Body of Water: ${spotlight.watertype}`;
            access.innerHTML = `Public or Private Access: ${spotlight.typeofentry}`;
            season.innerHTML = `Best Season: ${spotlight.seasons}`;
            rating.innerHTML = `Final Rating: ${spotlight.rating}/5`;
            iframe.src = await getMap(spotlight.latitude, spotlight.longitude);
        }

        //close modal and reset all items!
        button.onclick = () => {
            modaldiv.classList.add("hide");
            innerimage.src = " ";
            innername.innerHTML = " ";
            summaryp.innerHTML = " ";
            flyp.innerHTML = " ";
            fishp.innerHTML = " ";
            bodyofwater.innerHTML = " ";
            access.innerHTML = " ";
            season.innerHTML = " ";
            rating.innerHTML = " ";
            iframe.src = " ";
        }
    });
};
//call on showSpotlight to begin json file parsing
showSpotlight();

