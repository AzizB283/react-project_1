import React, { useState } from "react";
import { Button, Form, Input, Select, InputNumber, Space } from "antd";
const { TextArea } = Input;
const { Option } = Select;

function UserForm() {
  const [inputValue, setInputValue] = useState(0.1);

  const validateMessages = {
    required: "${label} is required!",
  };

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <>
      <h1
        style={{
          maxWidth: 600,
          margin: "auto",
        }}
      >
        Enter Details Here
      </h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          margin: "auto",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "10px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Select Model"
          required
          rules={[
            {
              required: true,
              message: "Please select model",
            },
          ]}
          name="openaiModel"
        >
          <Select placeholder="Select a model">
            <Option value="gpt-3.5-turbo">gpt 3.5 - turbo</Option>
            <Option value="text-davinci-002">text-davinci-002</Option>
            <Option value="text-davinci-003">text-davinci-003</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Temprature"
          required
          rules={[{ required: true, message: "Please input temprature" }]}
          name="temparature"
        >
          <InputNumber
            min={0}
            max={1}
            defaultValue={0}
            step={0.1}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="Query"
          required
          rules={[
            {
              required: true,
              message: "Please enter query",
            },
          ]}
          name="clientQuestion"
        >
          <TextArea placeholder="Enter your query here" rows={4} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UserForm;
