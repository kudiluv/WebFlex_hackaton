import React from 'react';
import style from './style/item.User.module.css'

const ItemUser = ({fio, email}) => {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <div><span>ФИО:</span> { fio }</div>
                <div><span>E-mail:</span> { email }</div>
            </div>
            <div className={style.delete} title="удалить">
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6875 69.6429C4.6875 72.606 6.78223 75 9.375 75H65.625C68.2178 75 70.3125 72.606 70.3125 69.6429V21.4286H4.6875V69.6429ZM28.125 34.1518C28.125 33.0469 28.916 32.1429 29.8828 32.1429H45.1172C46.084 32.1429 46.875 33.0469 46.875 34.1518V35.4911C46.875 36.596 46.084 37.5 45.1172 37.5H29.8828C28.916 37.5 28.125 36.596 28.125 35.4911V34.1518ZM70.3125 0H4.6875C2.09473 0 0 2.39397 0 5.35714V13.3929C0 14.8661 1.05469 16.0714 2.34375 16.0714H72.6562C73.9453 16.0714 75 14.8661 75 13.3929V5.35714C75 2.39397 72.9053 0 70.3125 0Z" fill="black"/>
                </svg>
            </div>
        </div>
    );
};

export default ItemUser;