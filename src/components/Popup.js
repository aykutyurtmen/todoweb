import React, {useEffect, useState} from 'react';
import {Modal, Button, Input, Space, DatePicker} from 'antd';
import i18next from "i18next";

const Popup = (props) => {
    const {visible, onOk, onCloseFunc, dateChange, dataInput} = props;
    const [isModalVisible, setIsModalVisible] = useState(visible);
    const [indexValue, setIndexValue] = useState(null);
    var date1;
    var todoItem;

    const handleClose = () =>{
        onCloseFunc()
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };


//{props.children}
    return (
        <>
            <Modal title={i18next.t('modalTitle')} visible={visible} onOk={onOk} onCancel={handleClose}
                   okText={i18next.t('ok')} cancelText={i18next.t('cancel')}>
                <Input placeholder="Basic usage" onChange={dataInput}/>
                <Space direction="vertical">
                    <DatePicker onChange={dateChange}/>
                </Space>
            </Modal>
        </>
    );
};

export default Popup

