import React, {useEffect} from 'react';

import Container from '@material-ui/core/Container';
import {useAuth} from '../context/AuthContext'
import {Form, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.css';
import i18next from "i18next";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUpFrom() {
    i18next.changeLanguage(localStorage.getItem("lang"));
    const {signUp, error} = useAuth();
    const [username, setUsername] = React.useState("+905368236908");
    const [password, setPassword] = React.useState("123456");
    const [name, setName] = React.useState("aykut yurtmen");
    const [email, setEmail] = React.useState("aykut14@gmail.com");
    const [country, setCountry] = React.useState("USA");
    const [city, setCity] = React.useState("İstanbul");
    const [companyName, setCompanyName] = React.useState("Daimontech");
    const [saleType, setSaleType] = React.useState("RETAIL");
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

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
            offset: 5,
            span: 16,
        },
    };

    const handleError = () => {
        setOpenSnackBar(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const onFinish = (e) => {

        console.log(e);
        signUp({
            name: e.name,
            username: e.username,
            email: e.email,
            password: e.password,
            country: "test",
            city: "test",
            companyName: "test",
            saleType: 1,
            photoOne: "",
            photoTwo: "",
        });
    };

    useEffect(() => {
        if (error !== undefined && error !== '') {
            handleError()
        }
    }, [error]);

    const onFinishFailed = (errorInfo) => {
    };

    return (
        <Container component="main" maxWidth="sm" style={{marginTop: 180}}>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Phone Number"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input onChange={(e) => setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >

                    <Input.Password onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input onChange={(e) => setName(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button size={"large"} type="primary" htmlType="submit" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    );
}