const bcrypt = require('bcrypt');

async function hashPassword(password) {
    try {
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error('Erro ao criptografar a senha:', error);
        throw error;
    }
}
// Função para verificar se a senha está correta
async function checkPassword(plainPassword, hashedPassword) {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error('Erro ao verificar a senha:', error);
        throw error;
    }
}

module.exports = {hashPassword, checkPassword};
