const jwt = require('jsonwebtoken')
const config = require('../config')

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization
	if (!authHeader) {
		return res.status(403).json({ error: 'No credentials sent!' })
	}
	const token = authHeader.split(' ')[1]
	
	try {
		const decoded = jwt.verify(token, config.secret)
		next();
		console.log(decoded)
		
		
	} catch (error) {
		if (error.name === 'TokenExpiredError') {
			return res.status(401).json({ error: 'Token expired' })
		}
		return res.status(401).json({ error: 'Invalid token' })
	}
}

module.exports = verifyToken
