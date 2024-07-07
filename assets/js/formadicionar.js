const btnAddDemand = document.getElementById("addDemand")
const formAddDemand = document.getElementById("formAddDemand")
const btnCancelDemand = document.getElementById("cancel_add_demand")

// Retira a ação padrão do formulario de recarregar a pagina ao clicar
formAddDemand.addEventListener("submit", function(event){
    event.preventDefault()

    
})

btnCancelDemand.addEventListener("click", function(){
    const modalAddDemand = document.getElementById("add_demand")

    modalAddDemand.style.scale = "0"
})
btnAddDemand.addEventListener("click", function(){
    const modalAddDemand = document.getElementById("add_demand")

    modalAddDemand.style.scale = "1"
    modalAddDemand.style.display = "flex"
    
 
})