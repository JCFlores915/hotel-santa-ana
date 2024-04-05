import './index.scss'
import { Row, Col, Card } from 'antd'
const GridRooms = () => {
    return (
        <div className='container'>
            <Row gutter={16} className='gridrooms__container'>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className='gridrooms__container__text'>
                    <h1>Our Best Rooms</h1>
                    <h3>Our best rooms available for your vacation.</h3>
                </Col>
            </Row>
            <Row gutter={16} >
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card
                        hoverable
                        className='gridrooms__container__card'
                        extra={
                            <div className='room__price'>
                                <h4>$100 / night</h4>
                            </div>
                        } 
                        
                    >
                        <div className='gridrooms__container__card__footer' >
                            <h2>Nombre del cuarto</h2>
                            <p>2 Adults / 2 Children    Doble</p>
                        </div>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default GridRooms