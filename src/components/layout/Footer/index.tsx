import "./index.scss"
import { Row, Col, Button, Space } from 'antd'
// iconos de redes sociales de antd
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const Footer = () => {
    return (
        <div className="border__footer">
            <div className="container">
               <div>
                    <Row gutter={16} className='footer__container'>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} className='footer__container__text'>
                            <h1>Santa Ana</h1>
                            <h3><strong>Address:</strong> Lorem Ipsum</h3>
                            <h3><strong>Phone:</strong> 123456789</h3>
                            <h3><strong>Email:</strong> contact@hotel.com</h3>
                            <h3><strong>Website:</strong> www.hotel.com</h3>
                            {/* agregar botones de redes sociales con iconos de antd */}
                            <Space>
                            <Button type="primary" shape="circle" icon={<FacebookOutlined />} />
                            <Button type="primary" shape="circle" icon={<InstagramOutlined />} />
                            <Button type="primary" shape="circle" icon={<TwitterOutlined />} />
                            </Space>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} className='footer__container__text'>
                            <h1>Useful Links</h1>
                            <h3>Location</h3>
                            <h3>Rooms</h3>
                            <h3>Services</h3>
                            <h3>Gallery</h3>
                            <h3>Contact</h3>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} className='footer__container__text'>
                            <h1>Support</h1>
                            <h3>Terms & Conditions</h3>
                            <h3>Privacy Policy</h3>
                            <h3>FAQs</h3>

                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} className='footer__container__text'>
                            <h1>Latest News</h1>
                            <h3>News 1</h3>
                            <h3>News 2</h3>
                            <h3>News 3</h3>
                            <h3>News 4</h3>

                        </Col>
                    </Row>
                    <Row gutter={16} className='footer__container__corper' justify={'center'}>
                            <h3>© 2021 Santa Ana. All Rights Reserved.</h3>
                    </Row>
               </div>
            </div>
        </div>
    )
}

export default Footer