function salvarUsuario(){
    let usuario = {
        name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        password: document.getElementById("senha").value,
        phone: document.getElementById("telefone").value,
        birthDate: document.getElementById("dataDeAniversario5").value,
        roles: document.getElementById("perfil").value
    }
    console.log(usuario);

    fetch("http://localhost:8080/api/users",{
        method: "POST",
        headers: {"Contet-Type":"application/json"},
        body: JSON.stringify(usuario)
    })

    .then(response => response.json())
    .then(data => console.log("Usuario salvo", data))
    .catch(error => console.error("Erro ao salvar usuario:", error))
}