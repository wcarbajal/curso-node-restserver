const { request, response } = require('express');
const { } = require('../models/usuario')

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

const usuarioPost = (req = request, res = response) => {
  const {nombre, edad} = req.body;


  
  res.json({        
    msg: " es un post API - controlador ",
    nombre,
    edad
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