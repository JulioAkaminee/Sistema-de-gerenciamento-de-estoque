<?php
if(isset($_POST['cadastrar'])){
    $email = $_POST['email'];
    $senha = $_POST['password'];
    $check_senha = $_POST['check_password'];
    
    // Conexão com o banco de dados
    $host = "localhost";
    $banco = "teste";
    $user = "root";
    $senha_user = "";
    
    $con = mysqli_connect($host, $user, $senha_user, $banco);
    
    // Verifica se a conexão foi estabelecida com sucesso
    if(mysqli_connect_errno()){
        die("Conexão falhou: " . mysqli_connect_error());
    }
    
    // Verifica se o email já existe na tabela
    $sql_select = "SELECT * FROM usuarios WHERE email = '$email'";
    $result_select = mysqli_query($con, $sql_select);
    
    if(mysqli_num_rows($result_select) > 0){
        echo '<script>alert("Email ja cadastrado, Escolha outro email")
               window.location.href = "../../register,.html";
                </script>';
    } else {
        // Insere o novo usuário na tabela
        $sql_insert = "INSERT INTO usuarios (email, senha) VALUES ('$email', '$senha')";
        
        if(mysqli_query($con, $sql_insert)){
            echo '<script>alert("Usuario cadastrado com sucesso")
                window.location.href = "../../index.html";
                </script>';
        } else {
            echo "Erro ao cadastrar usuário: " . mysqli_error($con);
        }
    }
    
    // Fecha a conexão
    mysqli_close($con);
}
?>
