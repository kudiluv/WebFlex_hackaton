import React from 'react';
import style from './style/style.module.css'
import LectureItem from "./Lecture/Lecture";


const LecturesList = () => {
    let items = [
        {
            id: '1',
            title: 'Название лекции',
            description: 'Описание лекции - о чем она, цели, задачи и прочее (Длинный текст)',
            date: '12.12.2021 16:32'
        }, {
            id: '2',
            title: 'Название лекции',
            description: 'Описание лекции - о чем она, цели, задачи и прочее (Длинный текст)',
            date: '12.12.2021 16:32'
        },
        {
            id: '3',
            title: 'Название лекции',
            description: 'Описание лекции - о чем она, цели, задачи и прочее (Длинный текст)',
            date: '12.12.2021 16:32'
        }, {
            id: '4',
            title: 'Название лекции',
            description: 'Описание лекции - о чем она, цели, задачи и прочее (Длинный текст)',
            date: '12.12.2021 16:32'
        },
        {
            id: '5',
            title: 'Название лекции',
            description: 'Описание лекции - о чем она, цели, задачи и прочее (Длинный текст)',
            date: '12.12.2021 16:32'
        }, {
            id: '6',
            title: 'Название лекции',
            description: 'Описание лекции - о чем она, цели, задачи и прочее (Длинный текст)',
            date: '12.12.2021 16:32'
        }
    ]


    return (
        <div className={style.lectures}>
            <div className={style.container}>
                {items.map(item =>
                    <LectureItem
                        title={item.title}
                        description={item.description}
                        date={item.date}
                    />)}
            </div>
        </div>
    );
};

export default LecturesList;