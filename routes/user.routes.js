const {Router} =require('express');

const { usuariosGet, usuariosPut, usuarioPost, usuarioDelete, usuarioPatrch } = require('../controllers/user.controllers');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuarioPost );

router.delete('/', usuarioDelete );

router.patch('/', usuarioPatrch );

module.exports = router;