/*
{
    nombre: 'nombre',
    correo: 'correo',
    password: 'password',
    img: 'img',
    rol: 'rol',
    estado: true,
    google: false,


}*/

const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],        
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true        
    },
    password: {
        type: String,
        required: [true, 'El correo es obligatorio']         
    },
    img: {
        type: String        
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROL'] 
    },
    estado: {
        type: Boolean,
        default: true        
    },
    google: {
        type: Boolean,
        default: false        
    }
    
});


module.exports = model('Usuario', UsuarioSchema);