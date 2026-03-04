// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("opciones");
    const resultado = document.getElementById("resultado");

    // 1. Cargar dato persistente al iniciar
    const preferenciaGuardada = localStorage.getItem("preferenciaUsuario");
    if (preferenciaGuardada) {
        selector.value = preferenciaGuardada;
        actualizarPantalla(preferenciaGuardada);
    }

    // 2. Escuchar cambios en el desplegable
    selector.addEventListener("change", (e) => {
        const valorSeleccionado = e.target.value;

        // 3. Guardar el dato localmente
        localStorage.setItem("preferenciaUsuario", valorSeleccionado);
        actualizarPantalla(valorSeleccionado);
    });

    function actualizarPantalla(valor) {
        resultado.innerText = `Preferencia actual: ${valor}`;
        document.body.style.backgroundColor = valor === "modo-oscuro" ? "#333" :
            valor === "modo-azul" ? "#007bff" : "#fff";
        document.body.style.color = valor === "modo-oscuro" ? "#fff" : "#000";
    }
});
