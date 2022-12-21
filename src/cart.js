function Cart() {
    alert("Carrito de Compras");
    const boton = document.getElementById("#AgregaalCarrito");
    // Agregar listener
    boton.addEventListener("click", function(evento){
        // Aquí todo el código que se ejecuta cuando se da click al botón
        alert("Se agregó producto al carrito");
    });
    return 1;
  }
  
Cart();