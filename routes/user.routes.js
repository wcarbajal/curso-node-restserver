const {Router} =require('express');

const { usuariosGet, usuariosPut, usuarioPost, usuarioDelete, usuarioPatrch } = require('../controllers/user.controllers');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar.campos');
const { esRoleValido } = require('../helpers/db-validators');


const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', [
    check( 'nombre', 'el nombre es obligatorio').not().isEmpty(),
    check( 'password', 'el password debe ser mayor a 6 letras').isLength({min: 6}),
    check( 'correo', 'correo no valido').isEmail(),
    //check( 'rol', 'no es un rol valido').isIn('ADMIN_ROL', 'USER_ROL'),
    check('rol').custom( esRoleValido ),
    validarCampos
   
] , usuarioPost );

router.delete('/', usuarioDelete );

router.patch('/', usuarioPatrch );

module.exports = router;