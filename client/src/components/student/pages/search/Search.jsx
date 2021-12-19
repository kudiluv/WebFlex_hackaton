import React from "react";
import PageTitle from "../../../pageTitle/index";
import styles from './styles/search.module.css';
import SearchInput from "./SearchInput";
import Pagination from "../../../pagination";
import SearchResult from "./SearchResult";

const Search = (props) => {
    return (
        <>
            <PageTitle text="Поиск"/>
            <div className={styles.search__content}>
                <SearchInput></SearchInput>
                <div className={styles.results}>
                    <SearchResult></SearchResult>
                </div>
                <Pagination></Pagination>
            </div>
        </>
    )
}

export default Search;