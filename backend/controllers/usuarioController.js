import Usuario from "../models/Usuario.js";
const registrar = async (req, res) => {

    //evitar registros autenticados
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email })

    if (existeUsuario) {
        const error = new Error("Usuario ya existe")
        return res.status(400).json({ msg: error.message})
    }
    
    try {
        const usuario = new Usuario(req.body)
        const usuarioAlmacenado =  await usuario.save()
        res.json(usuarioAlmacenado)
    } catch (error) {
        console.log(error)
    }


}



export {  registrar };