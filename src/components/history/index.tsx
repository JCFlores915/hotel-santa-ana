import { Row, Col, Card } from 'antd'
import './index.scss'
const History = () => {
    return (
        <div className='container'>
            <Row gutter={16} className='history__container'>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className='history__container__text'>
                    <h1>Hotel Santa Ana</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo voluptates cupiditate, ipsum provident facere modi tempora ducimus enim dicta laborum esse aliquam rem assumenda dolores.</p>
                    <p>Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga. Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi consequatur quae sequi ex, ipsa facere qui ut recusandae. Quod earum cupiditate quaerat assumenda.Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi consequatur quae sequi ex, ipsa facere qui ut recusandae.</p>
                    <Row  gutter={16}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <h3>Address</h3>
                            <p>Av. 1234, Santa Ana, Costa Rica</p>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <h3>Phone</h3>
                            <p>1234-5678</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className='history__container__card'>
                    <Card hoverable className='history__container__card__img'>
                        <img src="https://via.placeholder.com/75x100" alt="hotel" />
                        <h3>Hotel Santa Ana</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo voluptates cupiditate, ipsum provident facere modi tempora ducimus enim dicta laborum esse aliquam rem assumenda dolores.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default History