import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import MenuList from './components/MenuList'


const { Sider, Content, Footer } = Layout

const App = () => {
	return (
		<Layout style={{ height: '100vh' }}>
			<Sider> 
				<MenuList />
			</Sider>
			<Content>
				<Outlet />
			</Content>

			<Footer>Comanda</Footer>
		</Layout>
	)
}
export default App
