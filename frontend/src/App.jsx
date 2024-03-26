import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

const App = () => {
	return (
		<Layout style={{ height: '100vh' }}>
			<Header>
				<Menu mode="horizontal" items={[{}]}/> 
			</Header>
			<Content >
				<Outlet />
			</Content>

			<Footer>Comanda</Footer>
		</Layout>
	)
}
export default App
