import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
             <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p> Duis incididunt dolor aliqua non excepteur amet reprehenderit voluptate commodo est. Nulla cupidatat irure exercitation non nostrud esse quis ipsum ea. Amet laboris ea ullamco deserunt officia laboris laborum. Eu ut nulla dolor Lorem enim anim do officia laborum aliquip velit sint non. Laborum amet ad in aliqua cupidatat dolor nisi et do. Excepteur Lorem excepteur commodo consectetur. Laborum culpa adipisicing aliquip tempor ut sunt velit labore consectetur anim magna. </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>Web Development</h5>
                            </div>
                            <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5>Web Development</h5>
                            </div>
                            <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5>Web Development</h5>
                            </div>
                    </Carousel>
                    </div>
                    </Col>
                    </Row>
             </Container>
             <img className="background-image-left" src={colorSharp} />
        </section>
      )
}