import { Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { passwd_input } from './PasswdInputStyle';
import { LoginType } from '../../../types';

const PasswdInput = () => {
  return (
    <>
      <Form.Item<LoginType>
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          style={passwd_input}
          prefix={<LockOutlined style={{ color: '#9F9C9C' }} />}
          placeholder='비밀번호를 입력해주세요'
        />
      </Form.Item>
    </>
  );
};

export default PasswdInput;
