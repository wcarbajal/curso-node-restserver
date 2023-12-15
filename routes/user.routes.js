const {Router} =require('express');

const { usuariosGet, usuariosPut, usuarioPost, usuarioDelete, usuarioPatrch } = require('../controllers/user.controllers');
const { check } = require('express-validator');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', [
  check( 'correo', 'correo no valido').isEmail()
] , usuarioPost );

router.delete('/', usuarioDelete );

router.patch('/', usuarioPatrch );

module.exports = router;