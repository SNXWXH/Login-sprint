import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Layout, Space } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  backgroundForm,
  wrapper,
  signUp_ment,
  signUp_input_id,
  signUp_input_pw,
  signUp_input_pwCheck,
  signUp_signUp,
  signup_formsize,
  signUp_extrament,
  button_back,
  button_signup,
} from "../../css/signCss";

const SignUpForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [checkPassword, setCheckPassword] = useState("");

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const email = event.target.value;
  //   setEmail(email);
  // };

  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const password = event.target.value;
  //   setPassword(password);
  // };

  // const handleCheckPasswordChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const checkPassword = event.target.value;
  //   setCheckPassword(checkPassword);
  // };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <>
      <div style={wrapper}>
        <div style={backgroundForm}>
          <p style={signUp_ment}>스터디 관리 어플의 회원이 되어주세요!</p>
          <h1 style={signUp_signUp}>회원가입</h1>
          <Form
            name="basic"
            style={signup_formsize}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                style={signUp_input_id}
                type="text"
                placeholder="이메일을 입력해주세요."
                prefix={<MailOutlined style={{ color: "#9F9C9C" }} />}
                // value={email}
                // onChange={handleEmailChange}
                // autoFocus={true}
              />
            </Form.Item>
            <p style={signUp_extrament}>
              사용자 이메일은 반드시 @를 포함하여야 합니다.
            </p>
            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                style={signUp_input_pw}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                prefix={<LockOutlined style={{ color: "#9F9C9C" }} />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                // value={password}
                // onChange={handlePasswordChange}
              />
            </Form.Item>
            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                style={signUp_input_pwCheck}
                placeholder="확인을 위해 비밀번호를 한번 더 입력해주세요."
                prefix={<LockOutlined style={{ color: "#9F9C9C" }} />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                // value={checkPassword}
                // onChange={handleCheckPasswordChange}
              />
            </Form.Item>
            <p style={signUp_extrament}>
              비밀번호는 하나 이상의 특수문자 포함, 8~20자 이내여야 합니다.
            </p>
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              style={{ marginTop: "-20px" }}
            >
              <Checkbox
                style={{
                  color: "white",
                  fontSize: "12px",
                  marginTop: "40px",
                }}
              >
                개인정보 수집 및 이용에 동의합니다.
              </Checkbox>
            </Form.Item>
          </Form>

          <Space wrap>
            <Button type="primary" style={button_back}>
              돌아가기
            </Button>
            <Button
              type="primary"
              style={button_signup}
              // onClick={axiosSignUp}
            >
              가입
            </Button>
          </Space>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
