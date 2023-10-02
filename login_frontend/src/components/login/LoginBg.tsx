import { Button, Checkbox, Form, Input, Space } from "antd";
import {
  login_bg,
  login_btn,
  login_formsize,
  login_wrapper,
  login_input,
  login_title,
  login_lost,
} from "../../css/login";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { naver, kakao, google, github } from "../../img";

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

// const { Content, Header, Sider } = Layout;

const LoginBg = () => {
  return (
    <div style={login_wrapper}>
      <div style={login_bg}>
        <p style={{ color: "white", fontSize: "12px" }}>이미 회원이신가요?</p>
        <p style={login_title}>로그인</p>
        <Form
          style={login_formsize}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              style={login_input}
              prefix={<MailOutlined style={{ color: "#9F9C9C" }} />}
              placeholder="이메일을 입력해주세요"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              style={login_input}
              prefix={<LockOutlined style={{ color: "#9F9C9C" }} />}
              placeholder="비밀번호를 입력해주세요"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            style={{ marginTop: "-20px" }}
          >
            <Checkbox style={{ color: "white", fontSize: "12px" }}>
              로그인 상태 유지하기
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={login_btn}>
              로그인
            </Button>
          </Form.Item>
        </Form>
        <Space size={"large"}>
          <img src={naver} alt="네이버" />
          <img src={kakao} alt="카카오" />
          <img src={google} alt="구글" />
          <img src={github} alt="깃허브" />
        </Space>
        <Space style={login_lost}>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "white", fontSize: "12px" }}>
              아직 회원이 아니신가요?
            </p>
            <p
              style={{
                textDecoration: "underline",
                color: "white",
                fontSize: "16px",
              }}
            >
              회원가입
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "white", fontSize: "12px" }}>
              비밀번호를 잊으셨나요?
            </p>
            <p
              style={{
                textDecoration: "underline",
                color: "white",
                fontSize: "16px",
              }}
            >
              비밀번호 찾기
            </p>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default LoginBg;
