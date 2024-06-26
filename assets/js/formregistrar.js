const btnRegistrarEntrada = document.getElementById("register_demand")
const btnRegistrarSaida = document.getElementById("add_demand")
const btnAdicionarPedidos = document.getElementById("register_demand")

const formRegistrarEntrada = document.getElementById("form_register_demand")
const checkbox_bar_code = document.getElementById("checkbox_bar_code");
const checkbox_min_stock = document.getElementById("checkbox_min_stock");
const closeForm = document.getElementById("closeForm");
const icon_info = document.getElementById("icon_info");

formRegistrarEntrada.addEventListener("submit", function(event){
    event.preventDefault()

})
checkbox_bar_code.addEventListener("click", function(){
    if(checkbox_bar_code.checked){
        document.getElementById("code_bar_input").style.display = "none"
        document.getElementById("text_code_bar").style.display = "none"
        document.getElementById("icon_info").style.display = "none"
    }else{
        document.getElementById("code_bar_input").style.display = ""
        document.getElementById("text_code_bar").style.display = ""
        document.getElementById("icon_info").style.display = ""
    }
})

checkbox_min_stock.addEventListener("click", function(){
    if(checkbox_min_stock.checked){
        document.getElementById("min_stock_input").style.display = "none"
        document.getElementById("text_stock_min").style.display = "none"
    }else{
        document.getElementById("min_stock_input").style.display = ""
        document.getElementById("text_stock_min").style.display = ""
    }
})

closeForm.addEventListener("click", function(){
    const modal = document.getElementById("modal_code_bar")
    modal.style.display = "none"
    document.getElementById("form_register_demand").style.scale = "0"
    
    setTimeout(() => {
        document.getElementById("container_register_demand").style.display = "none"
    }, 150);
})

btnRegistrarEntrada.addEventListener("click", function(){
    document.getElementById("container_register_demand").style.display = "flex"
    setTimeout(() => {
        document.getElementById("form_register_demand").style.scale = "1"
        
    }, 150);
})

icon_info.addEventListener("click", function(){
    
    const modal = document.getElementById("modal_code_bar")
    
    if( modal.style.display == "flex"){
        modal.style.display = "none"
    }else{
        modal.style.display = "flex"
    }
    
    

})
