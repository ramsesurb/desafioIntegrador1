const socket = io();

//agregar mensaje

const form = document.getElementById("chatForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuario = form.elements.usuario.value;
  const mensaje = form.elements.mensaje.value;
  
  console.log(event);
  socket.emit("nuevoChat", { usuario,mensaje });
});


socket.on("actualizarChat", (data) => {
  renderizarChat(data);
});
//render Chat
const renderizarChat = (data) => {
  const tbody = document.getElementById("chatDisplay");

  const productsMap = data
    .map((item) => {
      return `<tr>
  <th scope="row">${item.id}</th>
  <td>${item.usuario}</td>
  <td>${item.mensaje}</td>
  </tr>
  `;
    })
    .join("");
  tbody.innerHTML = productsMap;
}
