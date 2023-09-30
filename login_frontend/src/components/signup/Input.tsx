import React, { ChangeEvent, useCallback, useState } from "react";

import {
  LockOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { SignupRequest, SignupResponse } from "../../types/ISignUp";
import { API } from "../../axios-create";
import { AxiosError } from "axios";

const InputBox = () => {
  // const InputBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleCheckPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checkPassword = event.target.value;
    setCheckPassword(checkPassword);
  };

  const axiosSignUp = async () => {
    if (password === checkPassword) {
      try {
        const response = await API({
          method: "post",
          url: "users/signup",
          data: { email, password },
        });

        console.log(response);
      } catch (error: unknown) {
        const axiosError = error as AxiosError;
        console.log(axiosError);
      }
    }
  };

  return (
    <>
      <Space direction="vertical">
        <Input
          style={{ width: 345 }}
          size="large"
          type="text"
          placeholder="이메일을 입력해주세요."
          prefix={<MailOutlined />}
          value={email}
          onChange={handleEmailChange}
          // autoFocus={true}
        />
        <p style={{ fontSize: "12px" }}>
          사용자 이메일은 반드시 @를 포함하여야 합니다.
        </p>
        <Input.Password
          style={{ width: 345 }}
          size="large"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          prefix={<LockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          value={password}
          onChange={handlePasswordChange}
        />
        <Input.Password
          style={{ width: 345 }}
          size="large"
          placeholder="확인을 위해 비밀번호를 한번 더 입력해주세요."
          prefix={<LockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          value={checkPassword}
          onChange={handleCheckPasswordChange}
        />
        <p style={{ fontSize: "12px" }}>
          비밀번호는 하나 이상의 특수문자 포함, 8~20자 이내여야 합니다.
        </p>
      </Space>
      <br />
      <br />
      <Space wrap>
        <Button
          type="primary"
          size="large"
          style={{
            backgroundColor: "#585656",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          돌아가기
        </Button>
        <Button
          type="primary"
          size="large"
          style={{
            backgroundColor: "#F6C54D",
            fontSize: "16px",
            color: "#000000",
            fontWeight: "bold",
          }}
          onClick={axiosSignUp}
        >
          가입
        </Button>
      </Space>
    </>
  );
};

export default InputBox;
