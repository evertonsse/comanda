const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config')
const Op = require('sequelize')
const crypt = require('../utils/crypt')

const authenticate = async (req, res) => {
	const { username, password } = req.body

	const user = await User.findOne({
		where: {
			username,
		},
	})
	if (user) {
		if (await crypt.checkPassword(password, user.password)) {
			const token = jwt.sign({ userId: user.id }, config.secret, {
				expiresIn: 30000,
			})
			return res.json({ auth: true, token , userId: user.id})
		}
	} else {
		return res.status(401).json('Não autorizado.')
	}
}

module.exports = authenticate;
