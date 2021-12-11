import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login, isLogin } from "@/utils/auth";
import "./index.css";

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    if (isLogin()) {
      history.push("/chat");
    }
  }, [history]);

  const onFinish = useCallback(
    (form) => {
      login({ ...form }).then(() => {
        history.push("/chat");
      });
    },
    [history]
  );
  return (
    <Form className="login-wrap" onFinish={onFinish}>
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
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button className="login-form-button" type="primary" htmlType="submit">
          login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
