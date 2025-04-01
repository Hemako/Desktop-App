import { Button, Form, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const RecoverWallet = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = () => {
    navigate("/");
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

        <h1 style={{ display: "flex", marginTop: "-15px" }}>Recover Wallet</h1>
        <p style={{ display: "flex" }}>
          {" "}
          Enter your 12-word recovery phrase exactly as provided during wallet creation.
        </p>

        <Form layout={"vertical"} form={form} onFinish={onFinish}>
          <Form.Item
            label={null}
            name="email"
            rules={[{ required: false, message: "Please input your email!" }]}
          >
            <TextArea rows={5} size="large" variant="filled" />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="common-btn register-btn"
            >
              Recover Wallet
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
};

export default RecoverWallet;
