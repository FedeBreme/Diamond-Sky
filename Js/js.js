function login(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'Camila' && password === '2003') {
      window.location.href = 'index.html?index=' + encodeURIComponent(username);
    } else {
      document.getElementById('error-message').textContent = 'Ese usuario no existe';
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const usuario = urlParams.get('usuario');
  
    if (usuario) {
      const bienvenidaElement = document.getElementById('bienvenida');
      bienvenidaElement.textContent = `Bienvenido/a ${usuario}`;
    }
  });