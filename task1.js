const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const list = document.querySelector("#list")
const createButton = document.querySelector("#create")
createButton.addEventListener("click", onClick)

function onClick(event) {
    const ingredientsList = ingredients.map((item) => {
        const ingrElem = document.createElement("li");
        ingrElem.classList.add("item");
        ingrElem.textContent = `${item}`;
        return ingrElem;
    });

    list.append(...ingredientsList)

}