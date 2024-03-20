
const express = require('express');
const routes = express.Router();
const auth= require("../controllers/authController");
const createUser = require("../controllers/users/createUser");
const verifyToken = require("../utils/verifyToken");


routes.post("/login",  async(req, res)=> {
    await auth(req, res);
    
} );

routes.post("/user", async(req, res)=> {
    await createUser(req, res);
    
} );

routes.use(verifyToken);



module.exports = routes;