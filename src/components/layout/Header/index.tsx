
import './index.scss'
import { Layout, Menu } from 'antd';

const { Header: AntHeader } = Layout;
const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <AntHeader className='header__menu'> 
            <div className='header__menu__logo'>
            <img src='https://via.placeholder.com/250x50' alt='logo' />
            </div>
            <Menu className='header__menu__items'
            theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Inicio</Menu.Item>
                <Menu.Item key="2">Habitaciones</Menu.Item>
                <Menu.Item key="3">Contacto</Menu.Item>
                <Menu.Item key="4">Reservas</Menu.Item>
                <Menu.Item key="5">Nosotros</Menu.Item>
            </Menu>
            </AntHeader>
        </div>
    </div>
  )
}

export default Header