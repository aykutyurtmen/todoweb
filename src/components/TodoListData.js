import React, {useContext, useEffect, useState} from 'react';
import {List, Typography, Divider, Input, DatePicker, Space, Button, Modal, Form} from 'antd';
import 'antd/dist/antd.css';
import i18next from "i18next";
import Popup from "./Popup";

export default function TodoListData() {
    i18next.changeLanguage(localStorage.getItem("lang"));
    var existing = localStorage.getItem("todoList");
    existing = JSON.parse(existing);
    existing = existing ? existing : [];
    let data = [];
    let todoComplete = [];
    for (let i = 0; i < existing.length; i++) {
        data.push(existing[i].text);
        todoComplete.push(existing[i].complete);
    }
    let dates = '';
    let todoItem = '';
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [indexValue, setIndexValue] = useState(null);
    const [language, setLanguage] = useState(false);
    const [completed, setCompleted] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        var existing = localStorage.getItem("todoList");
        existing = JSON.parse(existing);
        existing = existing ? existing : [];
        var todoList = existing;
        if (indexValue === null) {
            todoList.push({date: dates, text: todoItem, complete: 'tamamlanmadi'});
        } else {
            todoList[indexValue].text = todoItem;
            todoList[indexValue].date = dates;
        }
        localStorage.setItem('todoList', JSON.stringify(todoList));
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function dateOnChange(date, dateString) {
        dates = dateString;
    }

    function itemOnChange(input) {
        todoItem = input.target.value;
    }

    const edit = (e) => {
        setIndexValue(e);
        showModal();
    };

    const changeCompleted = (e) => {
        var existing = localStorage.getItem("todoList");
        existing = JSON.parse(existing);
        existing = existing ? existing : [];
        var todoList = existing;
        todoList[e].complete = 'tamamlandi';
        localStorage.setItem('todoList', JSON.stringify(todoList));
        setCompleted(!completed);
    };
    const changeLang = (e) => {
        localStorage.setItem('lang', e);
        setLanguage(!language);
    };

    return (
        <>
            <Modal title={i18next.t('modalTitle')} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                   okText={i18next.t('ok')} cancelText={i18next.t('cancel')}>
                <Input placeholder="Basic usage" onChange={itemOnChange}/>
                <Space direction="vertical">
                    <DatePicker onChange={dateOnChange}/>
                </Space>
            </Modal>

            <Divider orientation="left">{i18next.t('todoApp')}
                <a onClick={() => changeLang('en')} style={{marginLeft: 1000}}>en </a>
                <a onClick={() => changeLang('tr')} style={{marginLeft: 10}}>tr</a></Divider>
            <List
                size="large"
                header={<div><Button type="primary" onClick={() => edit(null)} htmlType="submit">
                    {i18next.t('todoAdd')}
                </Button> </div>}
                footer={i18next.t('todoApp')}
                bordered
                itemLayout="vertical"
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[item]}
                        extra={
                            [<Button key="edit-button" style={{marginRight: 10}} type="primary"
                                     onClick={() => edit(data.indexOf(item))} htmlType="submit">
                                {i18next.t('edit')}
                            </Button>,
                                <Button key="complete-button" style={{marginRight: 10}} type="primary"
                                        onClick={() => changeCompleted(data.indexOf(item))} htmlType="submit">
                                    {i18next.t('complete')}
                                </Button>,
                                <p key="complete-button1">
                                    {i18next.t(todoComplete[data.indexOf(item)])},
                                </p>]
                        }
                    >
                    </List.Item>
                )}
            />
        </>
    );
}