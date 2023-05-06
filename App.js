import express from "express";
import handlebars from "express-handlebars";

import configureWebSocketServer from "./config/SocketProd.js";
import routerCart from "./Routes/Cart.js";
import routerProd from "./Routes/Productos.js";
import staticProd from "./Routes/StaticProd.js";
import __dirname from "./utils.js";
import realTime from "./Routes/realTime.js";
import "./database.js"
import realTimeChat from "./Routes/Chat.js";

//express
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//socketIo
const { server } = configureWebSocketServer(app);

//handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: "./views/layouts",
    partialsDir: "views",
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//websocket
app.use("/realTimeProducts", realTime);
app.use("/Chat",realTimeChat)
//express estatico
app.use("/", staticProd);
//rutas api
app.use("/api/cart", routerCart);
app.use("/api/productos", routerProd);

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
