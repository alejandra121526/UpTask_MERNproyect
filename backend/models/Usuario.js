import mongoose from 'mongoose'

const usuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    n_identificacion: {
        type: String
    },
    telefono: { 
        type: String
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    
},{
    timestamps: true, //fecha de creacion y fecha de actualizacion
});

const Usuario = mongoose.model("Usuario", usuarioSchema)
export default Usuario;