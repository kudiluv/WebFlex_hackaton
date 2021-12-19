import React from "react";
import docPreview from './../media/images/word.png';
import videoPreview from './../media/images/video-icon.png';
import style from './style/style.module.css';

const FilePreview = (props) => {
    return (
        <a href={`${process.env.REACT_APP_LOCALHOST}/${props.path}`} target="_blank">
            <div className={style.lecture}>
                <div className={style.preview}><img src={props.type === "word" ? docPreview : videoPreview} alt='' /></div>
                <div className={style.date}>{props.updatedAt}</div>
            </div>
        </a>
    )
}

export default FilePreview;

