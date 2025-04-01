import { Button, Form, Input, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

function RegisterWalletForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = () => {
    navigate("/view-paraphase");
  };

  return (
    <>
      <Space
        direction="vertical"
        size={20}
        style={{ width: "80%", justifyContent: "center", marginTop: "3rem" }}
      >
        <Button
          type="text"
          size="large"
          onClick={() => navigate("/")}
          icon={<ArrowLeftOutlined />}
          style={{ display: "flex", justifyContent: "flex-start", background: "none" }}
        />

        <h1 style={{ display: "flex", marginTop: "-15px" }}>Register Wallet</h1>

        <Form layout={"vertical"} form={form} onFinish={onFinish}>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: false, message: "Please input your email!" }]}
          >
            <Input size="large" variant="filled" placeholder="john@doe.com" />
          </Form.Item>

          <Form.Item
            label="Wallet Key"
            name="walletkey"
            rules={[{ required: false, message: "Please input your wallet key!" }]}
          >
            <Input size="large" variant="filled" />
          </Form.Item>
          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="common-btn register-btn"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
}

export default RegisterWalletForm;
