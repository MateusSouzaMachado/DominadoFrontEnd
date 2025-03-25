function carregarCategorias{
    fetch("http://localhost:8080/api/categorys")
    .then(response => response.json())
    .then(data =>{
        let select = document.getElementById("category");
        data.forEach(category =>{
            let option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            select.appendChild(option);
        });
    }).catch(error => console.error("Erro ao carrefar categorias:",error))    
}

document.addEventListener("DOMContentLoaded",function(){
    carregarCategorias();
})

function cadastrarProduto(){
    let selectedCategories = Array.from(document.getElementById("category").selectedOptions).map(option=> Number(option.value));

    let produto = {
        name: document.getElementById("nome").value,
        description: document.getElementById("descricao").value,
        price: document.getElementById("preco").value,
        imgUrl: document.getElementById("image").value,
        categories: selectedCategories
    }
    console.log(produto);

    fetch("http://localhost:8080/api/products",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(produto)
    })

    .then(response => response.json())
    .then(data => console.log("Prpduto salvo", data))
    .catch(error => console.error("Erro ao salval ususari:", error))
}