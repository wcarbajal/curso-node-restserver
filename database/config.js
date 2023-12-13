const mongoose = require('mongoose');

const dbConexion =  async () => {
    
    

    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
           /* useNewUrlPaParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,*/
            
        });
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}

module.exports = {
    dbConexion
}