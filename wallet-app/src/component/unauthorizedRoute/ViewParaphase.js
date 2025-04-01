import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewParaphase = () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  const user = {
    paraphrase: "hello hello hello hello hello hello hello hello hello hello hello hello",
  };
  const navigate = useNavigate();

  return (
    <>
      <Space
        direction="vertical"
        size={20}
        style={{ width: "80%", justifyContent: "center", marginTop: "3rem" }}
      >
        <h1 style={{ display: "flex", marginTop: "-15px" }}>Wallet Recovery</h1>
        <p style={{ display: "flex", textAlign: "justify" }}>
          {" "}
          Write down your 12-word recovery phrase exactly as shown. Keep it safe and secret. This
          phrase is your key to wallet recovery. Copy the words carefully, and store them securely.{" "}
        </p>
        <div
          className="word-container"
          style={{
            marginTop: "1rem",
            columnCount: 3,
          }}
        >
          {user?.paraphrase?.split(" ").map((word, index) => (
            <div
              key={index}
              className="word-box"
              style={{
                background: "#fff",
                borderRadius: "4px",
                padding: "0.7rem",
                marginBottom: "1rem",
              }}
            >
              {word}
            </div>
          ))}
        </div>
        <Button
          className="common-btn register-btn"
          type="primary"
          size="large"
          onClick={() => navigate("/")}
        >
          I've taken a Note
        </Button>
      </Space>
    </>
  );
};

export default ViewParaphase;
