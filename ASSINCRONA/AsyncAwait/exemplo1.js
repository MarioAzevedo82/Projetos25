const usuarios = ["mario", "joao", 'vagner']

function buscarUsuario(login) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const existe = usuarios.includes(login.toLowerCase());
            resolve(existe);
        }, 2000);
    })
}

async function verificarLogin() {
    const input = document.getElementById("login").value;
    const status = document.getElementById("status");

    status.textContent = "🔎 Verificando login...";

    const resultado = await buscarUsuario(input);

    if (resultado) {
        status.textContent = `✅ Bem-vindo, ${input}!`;
    } else {
        status.textContent = `❌ Usuário "${input}" não encontrado.`
    }
}