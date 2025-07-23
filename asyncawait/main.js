// console.log(1)
// console.log(2)
// setTimeout(() => console.log(3), 3000)
// console.log(4)

// async function informacaoPaises(paisDesejado){
//     const info = await fetch(
//         "https://restcountries.com/v3.1/name/" + paisDesejado
//     );
//     console.log(await info.json())
// }

// informacaoPaises("brazil")

async function informacaoPaises(paisDesejado) {
    const resposta = await fetch(
        `https://restcountries.com/v3.1/name/${paisDesejado}`
    );

    if(!resposta.ok){
        console.error("Erro ao buscar o país");
        return;
    }
}