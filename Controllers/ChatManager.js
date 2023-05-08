import productoModel from '../Config/chat.js';

class ChatManager {
    async getChat() {
      try {
        const content = JSON.parse(
          const content = await productoModel.find()
        );
        
        if (limit) {
          return content.slice(0, limit);
        }
        return content;
      } catch (error) {
        console.log(error);
        return [];
      }
    }
    async addMenssage(chat) {
      try {
        const saveCont = await this.getChat();
    
        if (
          !chat.usuario ||
          !chat.mensaje 
        ) {
          let mensaje = "Todos los campos son obligatorios";
          console.log(mensaje);
          return { error: mensaje };
        }
        const id = (Math.floor(Math.random() * 100) % 100).toString().padStart(5, '0');
        const newChat = {
          id: id,
          usuario: chat.usuario,
          mensaje: chat.mensaje
        };
        const result = await productoModel.create(newChat)
        );
      } catch (error) {
        console.log(error);
      }
    }
  
    async deleteById(id) {
      try {
        const content = await rute.getChat();
        const deleteByid = content.filter((e) => e.id !== id);
        console.log("chatucto eliminado");
        await fs.writeFile(
          `./Data/Chat.json`,
          JSON.stringify(deleteByid, null, 2)
        );
        return deleteByid;
      } catch (error) {
        console.log(error);
      }
    }
    async deleteAll() {
      try {
        let chatucts = await rute.getChat();
        chatucts.splice(0, chatucts.length);
  
        await fs.writeFile(
          `./Data/Chat.json`,
          JSON.stringify(chatucts, null, 2)
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
  export default ChatManager;
  const rute = new ChatManager("./Data/Chat.json");
 
