//script by Nicholas Kinard
//a lot of code help came from W3 Schools and

//hamburger toggle switch
document.getElementById("hamburger-toggle").onclick = () => {
  document.getElementById("nav-list").classList.toggle("hide-small");
};

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

//work in progress
/*
class Fish {
  constructor(title, outerimage, summary, bigimage, innerimage, useflies, topspots) {
    this.title = title;
    this.outerimage = outerimage;
    this.summary = summary;
    this.bigimage = bigimage;
    this.innerimage = innerimage;
    this.usefiles = useflies;
    this.topspots = topspots;
  }

  get item() {
    //create all sections
    const fishSection = document.getElementById("fishSection");
    const fishDiv = document.createElement("div");
    const a = document.createElement("a");
    const h3 = document.createElement("h3");

    //write in the sections
    fishDiv.classList = "page-button-block";
    h3.innerHTML = this.title;

    //add them all
    fishSection.append(fishDiv);
    fishDiv.append(a);
    a.append(this.picture(this.outerimage));
    a.append(h3);


    //run details
    fishDiv.onclick = () => displayFishDetails(this);
    return fishDiv;

  }

    picture(image) {
      const outerimage = document.createElement("img");
      outerimage.src = "images/"+image;
      return outerimage;
    }
};


const displayFishDetails = (fish) => {
  const fishDetails = document.getElementById("")
  
};

window.onload = () => {
  fishArray();
}

const fishArray = () => {
  const fish = [];
  const fishList = document.getElementById("main-content");

  fish.push(
    new Fish(
      "Redfish",
      "redfish.jpg",
      "This cool saltwater fish finds itself in the marshes of both North and South Carolina. Due to thier extended range, you can gind them easy in early afternoon low tides, or schooling out deep around 30-40ft water. The best time to catch these depends on the time of the year as well as which marsh you are in. Some good spots in this area to try first are the shallow flats of Charleston and Beaufort.",
      "redfishbig.jpg",
      "redfishdrawn.jpg",
      "Since Redfish are saltwater, you are going to need to use saltwater fly patterns. These fish are going to bite completely different from the normal freshwater fish and be a little more aggressive. The best flies include the Clouser Deep Minnow, Deep Baitfish Shad, or even a Squimp.",
      "The best places to find these fish are in saltwater regions where bank or boat fishing is accessible. It is not reccommended to go wading for thein these fish. Top areas include the flats of Charleston and Beufort as well as the bays and lagoons in the Outer Banks."
    )
  )

  for (let i in fish) {
    fishList.append(fish[i].item);
  }
} */
