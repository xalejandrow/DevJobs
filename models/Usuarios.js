const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt');

const usuariosSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: String,
    expira: Date
});

// Método para hashearlos passwords
usuariosSchema.pre('save', async function(next) {
    // si el password ya está hasheado
    if(!this.isModified('password')){
        return next(); //deten la ejecución
    }
    // si no está hasheado
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    next();
})

module.exports = mongoose.model('Usuarios', usuariosSchema);