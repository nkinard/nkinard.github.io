document.querySelectorAll(".gallery section").forEach((tile)=>{
    tile.onclick = () => {
        const label = tile.querySelector("h4").innerHTML;
        console.log(label);
    }
});