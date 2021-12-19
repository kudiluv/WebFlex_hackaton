import React from "react";
import { Link } from "react-router-dom";
import styles from './styles/search.module.css';

const SearchResult = (props) => {
    return (
        <Link to={props.id}>
            <div className={styles.search__result}>
                <h2 className={styles.result__title}>Какой то заголовок</h2>
                <p className={styles.result__shortDesc}>Описание, но только короткое, а то не поместится</p>
                <p className={styles.result__date}>Дата: </p>
            </div>
        </Link>
    )
}

export default SearchResult;