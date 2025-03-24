const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function AddTask() {
    if(inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    SaveData();
}

inputBox.addEventListener("keypress", function(e) {
    if(e.keyCode === 13) {
        AddTask();
    }
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

displayList();