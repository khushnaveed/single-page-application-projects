const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector(".task-list");
const ul = document.createElement("ul");

button.addEventListener("click", (e) => {
  // prevent the default behaviour of form of getting refreshed
  e.preventDefault();

  if (input.value !== "") {
    const li = document.createElement("li");
    const xIcon = document.createElement("span");

    li.textContent = input.value;
    xIcon.textContent = "x";
    li.append(xIcon);
    ul.append(li);
    div.append(ul);

    input.value = "";
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.innerText === "x" && e.target.localName === "span") {
    e.target.parentElement.remove();
  }
});
