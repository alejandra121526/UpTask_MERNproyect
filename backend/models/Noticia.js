/*import mongoose from 'mongoose'

const noticiasSchema = mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        required: true,
    },
    descripcion:{
        type: String,
        trim: true,
        required: true,
    },
    imagenUrl: {
        type: String
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
    }
},{
    timestamps: true, //fecha de creacion y fecha de actualizacion
})

noticiasSchema.methods.setImgUrl = function setImgUrl() {

}

const Noticia = mongoose.model("Noticia", noticiasSchema)
export default Noticia*/