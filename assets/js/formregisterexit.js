
const formRegisterExit = document.getElementById("formRegisterExit")
const btnRegisterOutput = document.getElementById("register_output")
const btnCancelRegisterExit = document.getElementById("btn_cancel_registerExit")

// Retira a ação padrão do formulario de recarregar ao enviar
formRegisterExit.addEventListener("submit", function(event){
    event.preventDefault()
})

btnRegisterOutput.addEventListener("click", function(){
  

    document.getElementById("register_exit").style.display = "flex"
    setTimeout(() => {
        document.getElementById("formRegisterExit").style.scale = "1"
        
    }, 150);
})


btnCancelRegisterExit.addEventListener("click", function(){
   
        
    
  
    formRegisterExit.style.scale = "0"

    setTimeout(() => {
        document.getElementById("register_exit").style.display = "none"
    }, 100);
})