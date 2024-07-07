const btnAddDemand = document.getElementById("addDemand")
const formAddDemand = document.getElementById("formAddDemand")
const btnCancelDemand = document.getElementById("cancel_add_demand")

// Retira a ação padrão do formulario de recarregar a pagina ao clicar
formAddDemand.addEventListener("submit", function(event){
    event.preventDefault()

    
})

btnAddDemand.addEventListener("click", function(){
    const formAddDemand = document.getElementById("formAddDemand")
    const modal = document.getElementById("add_demand")

    
    document.getElementById("add_demand").style.display = "flex"
    setTimeout(() => {
        document.getElementById("formAddDemand").style.scale = "1"
        
    }, 150);
        
    
  
})

btnCancelDemand.addEventListener("click", function(){
    const formAddDemand = document.getElementById("formAddDemand")
    const modal = document.getElementById("add_demand")
        
    
  
    formAddDemand.style.scale = "0"

    setTimeout(() => {
        modal.style.display = "none"
    }, 100);
})