import { Carousel, Row, Space, Button } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import './index.scss'
import CardEmail from '../../shared/CardEmail';



const CarouselHome = () => {
    return (
        <Carousel autoplay dotPosition='right'>
            <div className='corousel__item'>
                <div className='container'>
                    <Row className='corousel__item__text'>
                        <div className='corousel__item__col__text'>
                            <h1>BIENVENIDO A HOTEL SANTA ANA</h1>
                            <ul>
                                <li><StarOutlined /> Disfruta de la comodidad de nuestras habitaciones</li>
                                <li><StarOutlined /> Relajate en nuestra piscina</li>
                                <li><StarOutlined /> Disfruta de la mejor comida en nuestro restaurante</li>
                            </ul>
                            <Space className='corousel__item__space'>
                                <Button type='primary'>Reservar</Button>
                                <Button>Ver más</Button>
                            </Space>
                        </div>
                        <div className='corousel__item__col__card'>
                            <CardEmail />
                        </div>
                    </Row>
                </div>
            </div>
            <div className='corousel__item'>
                <div className='container'>
                    <Row className='corousel__item__text'>
                        <div className='corousel__item__col__text'>
                            <h1>BIENVENIDO A HOTEL SANTA ANA</h1>
                            <ul>
                                <li><StarOutlined /> Disfruta de la comodidad de nuestras habitaciones</li>
                                <li><StarOutlined /> Relajate en nuestra piscina</li>
                                <li><StarOutlined /> Disfruta de la mejor comida en nuestro restaurante</li>
                            </ul>
                            <Space className='corousel__item__space'>
                                <Button type='primary'>Reservar</Button>
                                <Button>Ver más</Button>
                            </Space>
                        </div>
                        <div className='corousel__item__col__card'>
                            <CardEmail />
                        </div>
                    </Row>
                </div>
            </div>
            <div className='corousel__item'>
                <div className='container'>
                    <Row className='corousel__item__text'>
                        <div className='corousel__item__col__text'>
                            <h1>BIENVENIDO A HOTEL SANTA ANA</h1>
                            <ul>
                                <li><StarOutlined /> Disfruta de la comodidad de nuestras habitaciones</li>
                                <li><StarOutlined /> Relajate en nuestra piscina</li>
                                <li><StarOutlined /> Disfruta de la mejor comida en nuestro restaurante</li>
                            </ul>
                            <Space className='corousel__item__space'>
                                <Button type='primary'>Reservar</Button>
                                <Button>Ver más</Button>
                            </Space>
                        </div>
                        <div className='corousel__item__col__card'>
                            <CardEmail />
                        </div>
                    </Row>
                </div>
            </div>
            <div className='corousel__item'>
                <div className='container'>
                    <Row className='corousel__item__text'>
                        <div className='corousel__item__col__text'>
                            <h1>BIENVENIDO A HOTEL SANTA ANA</h1>
                            <ul>
                                <li><StarOutlined /> Disfruta de la comodidad de nuestras habitaciones</li>
                                <li><StarOutlined /> Relajate en nuestra piscina</li>
                                <li><StarOutlined /> Disfruta de la mejor comida en nuestro restaurante</li>
                            </ul>
                            <Space className='corousel__item__space'>
                                <Button type='primary'>Reservar</Button>
                                <Button>Ver más</Button>
                            </Space>
                        </div>
                        <div className='corousel__item__col__card'>
                            <CardEmail />
                        </div>
                    </Row>
                </div>
            </div>
        </Carousel>
    )
}

export default CarouselHome