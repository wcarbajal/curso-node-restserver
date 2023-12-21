const { response } = require('express');


const login = (req, res = response) => {

    const { correo, password}= req.body;
    res.json({
        msg: 'login ok',
        correo, password
    });

}

module.exports = {
    login
}