import chatModel from '../Config/chat.js';

class ChatManager {
    async getChat() {
      try {
        const content = JSON.parse(
          const content = await chatModel.find()
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
        const result = await chatModel.create(newChat)
        );
      } catch (error) {
        console.log(error);
      }
    }
  
    async deleteById(id) {
      try {
        const deleteByid = await chatModel.findOneAndDelete({id:id})
        console.log("chat eliminado");
        return deleteByid;
      } catch (error) {
        console.log(error);
      }
    }
    async deleteAll() {
      try {
        let chatucts = await rute.getChat();
        chatucts.splice(0, chatucts.length);
  
       
      } catch (error) {
        console.log(error);
      }
    }
  }
  export default ChatManager;
  const rute = new ChatManager("./Data/Chat.json");
 
