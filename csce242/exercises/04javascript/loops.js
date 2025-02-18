document.getElementById("btn-display").onclick = () => {
    const start = parseInt(document.getElementById("txt-start").value);
    const end = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    document.getElementById("error-num-order").innerHTML = ""; //to clear out errors
    const favMessage = document.getElementById("fav-message");
    favMessage.innerHTML = "";

    if(start > end) {
        document.getElementById("error-num-order").innerHTML = `Error: ${end} is less than ${start}`;
    } else {
        document.getElementById("error-num-order").innerHTML = "";
    }

    for(let i=start; i <= end; i++) {
        const li = document.createElement("li");
        li.innerHMTL = i;
        console.log(i);
        displayArea.append(li);
        //attach event on onlcick li
        li.onclick = () => {
            favMessage.innerHTML = `You clicked ${i}`;
        }
    }

    //div with side borders
    //append hr s with a for loop
    //create element of src image with stick guy
    //div is position relative, guys position is absolute
    //z index of 1 to give to guy to appear in front of the stairs
}