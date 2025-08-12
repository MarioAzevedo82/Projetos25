


let produtos = [
    {
    id: 1,
    nome: "Iphone",
    categoria: "smartphones",
    preco: 1000,
    precoOriginal: 1500,
    desconto: 500,
    imagem: "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    descricao: "Smartphone Apple"
},
{
    id: 2,
    nome: "Ipad",
    categoria: "acessorios",
    preco: 2000,
    precoOriginal: 2500,
    desconto: 500,
    imagem: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
    descricao: "Ipad Apple"
},
    {
    id: 3,
    nome: "MacBook",
    categoria: "notebooks",
    preco: 3000,
    precoOriginal: 3500,
    desconto: 500,
    imagem: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
    descricao: "MacBook Apple"
},
{
    id: 4,
    nome: "HeadPhone",
    categoria: "fones",
    preco: 2000,
    precoOriginal: 2500,
    desconto: 500,
    imagem: "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lfGVufDB8fDB8fHww",
    descricao: "Fone abafador de ruído"
},
{
    id: 5,
    nome: "Sansung S24",
    categoria: "fones",
    preco: 2000,
    precoOriginal: 2500,
    desconto: 500,
    imagem: "https://images.unsplash.com/photo-1706989239865-25552e6f2c9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fuc3VuZyUyMHMyNHxlbnwwfHwwfHx8MA%3D%3D",
    descricao: "SmartPhone da Sansung"
},
{
    id: 6,
    nome: "Mouse Gamer",
    categoria: "acessorios",
    preco: 100,
    precoOriginal: 150,
    desconto: 50,
    imagem: "https://images.unsplash.com/photo-1705332112231-4dff35a9587c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdXNlJTIwZ2FtZXJ8ZW58MHx8MHx8fDA%3D",
    descricao: "Mouse para jogos"
}
]

let conteinerProdutos = document.querySelector(".products-container")
let input = document.querySelector("search-input")

function mostrarProdutos(){
    let htmlProdutos = ""

    produtos.forEach(produto => {
        htmlProdutos = htmlProdutos +`
        <div class="products-container">
            <div class="product-card">
                <img class="product-img" src="${produto.imagem}" alt="${produto.nome}">
                <div class="product-info">
                    <h3 class="product-name">${produto.nome}</h3>
                    <p class="product-description">${produto.descricao}</p>
                    <p class="product-price">R$${produto.preco},00</p>
                    <button class="product-button">Ver detalhes</button>
                </div>
            </div>
        </div>
        `
    })

    conteinerProdutos.innerHTML = htmlProdutos
}

window.onload = mostrarProdutos