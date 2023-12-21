const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async (req, res = response) => {
    
    const { correo, password}= req.body;


    try {
        //Verificar si el correo existe

        const usuario = await Usuario.findOne({ correo })
        if (!usuario) {
            return res.status(400).json({ msg: "Correo o Contraseña incorrecta - correo no existe" });
        }
        //Si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({ msg: "Correo o Contraseña incorrecta - estado: false" });
        }
        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({ msg: "Correo o Contraseña incorrecta - Password error" });
        }
        //Generar el JWT
        const token = await generarJWT( usuario.id )

        res.json({
            usuario,
            token
            
        });
    


    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Algo salio mal, hable con el administrador"})
    }

}

module.exports = {
    login
}