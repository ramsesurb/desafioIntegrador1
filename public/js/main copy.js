const socket = io();
//agregar prodcto
const form = document.getElementById("productForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = form.elements.titulo.value;
  const precio = form.elements.precio.value;
  const descripcion = form.elements.descripcion.value;
  const code = form.elements.code.value;
  const stock = form.elements.stock.value;
  const thumbnail = form.elements.thumbnail.value;

  console.log(event);
  socket.emit("nuevoProducto", {
    titulo,
    precio,
    descripcion,
    code,
    stock,
    thumbnail,
  });
});
//eliminar producto
const form2 = document.getElementById("productForm2");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = parseInt(form2.elements.id.value);

  console.log(id);
  socket.emit("quitarProducto", { id });
});

socket.on("actualizarTabla", (data) => {
  renderizarTabla(data);
});
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
//render producto

const renderizarTabla = (data) => {
  const tbody = document.getElementById("prodDisplay");

  const productsMap = data
    .map((item) => {
      return `<tr>
  <th scope="row">${item.id}</th>
  <td>${item.titulo}</td>
  <td>${item.precio}</td>
  <td>${item.stock}</td>
  <td><img src="${item.thumbnail}" width="50"></td>
  </tr>
  `;
    })
    .join("");
  tbody.innerHTML = productsMap;
};
