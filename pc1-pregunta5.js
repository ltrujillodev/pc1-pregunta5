let comentarios = [];

function publicarComentario() {
  let nombre = document.getElementById("nombre").value;
  let comentarioTexto = document.getElementById("comentario").value;

  if (nombre === "" || comentarioTexto === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  let nuevoComentario = {
    nombre: nombre,
    texto: comentarioTexto,
    fecha: new Date().toLocaleString(),
  };

  comentarios.push(nuevoComentario);

  mostrarComentarios();

  document.getElementById("nombre").value = "";
  document.getElementById("comentario").value = "";
}

function mostrarComentarios() {
  let commentsContainer = document.getElementById("comments-container");

  commentsContainer.innerHTML = "";

  comentarios.forEach((comentario) => {
    let divComentario = document.createElement("div");
    divComentario.classList.add("comment");
    divComentario.innerHTML = `
            <strong>${comentario.nombre}</strong> <em>(${comentario.fecha})</em>
            <p>${comentario.texto}</p>
        `;
    commentsContainer.appendChild(divComentario);
  });
}
