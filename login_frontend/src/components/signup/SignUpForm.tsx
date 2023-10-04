import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { API } from "../../axios-create";
import { useMutation } from "@tanstack/react-query";
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
import { FieldType, SignupRequest } from "../../types/ISignUp";

const SignUpForm = () => {
  const handleSubmit = async (signupData: SignupRequest) => {
    const res = await API({
      method: "post",
      url: "/users",
      data: signupData,
    });

    return res.data;
  };

  const { mutate } = useMutation(handleSubmit);

  return (
    <>
      <div style={wrapper}>
        <div style={backgroundForm}>
          <p style={signUp_ment}>스터디 관리 어플의 회원이 되어주세요!</p>
          <h1 style={signUp_signUp}>회원가입</h1>
          <Form
            name="basic"
            style={signup_formsize}
            onFinish={(data) => {
              console.log("🚀  data:", data);

              mutate(data);
            }}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                style={signUp_input_id}
                type="text"
                placeholder="이메일을 입력해주세요."
                prefix={<MailOutlined style={{ color: "#9F9C9C" }} />}
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
              />
            </Form.Item>
            <Form.Item
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
              />
            </Form.Item>
            <p style={signUp_extrament}>
              비밀번호는 하나 이상의 특수문자 포함, 8~20자 이내여야 합니다.
            </p>
            <Form.Item<FieldType>
              name="personalInfo"
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
            <Form.Item>
              <Space wrap>
                <Button type="primary" style={button_back}>
                  돌아가기
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={button_signup}
                  // disabled={isLoading}
                >
                  가입
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
