const { DataTypes } = require('sequelize')
const db = require('../../dbConfig')

db.sync().then(console.log('Sincronizado'))
const User = db.define(
	'user',
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ timestamps: false }
)

module.exports = User
