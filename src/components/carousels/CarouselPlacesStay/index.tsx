import './index.scss';
import { Row, Col } from 'antd';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px'
}

const slideImages = [
    {
        url: 'https://via.placeholder.com/500x200',
        caption: 'Slide 1'
    },
    {
        url: 'https://via.placeholder.com/500x200',
        caption: 'Slide 2'
    },
    {
        url: 'https://via.placeholder.com/500x200',
        caption: 'Slide 3'
    },
];

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const responsiveSettings = [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const CarouselPlacesStay = () => {
    return (
        <div className='container'>
            <Row gutter={16} className='gridrooms__container'>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className='carouselplacesstay__container__text'>
                    <h1>The best places to stay</h1>
                    <h3>Plenty of services to assure your relaxation and comfortability.</h3>
                </Col>
            </Row>
            <Row gutter={16} >
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="slide-container">
                        <Slide
                            {...properties}
                            easing="ease"
                            indicators={true}
                            arrows={true}
                            autoplay={true}
                            responsive={responsiveSettings}
                        >
                            {slideImages.map((slideImage, index) => (
                                <div key={index}>
                                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                        <span style={spanStyle}>{slideImage.caption}</span>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CarouselPlacesStay