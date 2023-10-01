import { Button, Checkbox, Form, Input, Space } from "antd";
import {
  login_bg,
  login_btn,
  login_formsize,
  login_wrapper,
} from "../../css/login";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

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

const LoginBg = () => {
  return (
    <>
      <div style={login_wrapper}>
        <div style={login_bg}>
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
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: "#9F9C9C" }} />}
                placeholder="이메일을 입력해주세요"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: "#9F9C9C" }} />}
                placeholder="비밀번호를 입력해주세요"
              />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>로그인 상태 유지하기</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={login_btn}>
                로그인
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginBg;
