//Create Elements dynamically in Javascript - DOM Manipulation



const button = document.getElementById("noob");
const names = document.getElementById("pro");

button.addEventListener("click", () => {
    const demo = document.createElement("h2");
    demo.innerText = "shivendra mauhariya";
    names.appendChild(demo); 

    
    demo.style.color = "blue"
    
});

