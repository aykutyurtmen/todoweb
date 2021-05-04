import React, {useContext, useEffect, useMemo, useState} from 'react';
import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css';
import i18next from "i18next";

export default function CalendarData() {
    i18next.changeLanguage(localStorage.getItem("lang"));
    var existing = localStorage.getItem("todoList");
    existing = existing ? existing : [];
    existing = JSON.parse(existing);
    var data;

    function getListData(value) {
        let listData;
        for(var i=0; i<existing.length; i++) {
            data = existing[i].date.substring(8,10);
            if(existing[i].complete === "tamamlandi")
            {
                existing[i].complete = 'success';
            }
            data = parseInt(data);
            switch (value.date()) {
                case data :
                    listData = [
                        {type: existing[i].complete, content: existing[i].text},
                    ];
                    break;
                default:
            }
        }
        return listData || [];
    }

    function dateCellRender(value) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {
                    listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))
                }
            </ul>
        );
    }

    function getMonthData(value) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

     return(
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    );
}