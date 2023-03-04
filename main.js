const inp = document.getElementById("inp");
const addBtn = document.querySelector(".add-btn");

let obj = {
  task: "name",
  finished: false,
};

let arrayOfObjects = [];

if (localStorage.getItem("all tasks")) {
  arrayOfObjects = JSON.parse(localStorage.getItem("all tasks"));
}

localStorage.setItem("all tasks", JSON.stringify(arrayOfObjects));

inp.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    addBtn.click();
  }
});

addBtn.addEventListener("click", function () {
  if (inp.value !== "") {
    addTaskToArray(inp.value);
    inp.value = "";
    showTaskInPage();
  }
});

function addTaskToArray(str) {
  let customObj = { ...obj };
  customObj.task = str;
  arrayOfObjects.push(customObj);
  // console.log(arrayOfObjects);
  localStorage.setItem("all tasks", JSON.stringify(arrayOfObjects));
}

function showTaskInPage() {
  let ul = document.querySelector("ul");
  ul.innerHTML = ""; // to clear every task and write it again

  if (arrayOfObjects.length > 0) {
    arrayOfObjects.forEach((element) => {
      let li = document.createElement("li");

      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = "check";

      let p = document.createElement("p");
      p.innerText = element.task;

      var del = document.createElement("div");
      del.classList = "del";
      del.innerHTML = "X";

      ul.appendChild(li);
      li.appendChild(checkBox);
      li.appendChild(p);
      li.appendChild(del);
    });
  }
}
showTaskInPage(); // calling the function
