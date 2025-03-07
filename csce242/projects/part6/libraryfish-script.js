//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//hamburger toggle switch
document.getElementById("hamburger-toggle").onclick = () => {
    document.getElementById("nav-list").classList.toggle("hide-small");
  };
  
//call in my json file
const getFish = async () => {
const url = "https://nkinard.github.io/csce242/projects/part6/json/fishlib.json";
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

//this takes in my json and parses
const showFish = async() => {
    const fishDesign = await getFish();
    const modalFish = document.getElementById("galleryfish");
    const mainContent = document.getElementById("main-content");

    //create modal block
    const modaldiv = document.createElement("div");
    mainContent.append(modaldiv);
    modaldiv.id = "modal-fish";
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
    summary.classList.add("f-container");
    const summaryp = document.createElement("p");
    const bottomimage = document.createElement("img");
    modaldivtwo.append(summary);
    summary.append(summaryp);
    summary.append(bottomimage);

    //info section
    const infosection = document.createElement("section");
    infosection.classList = "f-container";
    modaldivtwo.append(infosection);
    const infodiv = document.createElement("div");
    infosection.append(infodiv);

    const firsth2 = document.createElement("h2");
    firsth2.innerHTML = "What Flies to Use";
    infodiv.append(firsth2);

    const flyp = document.createElement("p");
    infodiv.append(flyp);

    const infoh2 = document.createElement("h2");
    infoh2.innerHTML = "Top Spots to Find Them";
    infodiv.append(infoh2);

    const spotp = document.createElement("p");
    infodiv.append(spotp);

    //create design for all fish
    fishDesign.forEach(async(fish) => {

        const galleryitem = document.createElement("div");
        galleryitem.id = "galleryfish-item"
        modalFish.append(galleryitem);

        const a = document.createElement("a");
        galleryitem.append(a);

        const outerimage = document.createElement("img");
        outerimage.src = `json/images/${fish.outerimage}`;
        a.append(outerimage);

        const outername = document.createElement("h3");
        outername.innerHTML = `${fish.name}`;
        a.append(outername);

        //open and fill modal block
        galleryitem.onclick = async() => {
            //open and close modal
            modaldiv.classList.remove("hide");
           
            //fill unique modal items
            innerimage.src = `json/images/${fish.innertopimage}`;
            innername.innerHTML = `${fish.name}`;
            summaryp.innerHTML = fish.summary;
            bottomimage.src = `json/images/${fish.innerbottomimage}`;
            flyp.innerHTML = fish.useflies;
            spotp.innerHTML = fish.topspots;
        };

        //close modal and reset all items!
        button.onclick = () => {
            modaldiv.classList.add("hide");
            innerimage.src = " ";
            innername.innerHTML = " ";
            summaryp.innerHTML = " ";
            flyp.innerHTML = " ";
            spotp.innerHTML = " ";
            bottomimage.src = " ";
        };
    });
};
//call on showFish to json parse
showFish();