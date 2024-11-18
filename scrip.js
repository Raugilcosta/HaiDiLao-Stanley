// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded. Ready for spinning!");

    // Example: Dynamically adding a prize (optional)
    const prizesList = document.getElementById("prizes-list");
    const extraPrize = document.createElement("li");
    extraPrize.textContent = "Prize 6: Complimentary Appetizer";
    prizesList.appendChild(extraPrize);
});
