//procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão para
.addEventListener('click', cloneField)
//executar uma ação para
function cloneField() {
//duplicar os campos
const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
//pegar os campos para limpar
const fields = newFieldContainer.querySelectorAll('input')
//usar estrutura de repetição
fields.forEach(field => {
//pegar o field do momento e limpa ele
field.value = ""
})
//colocar na página
document.querySelector("#schedule-items").appendChild(newFieldContainer)
}