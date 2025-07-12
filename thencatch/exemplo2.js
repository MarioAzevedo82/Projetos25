function login(usuario, senha){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario === "admin" & senha === "1234") {
                resolve("✅ Login autorizado")
            } else {
                reject("❌ Usuário ou senha incorretos")
            }
        }, 1500);
    })
}