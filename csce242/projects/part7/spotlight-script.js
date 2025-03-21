//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//hamburger toggle switch
document.getElementById("hamburger-toggle").onclick = () => {
    document.getElementById("nav-list").classList.toggle("hide-small");
  };

//for the form section 
//source from https://web3forms.com/
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.style.display = "block"; //add this in, allowed for multiple entries on one refresh
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none"; 
            }, 3000);
        });
});
  
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

