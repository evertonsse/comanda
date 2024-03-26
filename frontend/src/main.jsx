import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from 'antd-style'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { PrivateRoute } from './privateRoutes.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoute />,
		children: [
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider  themeMode={'auto'}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>
)
