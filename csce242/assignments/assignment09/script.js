class Pizza {
    constructor(title, ingredients, sauce, cheese, price, image) {
        this.title = title;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.image = image;
    }

    get item() {
        const pizzaSection = document.createElement("section");
        pizzaSection.classList.add("column");

        const heading = document.createElement("h3");
        heading.innerText = this.title;
        pizzaSection.append(heading);

        pizzaSection.append(this.picture(this.image));

        pizzaSection.onclick = () => displayPizzaDetails(this); //run a function to display my information
        return pizzaSection;
    }

    listItem(information) {
        const li = document.createElement("li");
        li.innerText = information;
        return li;
    }

    picture(image) {
        const picItem = document.createElement("img");
        picItem.src = "images/" + image;
        return picItem;
    }
}

const displayPizzaDetails = (pizza) => {
    const pizzaDetails = document.getElementById("modal-content");
    const pizzaDetailsImage = document.getElementById("modal-content-image");
    pizzaDetails.innerHTML ="";
    pizzaDetailsImage.innerHTML ="";

    const h3 = document.createElement("h3");
    h3.textContent = pizza.title;
    pizzaDetails.append(h3);

    const p1 = document.createElement("p");
    p1.textContent = `Ingredients: ${pizza.ingredients}`;
    pizzaDetails.append(p1);

    const p2 = document.createElement("p");
    p2.textContent = `Sauce: ${pizza.sauce}`;
    pizzaDetails.append(p2);

    const p3 = document.createElement("p");
    p3.textContent = `Cheese: ${pizza.cheese}`;
    pizzaDetails.append(p3);

    const p4 = document.createElement("p");
    p4.textContent = `Price: ${pizza.price}`;
    pizzaDetails.append(p4);

    const img = document.createElement("img");
    img.src = "images/"+pizza.image;
    pizzaDetailsImage.append(img);

    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    const background = document.getElementById("modal-background");
    background.classList.remove("hidden");
}

document.getElementById("close").onclick = () => {
    const div = document.getElementById("popup");
    div.classList.add("hidden");
    const background = document.getElementById("modal-background");
    background.classList.add("hidden");
  };

window.onload = () => {
    pizzaArray();
}

const pizzaArray = () => {
    const pizzas = [];
    const pizzaList = document.getElementById("main-container");

    pizzas.push(new Pizza("Hawaiian", "Pineapples, Sauce, Dough, Cheese", "Red Sauce", "Mozzarella and Cheddar", "$22", "hawaiian.jpg"));
    pizzas.push(new Pizza("Buffalo Chicken Ranch", "Chicken, Dough, Cheese", "Buffalo Sauce", "White Cheddar", "$25", "bcr.jpg"));
    pizzas.push(new Pizza("Margarita", "Basil, Tomatoes, Olive Oil, Dough", "Red Sauce", "Fresh Mozzarella", "$15", "margarita.jpg"));
    pizzas.push(new Pizza("Pepperoni", "Pepperoni, Sauce, Dough, Cheese", "Red Sauce", "White Cheddar and Mozzarella", "$20", "pepperoni.jpg"));
    pizzas.push(new Pizza("Veggie", "Veggies, Cheese, Dough, Sauce", "Red Sauce", "Mozzarella, but whatever you prefer", "$15", "veggie.jpg"));

    for (let i in pizzas) {
        console.log(`Pizza: ${pizzas[i].title}, ${pizzas[i].image}`);
        pizzaList.append(pizzas[i].item);
    }
}
