import { Button, Col, Form, Input, Row } from "antd"

export const Login = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col>
        <Form>
          <Form.Item>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
