// login.js - Funções do lado do cliente para login

document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Validação simples
    if (!email || !password) {
        alert("Preencha todos os campos");
        return;
    }

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.token);  // Armazenar token JWT no armazenamento local
            window.location.href = "/dashboard.html";   // Redirecionar para a página de dashboard
        } else {
            alert(data.message);  // Exibir erro caso falhe
        }
    } catch (error) {
        console.error("Erro de login", error);
        alert("Erro no login. Tente novamente.");
    }
});
