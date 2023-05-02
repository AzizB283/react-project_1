import React from 'react';
import { Button, Form, Input, Select, Card, QRCode, Space } from 'antd';

const { Option } = Select;
const { Meta } = Card;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function AntDesign() {
    
    const [text, setText] = React.useState('https://techcupid.in/');
    const [form] = Form.useForm();
    const onGenderChange = (value) => {
      switch (value) {
        case 'male':
          form.setFieldsValue({
            note: 'Hi, man!',
          });
          break;
        case 'female':
          form.setFieldsValue({
            note: 'Hi, lady!',
          });
          break;
        case 'other':
          form.setFieldsValue({
            note: 'Hi there!',
          });
          break;
        default:
      }
    };
    const onFinish = (values) => {
      console.log(values);
    };
    const onReset = () => {
      form.resetFields();
    };
    const onFill = () => {
      form.setFieldsValue({
        note: 'Hello world!',
        gender: 'male',
      });
    };
  return (
    <>
    <div className="container my-4">

    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>


    <h2>Card Styles</h2>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>

  <h2 className="my-4">QR Code</h2>
  <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
    </div>
    </>
  )
}

export default AntDesign