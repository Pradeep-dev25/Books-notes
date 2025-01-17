//select popupbutton , select viewpopup, select overlay

var overlay = document.querySelector('.popup-overlay');
var viewpopup = document.querySelector(".view-popup");
var popupbutton = document.getElementById("pop-upbutton");

popupbutton.addEventListener("click",function(){
    overlay.style.display = "block"
    viewpopup.style.display = "block"
})

//select cencel button
var cancelbutton = document.getElementById('delete-content');
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "none"
    viewpopup.style.display = "none"
})

//select container, add-book, book-title-input, book-author-input, book-descriptions-input

var container = document.querySelector('.container');
var addbook = document.getElementById("addbutton");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();

    // Create a new div
    var div = document.createElement("div");
    div.setAttribute("class", "container-div");

    // Add content to the new div
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h4>${bookauthorinput.value}</h4>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebutton(event)">Delete</button>
    `;

    // Append the div to the container
    container.append(div);

    // Hide overlay and popup
    overlay.style.display = "none";
    viewpopup.style.display = "none";

    // Refresh input fields
    booktitleinput.value = ""; // Clear the book title input
    bookauthorinput.value = ""; // Clear the author input
    bookdescriptioninput.value = ""; // Clear the description input
});


function deletebutton(event){
    event.target.parentElement.remove()
}
