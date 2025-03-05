//https://api.openbrewerydb.org/breweries

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

const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showBreweries = async() => {
    const breweriesSection = document.getElementById("breweries");
    const breweries = await getBreweries();

    breweries.forEach(async(brew)=>{
        const section = document.createElement("section");
        breweriesSection.append(section);

        const a = document.createElement("a");
        a.href = brew.website_url;
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = brew.name;
        a.append(h3);

        const iframe = document.createElement("iframe");
        iframe.src = await getMap(brew.latitude, brew.longitude);
        section.append(iframe);
    });
};

showBreweries();