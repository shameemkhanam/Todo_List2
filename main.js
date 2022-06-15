let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Please enter a task..";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();

  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
    createTask();

};

let createTask = () => {
  tasks.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editTask(this)" class="fas fa-edit btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Edit this task"></i>
      <i onClick="deleteTask(this)" class="fas fa-trash-alt btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Delete this task"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};

let editTask = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
