const { request, response } = require('express');
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs');


const usuariosGet = (req = request, res = response ) => {
  const {q, nombre = 'no name', apikey} = req.query

  res.json({        
    msg: " es un get API - controlador",
    q,
    nombre,
    apikey
  })
}

const usuariosPut = (req = request, res = response) => {

  const { id } =  req.params;

  res.json({        
    msg: " es un put API - controlador",
    id
  })
}

const usuarioPost = async(req = request, res = response) => {
  

  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario( {nombre, correo, password, rol});
  

  // verificar que el correo no existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail){
        return res.status(400).json({
            msg: "El correo ya se encentra registrado"
        })
    }


  //Encriptar la contaseña
  const salt =  bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt)


  // Guardar en BD

  await usuario.save();

  
  res.json({        
    msg: " es un post API - controlador ",
    usuario
    

  })
}

const usuarioDelete = (req = request, res = response) => {


  res.json({        
    msg: " es un delete API - controlador"
  })
}

const usuarioPatrch = (req, res = response) => {
  res.json({        
    msg: " es un patch API - controlador"
  })
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuarioPost,
  usuarioDelete,
  usuarioPatrch
}