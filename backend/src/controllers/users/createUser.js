const User = require('../../models/user')
const crypt = require('../../utils/crypt');

const createUser = async (req, res) => {
    const {password} = req.body
	req.body.password = await crypt.hashPassword(password)

	const user = await User.create(req.body)
	if (user) {
		return res.status(200).json(user)
	} else {
		return res.status(400).json()
	}
}

module.exports = createUser;
