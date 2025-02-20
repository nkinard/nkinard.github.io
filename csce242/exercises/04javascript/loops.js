document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = "";    //clear out any previous errors
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //don't do anything else if you already have an error
    }

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }
}

let count = 0;
let updateCount;
document.querySelector("#btn-count").onclick = (event) => {
    if(event.currentTarget.innerHTML.toLowerCase() == "start") {
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        },250);
    } else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }
};

document.querySelector("#btn-reset").onclick = () => {
    count=0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = "";
};

//this is for my array
document.querySelector("#btn-show-toys").onclick = (event) => {
    const toys = ["ball", "legos", "doll", "car", "elmo"];
    event.currentTarget.disabled = true;   

    /* for(let i=0;i <toys.length;i++) {
        console.log(toys[i]);   
    } */

        const ul = document.createElement("ul");
        document.getElementById("display-toys").append(ul);
    
        toys.forEach((toy, i)=>{
            const li = document.createElement("li");
            ul.append(li);
            li.innerHTML = `${i+1}. ${toy}`;
        }); 
};

document.getElementById("btn-show-toy-desc").onclick = () => {
    const toys = [];

    toys["ball"] = "it bounce";
    toys["legos"] = "they build";
    toys["doll"] = "they cool";
    toys["car"] = "it fast";
    toys["elmo"] = "hes very loud";

    const section = document.getElementById("display-toy-descs");
    
    for(let toy in toys){
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `${toy}: ${toys[toy]}`;
        p.onclick = () => {
            document.getElementById("toy-message").innerHTML = 
            `Best ${toy} Ever. ${toys[toy]}`;
        };
    }   
}
