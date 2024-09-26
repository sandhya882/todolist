const addButton = document.querySelector("#addButton");
const inputTask = document.querySelector("#inputTask");
const taskList = document.querySelector("#taskList");
const form = document.querySelector("#taskForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = inputTask.value;
  if (!task) {
    alert("Please write down a task");
  } else {
    const newLi = document.createElement("li");
    const toDoContent = document.createElement("span"); // new tag for to-dos content
    toDoContent.innerText = task;
    newLi.append(toDoContent);
    newLi.setAttribute("li", "readonly");
    taskList.append(newLi);

    // this is the delete button:
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    newLi.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleting);

    // this is the edit button:

    const editButton = document.createElement("button");
    editButton.innerText = "EDIT";
    newLi.appendChild(editButton);
    editButton.addEventListener("click", (e) =>
      editing(e.target.parentElement)
    );
  }
  inputTask.value = "";
});

// delete button make up

function deleting() {
  let forDelete = this.parentElement;
  taskList.removeChild(forDelete);
}

// edit button make up

function editing(liTag) {
  let liContent = liTag.querySelector("span");

  let input = document.createElement("input");
  input.type = "text";
  input.value = liContent.textContent;
  liTag.append(input);
  input.focus();
  input.addEventListener("blur", () => {
    liContent.innerHTML = input.value;
    input.remove();
  });
}