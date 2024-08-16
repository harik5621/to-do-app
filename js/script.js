document.querySelector("#btn").addEventListener("click", add);

// Add mouseover and mouseout event listeners to the button
document.querySelector("#btn").addEventListener("mouseover", () => {
document.querySelector("#btn").style.cssText="background-color:red;border:2px solid blue";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
document.querySelector("#btn").style.backgroundColor = "darkorchid";
});

function add() {
    let text = document.querySelector("#input").value;
    let li = document.querySelector("#li");
    
    if (text) {
        let todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        let ad = document.createElement("h1");
        ad.innerText = text;

        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-delete-left");

        icon.addEventListener("click", () => {
            li.removeChild(todoItem);
        });

        todoItem.appendChild(ad);
        todoItem.appendChild(icon);
        li.appendChild(todoItem);

        console.log(ad);
        document.querySelector("#input").value = ""; // Clear the input field
    }
}