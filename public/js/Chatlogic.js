const socket = io();

//agregar mensaje

 
  socket.emit("nuevoChat", { usuario,mensaje });

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
