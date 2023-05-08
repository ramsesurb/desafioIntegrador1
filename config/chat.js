import mongoose from "mongoose"

const Collection = 'chat'

const chatSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  }
});
  
const productoModel = mongoose.model(Collection, chatSchema);
 

  export default productoModel
