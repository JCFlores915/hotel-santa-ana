
import { Card, Input, Form, DatePicker, Button, Row, Col } from 'antd';
const CardEmail = () => {
    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <Card title={'¿Quieres reservar una habitación?'}>
            <Form form={form} onFinish={onFinish} layout='vertical'>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item
                            name="date"
                            label="Fecha de llegada y salida"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor selecciona la fecha de llegada y salida',
                                },
                            ]}
                        >
                            <RangePicker style={{
                                width: '100%',
                            }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                            name="name"
                            label="Nombre"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingresa tu nombre',
                                },
                            ]}
                        >
                            <Input placeholder="Nombre" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                            name="phone"
                            label="Telefono"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingresa tu telefono',
                                },
                            ]}
                        >
                            <Input placeholder="Telefono" />
                        </Form.Item>
                    </Col>
                </Row>
               <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingresa tu email',
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item
                            name="message"
                            label="Mensaje"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor ingresa un mensaje',
                                },
                            ]}
                        >
                            <Input.TextArea placeholder="Mensaje" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Reservar
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default CardEmail