import { Button, Checkbox, Form, Space } from 'antd';
import {
  login_bg,
  login_btn,
  login_formsize,
  login_wrapper,
  login_title,
  login_lost,
} from '../authStyle/loginCss';

import { useMutation } from '@tanstack/react-query';
import useLogin from '../queryHooks/useLogin';
import { EmailInput, PasswdInput } from '../../../Common/commonComp';
import { LoginType } from '../../../types';

const LoginForm = () => {
  const { handleLoginSubmit } = useLogin();
  const { mutate } = useMutation(handleLoginSubmit);

  return (
    <div style={login_wrapper}>
      <div style={login_bg}>
        <p style={{ color: 'white', fontSize: '12px' }}>이미 회원이신가요?</p>
        <p style={login_title}>로그인</p>
        <Form
          style={login_formsize}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={(data) => {
            mutate(data);
          }}
          autoComplete='off'
        >
          <EmailInput />

          <PasswdInput />

          <Form.Item<LoginType>
            name='remember'
            valuePropName='checked'
            style={{ marginTop: '-20px' }}
          >
            <Checkbox style={{ color: 'white', fontSize: '12px' }}>
              로그인 상태 유지하기
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              style={login_btn}
              // disabled={isLoading}
            >
              로그인
            </Button>
          </Form.Item>
        </Form>
        <Space size={'large'}>
          <img src={'/publicAssets/naver.svg'} alt='네이버' />
          <img src={'/publicAssets/kakao.svg'} alt='카카오' />
          <img src={'/publicAssets/google.svg'} alt='구글' />
          <img src={'/publicAssets/github.svg'} alt='깃허브' />
        </Space>
        <Space style={login_lost}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '12px' }}>
              아직 회원이 아니신가요?
            </p>
            <p
              style={{
                textDecoration: 'underline',
                color: 'white',
                fontSize: '16px',
              }}
            >
              회원가입
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '12px' }}>
              비밀번호를 잊으셨나요?
            </p>
            <p
              style={{
                textDecoration: 'underline',
                color: 'white',
                fontSize: '16px',
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

export default LoginForm;
