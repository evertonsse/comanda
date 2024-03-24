import { createContext, useState, useEffect } from 'react'
import api from '../api/api'
import { Navigate } from 'react-router-dom'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const loadingStorageData = async () => {
			const storageUser = localStorage.getItem('@Auth:user')
			const storageToken = localStorage.getItem('@Auth:token')

			if (storageUser && storageToken) {
				setUser(storageUser)
			}
		}
		loadingStorageData()
	}, [])

	const Login = async ({ email, password }) => {
		try {
			const response = await api.post('/login', { email, password })
			
				if (response.status != 200) {
					console.log(response.data)
					alert('Erro ao fazer login.')
				}
					const { token } = response.data
	
					setUser(response.data.userId)
					localStorage.setItem('@Auth:token', token)
					localStorage.setItem('@Auth:user', response.data.userId)
					api.defaults.headers.common[
						'Authorization'
					] = `Bearer ${response.data.login}`
				
			
		} catch (error) {
			if (error.response.status == 401) {
				console.log("Não foi possível logar")
			}

			return false 
		}
		
		

		
	}

	const SingOut = () => {
		localStorage.removeItem('@Auth:token')
		localStorage.removeItem('@Auth:user')
		setUser(null)
		return <Navigate to="/login" />
	}

	return (
		<AuthContext.Provider
			value={{ user, signed: !!user, Login, SingOut }}
		>
			{children}
		</AuthContext.Provider>
	)
}
