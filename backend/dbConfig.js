const Sequelize = require('sequelize'); 

const db = new Sequelize ("comanda", "user", "pass", { 
    dialect: "sqlite", 
    storage: "./database.sqlite" ,
    timestamps: false
    
})

module.exports = db;