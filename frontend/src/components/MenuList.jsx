import { Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const MenuList = () => { 
	return (
		
			<Menu mode="vertical" theme='dark' style={{border: '0px'}} >
				<Menu.Item icon = {<HomeOutlined/>} >
					Home
				</Menu.Item>
                <Menu.Item icon = {<HomeOutlined/>} >
					Mesas
				</Menu.Item>
                <Menu.Item icon = {<HomeOutlined/>} >
					Pedidos
				</Menu.Item>
                <Menu.Item icon = {<HomeOutlined/>} >
					Funcionários
				</Menu.Item>
			</Menu>
		
	)
}

export default MenuList
