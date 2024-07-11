<?php
if(isset($_POST['entrar'])){
    $emailLogin = $_POST['emailLogin'];
    $passwordLogin = $_POST['passwordLogin'];

    // Conexão com o banco de dados
    $host = "localhost";
    $banco = "teste";
    $user = "root";
    $senha_user = "";

    $con = mysqli_connect($host, $user, $senha_user, $banco);

    // Verificar conexão
    if(mysqli_connect_errno()){
        die("Falha ao conectar com o banco de dados: " . mysqli_connect_error());
    }

    // Consulta SQL para selecionar usuário pelo email
    $select_user = "SELECT * FROM usuarios WHERE email = '$emailLogin'";
    $result_select = mysqli_query($con, $select_user);

    if($result_select){
        // Verifica se encontrou algum usuário
        if(mysqli_num_rows($result_select) == 1){
            // Usuário encontrado, verificar senha
            $row = mysqli_fetch_assoc($result_select);
            if($row['senha'] == $passwordLogin){
                echo "Login correto";
                
            } else {
                echo "Senha incorreta";
            }
        } else {
            echo "Usuário não encontrado";
        }
    } else {
        echo "Erro na consulta: " . mysqli_error($con);
    }

    // Fechar conexão
    mysqli_close($con);
}
?>
