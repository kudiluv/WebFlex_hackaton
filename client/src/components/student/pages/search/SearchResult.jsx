import React from "react";
import { Link } from "react-router-dom";
import styles from './styles/search.module.css';

const SearchResult = (props) => {
    return (
        <Link to={`/lecture/${props.item.id}`}>
            <div className={styles.search__result}>
                <h2 className={styles.result__title}>{props.item.name}</h2>
                <p className={styles.result__shortDesc}>{props.item.description}</p>
                <p className={styles.result__date}>Дата: {props.item.updatedAt}</p>
            </div>
        </Link>
    )
}

export default SearchResult;