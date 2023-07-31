import { Col, Row } from "antd"
// xs={24} sm={24} md={24} xl={12}
export const Home = () => {
    return (
      <>
        <Row gutter={3}>
          <Col style={{ backgroundColor: 'red'}} xs={24} sm={24} md={12} xl={6}>
            
          </Col>
          <Col style={{ backgroundColor: 'blue'}} xs={24} sm={24} md={12} xl={12}>col-2</Col>
          <Col style={{ backgroundColor: 'green'}} xs={24} sm={24} md={8} xl={6}>col-s</Col>
        </Row>
      </>
    )
}