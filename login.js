// login.js
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (response.ok) {
        alert('Login bem-sucedido!');
        // Armazenar o token no localStorage ou em outro local seguro
        localStorage.setItem('token', data.token);
    } else {
        alert(data.message);
    }
});
