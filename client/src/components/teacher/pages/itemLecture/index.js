import React, {useEffect} from 'react';
import RollBack from "../../../rollBack";
import style from './style/style.module.css';
import { fetchLecture } from '../../../store/thunks/lectures';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FilePreview from '../../../filepreview/FilePreview';

const ItemLecture = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLecture(`/lectures/${id}`));
    },[id,dispatch]);
    const lecture = useSelector(state => state.lectureReducer.lecture);
    return (
        <>{ lecture ? 
            <>
            <RollBack text={lecture.lecture.name}/>

            <div className={style.itemLecture}>
                <div className={style.header}>
                    <div className={style.description}>
                        Описание лекции, какой-то большой текст,
                        описывающий содержимое текст текст текст
                    </div>
                    <svg width="50px" height="50px" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" >
                    <g><path d="M343.4,875.1l-1.9-5.2l-165,60L47.4,822l24.9-162.8l-5.5-0.8L42.5,817.9l-1.1-0.9L10,997l171.6-62.8l-0.2-0.2L343.4,875.1z"/><path d="M990,401.1"/><path d="M560,80.7l6.7,5.8L70.2,655.1l-6.7-5.8L560,80.7L560,80.7z"/><path d="M790.5,347.9l6.7,5.8L337.1,880.8l-6.7-5.8L790.5,347.9L790.5,347.9z"/><path d="M564.3,80l271.6,237.1L801,357L529.4,119.9L564.3,80z"/><path d="M322.3,884.1l-75.1-65.6L161,743.3l-96.6-84.4l4.4-5.1L326.7,879L322.3,884.1z"/><path d="M858.7,290.7c-5.7,6.5-14.8,7.9-20.3,3.1L584.9,72.4c-5.5-4.8-5.4-14,0.3-20.5l37.5-43c5.7-6.5,14.8-7.9,20.3-3.1l253.6,221.4c5.5,4.8,5.4,14-0.3,20.5L858.7,290.7z"/><path d="M536.6,229l26.6,22.5L191.8,691.1l-26.6-22.5L536.6,229z"/><path d="M666.9,344.6l26.3,22.9L314.5,801l-26.3-22.9L666.9,344.6L666.9,344.6z"/></g>
                    </svg>

                </div>
                <div className={style.content}>

                    {lecture.documents.map(
                        item => {
                            return (
                                <FilePreview type={item.type} path={item.path} updatedAt={item.updatedAt}></FilePreview>
                            )
                        }
                    )}

                </div>
            </div> </>: ''}
        </>
    );
};

export default ItemLecture;