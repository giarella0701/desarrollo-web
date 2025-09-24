    // Cambiar Login <-> Logout
    function toggleLogin() {
      let btn = document.getElementById("loginBtn");
      btn.textContent = btn.textContent === "Login" ? "Logout" : "Login";
    }

    // Remover botón Add Definition
    function removeDefBtn() {
      let btn = document.getElementById("addDefBtn");
      btn.remove();
    }

    // Incrementar likes
    function addLike(button) {
      let current = parseInt(button.textContent);
      current++;
      button.textContent = current + " likes";
    }