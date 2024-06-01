import { Container, Row, Col, Image } from "react-bootstrap";

export default function AboutPage() {
  return (
    <Container className="about-page">
      <Row>
        <Col>
          <h1 className="text-center mb-4">About Us</h1>
          <p className="text-muted text-center">Welcome to our blog! Here, we share insightful articles, tips, and stories on a variety of topics. Our mission is to provide valuable content that informs, entertains, and inspires our readers.</p>
        </Col>
      </Row>
      <Row className="py-5 bg-light">
        <Col md={6}>
          <h2 className="mt-4">Mission</h2>
          <p className="text-muted">I mission is to create a platform where knowledge and experiences are shared, helping our readers to grow and learn in various aspects of life.</p>
        </Col>
        <Col md={6}>
          <h2 className="mt-4">Vision</h2>
          <p className="text-muted">I vision is to become a go-to resource for quality content that makes a positive impact on people s lives.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Meet Developer</h2>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col className="team-member">
          <Image src="https://via.placeholder.com/150" roundedCircle />
          <h4 className="mt-3">Wesley Luan</h4>
          <p className="text-muted">Founder & Developer</p>
        </Col>
      </Row>
      <Row className="mt-5 py-5 bg-light">
        <Col>
          <h2 className="text-center">Contact Me</h2>
          <p className="text-muted text-center">I love to hear from you! Feel free to reach out to  via social media channels or email <a href="mailto:contact@ourblog.com">wesleyweb3.0@gmail.com</a>.</p>
        </Col>
      </Row>
    </Container>
  );
}
