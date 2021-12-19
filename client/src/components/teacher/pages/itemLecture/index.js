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
                        {lecture.lecture.description}
                    </div>

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