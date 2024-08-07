const formCadastro = document.getElementById("register.form");
const cadastrar = document.getElementById("btn_register");
const btnVisibilityOFF = document.getElementById("visibility_off");
const btnVisibilityOFF2 = document.getElementById("visibility_off2");

//Função para alterar a visibilidade do input de senha
btnVisibilityOFF.addEventListener("click", function(){
    if(btnVisibilityOFF.src.endsWith("visibility_on.svg")){
        btnVisibilityOFF.src = "../assets/icons/visibility_off.svg"
        document.getElementById("user_password_register").type = "password"
    } else {
        btnVisibilityOFF.src = "../assets/icons/visibility_on.svg"
        document.getElementById("user_password_register").type = "text"
    }
});

//Função para alterar a visibilidade do input de confirmar senha 
btnVisibilityOFF2.addEventListener("click",function(){
    if(btnVisibilityOFF2.src.endsWith("visibility_on.svg")){
        btnVisibilityOFF2.src = "../assets/icons/visibility_off.svg"
        document.getElementById("user_password_confirmed").type = "password"
    } else {
        btnVisibilityOFF2.src = "../assets/icons/visibility_on.svg"
        document.getElementById("user_password_confirmed").type = "text"
    }
});

cadastrar.addEventListener("click", function(event) {
    // Pegar os valores dos campos de email e senha
    const email = document.getElementById("user_email_register").value;
    const password = document.getElementById("user_password_register").value;
    const passwordConfirmed = document.getElementById("user_password_confirmed").value;

    // Verificar se os campos estão vazios
    if (email === "" || password === "" || passwordConfirmed === "") {
        Swal.fire({
            title: "Preencha todos os campos",
            icon: "warning"
        });
       
        return; // Sair da função para evitar a execução adicional do código
    }

    

   

    // Verificar se as senhas são iguais
    if (password !== passwordConfirmed) {
        Swal.fire({
            title: "Senhas não coincidem",
            icon: "error"
        });
        event.preventDefault();
        
        return;
    }

    
    Swal.fire({
        title: "Usuário cadastrado com sucesso",
        icon: "success",
        showConfirmButton: false,
    });
    setTimeout(() => {
         // Redirecionar para a página inicial após o cadastro
    window.location.href = "../index.html"; 
    }, 2000);



    

   

});


