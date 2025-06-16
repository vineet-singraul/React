import Carousel from 'react-bootstrap/Carousel';
import b1 from '../Assets/B1.png';
import b2 from '../Assets/B2.png';
import b3 from '../Assets/B3.png';
import b4 from '../Assets/B4.png';
import b5 from '../Assets/B5.png';
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={b1} alt="Modern Living Room" />
                    <Carousel.Caption>
                        <h3>Modern Living Spaces</h3>
                        <p>Experience comfort and elegance with our modern living room collections.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={b2} alt="Kitchen Interior" />
                    <Carousel.Caption>
                        <h3>Stylish Kitchen Designs</h3>
                        <p>Upgrade your culinary space with sleek and functional kitchen layouts.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={b3} alt="Bedroom Setup" />
                    <Carousel.Caption>
                        <h3>Cozy Bedroom Vibes</h3>
                        <p>Relax and recharge in beautifully designed, cozy bedroom spaces.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={b4} alt="Outdoor Patio" />
                    <Carousel.Caption>
                        <h3>Outdoor Inspirations</h3>
                        <p>Create the perfect outdoor retreat with stylish furniture and lighting.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={b5} alt="Home Office" />
                    <Carousel.Caption>
                        <h3>Functional Home Offices</h3>
                        <p>Boost productivity with ergonomic and inspiring office setups at home.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Hero;
