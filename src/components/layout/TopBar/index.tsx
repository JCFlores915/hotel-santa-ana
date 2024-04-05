
import './index.scss'
import { PhoneFilled, MailFilled} from '@ant-design/icons'
import { Space } from 'antd'
const HeaderSmall = () => {
    return (
        <div className='topbar'>
            <div className='container'>
                <div className='inner'>
                    <div className='inner__msg__bienvenida'>Bienvenido a Hotel Santa Ana</div>

                    <ul className='inner__msg__contact'>
                        <li><Space><PhoneFilled /> [Numero]</Space></li>
                        <li><Space><MailFilled />[Correo]</Space></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderSmall