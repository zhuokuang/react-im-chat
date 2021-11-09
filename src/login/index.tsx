import { useHistory } from "react-router";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";
import { useCallback } from "react";

export const Login = () => {
  const history = useHistory();

  const onFinish = useCallback(
    (form) => {
      history.push("/chat");
    },
    [history]
  );
  return (
    <Form
      className="login-wrap"
      wrapperCol={{ offset: 10, span: 4 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
        <Button className="login-form-button" type="primary" htmlType="submit">
          login
        </Button>
      </Form.Item>
    </Form>
  );
};
