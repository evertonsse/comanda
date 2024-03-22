import { createContext, useState, useEffect } from 'react'
import api from '../api/api'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null); 


    useEffect(()=>{
        const loadingStorageData = async() => {
            const storageUser = localStorage.getItem('@Auth:user');
            const storageToken = localStorage.getItem('@Auth:token');

			
            if (storageUser && storageToken) { 
                setUser(storageUser)
            }
        }
        loadingStorageData();

    }, [])

	const Login = async ({email, password}) => {
		const response = await api.post('/login', { email, password })

		if (response.data.error) {
			alert('Erro ao fazer login')
		} else {
			const { token } = response.data
			
			setUser(response.data.userId)
			localStorage.setItem('@Auth:token', token)
			localStorage.setItem('@Auth:user', response.data.userId)
			api.defaults.headers.common[
				'Authorization'
			] = `Bearer ${response.data.login}`
		}
	}

	return (
		<AuthContext.Provider value={{ user, signed: !!user, Login}}>
			{children}
		</AuthContext.Provider>
	)
}
