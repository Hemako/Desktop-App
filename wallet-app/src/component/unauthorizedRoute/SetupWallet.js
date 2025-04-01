import React, { useState } from "react";
import { Button, Card, Space } from "antd";
import plus_icon from "../../assets/plus_grey.png";
import { useNavigate } from "react-router-dom";

function SetupWallet() {
  const navigate = useNavigate();
  return (
    <>
      <Space direction="vertical" size={20} style={{ width: "80%", marginTop: "3rem" }}>
        <h1>Welcome to Wallet</h1>
        <Card style={{ borderRadius: "16px" }}>
          <img
            src={plus_icon}
            alt="plusIcon"
            style={{
              height: 32,
              marginVertical: 16,
              width: 32,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <p style={{ fontSize: "16px", textAlign: "center", marginBottom: 12, fontWeight: "500" }}>
            Let's get setup!
          </p>
          <p style={{ fontSize: "14px", textAlign: "center", marginBottom: 12 }}>
            This will create a new Wallet and Secret Recovery Phrase
          </p>
          <Button
            className="common-btn"
            type="primary"
            size="large"
            onClick={() => navigate("/register-wallet")}
          >
            Create a wallet
          </Button>
        </Card>
        <Card style={{ borderRadius: "16px" }}>
          <img
            src={plus_icon}
            alt="plusIcon"
            style={{
              height: 32,
              marginVertical: 16,
              width: 32,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <p style={{ fontSize: "16px", textAlign: "center", marginBottom: 12, fontWeight: "500" }}>
            I have a Secret Revovery Phrase
          </p>
          <p style={{ fontSize: "14px", textAlign: "center", marginBottom: 12 }}>
            Import your existing wallet using your secret recovery phrase
          </p>
          <Button
            className="common-btn"
            type="primary"
            size="large"
            onClick={() => navigate("/recover-wallet")}
          >
            Recover Wallet
          </Button>
        </Card>
      </Space>
    </>
  );
}

export default SetupWallet;
