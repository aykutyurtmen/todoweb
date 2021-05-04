import React, {useEffect} from 'react';
import i18next from 'i18next';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import {useAuth} from '../context/AuthContext';
import 'antd/dist/antd.css';
import { Form, Input, Button,} from 'antd';

export default function SignIn() {
    i18next.changeLanguage(localStorage.getItem("lang"));
    const { login} = useAuth();
    const [username, setUsername] = React.useState("+905368236908");
    const [password, setPassword] = React.useState("123456");
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 16,
        },
    };

        const onFinish = (values) => {
            login(username, password);
        };

        return (
            <Container component="main" maxWidth="sm" style={{ marginTop: 180 }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label = {i18next.t('username')}
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: i18next.t("validUsername"),
                        },
                    ]}
                >
                    <Input onChange={(e) => setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label= {i18next.t('password')}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: i18next.t("validPass"),
                        },
                    ]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        {i18next.t('login')}
                    </Button>
                    <Link style={{ marginLeft: 20 }} href="/signup" >
                        {i18next.t('signup')}
                    </Link>
                </Form.Item>
            </Form>
            </Container>
        );
}