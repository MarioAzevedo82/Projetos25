


let produtos = [
    {
    id: 1,
    nome: "Iphone",
    categoria: "smartphones",
    preco: 1000,
    precoOriginal: 1500,
    desconto: 500,
    imagem: "https://media.istockphoto.com/id/2150116493/pt/foto/iphone-cellphone-mobile-phone-held-in-hand-mockup-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rovgzYmLfKWiG9ocz-yU5p9svq9DbopJHwEkD0zORIA=",
    descricao: "Smartphone Apple"
},
{
    id: 2,
    nome: "Ipad",
    categoria: "acessorios",
    preco: 2000,
    precoOriginal: 2500,
    desconto: 500,
    imagem: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwYWR8ZW58MHx8MHx8fDA%3D",
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
}
]

let conteinerProdutos = document.querySelector(".products-container")
let htmlProdutos = ""

function mostrarProdutos(){

    produtos.forEach(produto => {
        htmlProdutos = htmlProdutos +`
        <div class="products-container">
            <div class="product-card">
                <img class="product-img" src="${produto.imagem}" alt="${produto.nome}">
                <div class="product-info">
                    <h3 class="product-name">${produto.nome}</h3>
                    <p class="product-description">${produto.descricao}</p>
                    <p class="product-price">${produto.preco}</p>
                    <button class="product-button">Ver detalhes</button>
                </div>
            </div>
        </div>
        `
    })

    conteinerProdutos.innerHTML = htmlProdutos
}

window.onload = mostrarProdutos