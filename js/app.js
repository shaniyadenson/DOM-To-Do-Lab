const input = document.querySelector("#input")
const button = document.querySelector("#submit-button")
const uList = document.querySelector('#todo-list')

button.addEventListener("click", function(evt) {

  const li = document.createElement("li")
  li.textContent = input.value
  document.querySelector("#todo-list").appendChild(li)
  input.value = ''
})