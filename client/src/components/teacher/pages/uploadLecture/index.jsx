import React, { useState } from "react";
import PageTitle from "../../../pageTitle/index";
import styles from './styles/index.module.css';
import { lectureApi } from "../../../api/lecture.api";

const UploadLecture = (props) => {
    const [uploadLecture,setUploadLecture] = useState({
        name: "",
        files: []
    });
    const handleSubmit = async (event) => {
        let result = "";
        event.preventDefault();
        if (uploadLecture.name !== "" && uploadLecture.files.length !== 0) {
            const data = new FormData(document.forms.add);
            result = await lectureApi.upload(data);
        }
    }
    return (
        <div className={styles.wrapper}>
            <PageTitle text="Загрузить"></PageTitle>
            <form className={styles.content} name="add">
                <input onChange={event => setUploadLecture({...uploadLecture, name: event.target.value})} className={styles.input} type="text" placeholder="Название лекции" name="name" />
                <textarea className={styles.textarea} id="" cols="30" rows="10" placeholder="Короткое описание лекции" resize="none" name="description"></textarea>
                <input onChange={event => setUploadLecture({...uploadLecture, files: event.target.files})} id={styles.uploadFile} type="file" multiple= "multiple" draggable={true} name="files" />
                <label htmlFor={styles.uploadFile} className={styles.upload} draggable={true}>
                    <div>
                        <svg width="60" height="60" viewBox="0 0 150 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M117.857 61.3125V70.6875C117.857 72.6211 116.049 74.2031 113.839 74.2031H84.375V99.9844C84.375 101.918 82.567 103.5 80.3571 103.5H69.6429C67.433 103.5 65.625 101.918 65.625 99.9844V74.2031H36.1607C33.9509 74.2031 32.1429 72.6211 32.1429 70.6875V61.3125C32.1429 59.3789 33.9509 57.7969 36.1607 57.7969H65.625V32.0156C65.625 30.082 67.433 28.5 69.6429 28.5H80.3571C82.567 28.5 84.375 30.082 84.375 32.0156V57.7969H113.839C116.049 57.7969 117.857 59.3789 117.857 61.3125ZM150 14.4375V117.562C150 125.326 142.801 131.625 133.929 131.625H16.0714C7.19866 131.625 0 125.326 0 117.562V14.4375C0 6.67383 7.19866 0.375 16.0714 0.375H133.929C142.801 0.375 150 6.67383 150 14.4375ZM133.929 115.805V16.1953C133.929 15.2285 133.025 14.4375 131.92 14.4375H18.0804C16.9754 14.4375 16.0714 15.2285 16.0714 16.1953V115.805C16.0714 116.771 16.9754 117.562 18.0804 117.562H131.92C133.025 117.562 133.929 116.771 133.929 115.805Z" fill="black"/>
                        </svg>
                    </div>
                </label>
                <button className={styles.submit} onClick={handleSubmit}>Добавить лекцию</button>
            </form>
        </div>
    );
}

export default UploadLecture;