import React, { useState } from "react";
import PageTitle from "../../../pageTitle/index";
import styles from './styles/search.module.css';
import SearchInput from "./SearchInput";
import Pagination from "../../../pagination";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

const Search = (props) => {
    const [page, setPage] = useState(1);
    const getCurrentPage = (value) => {
        setPage(value);
    }
    const results = useSelector(state => state.searchReducer.searchResults);
    return (
        <>
            <PageTitle text="Поиск"/>
            <div className={styles.search__content}>
                <SearchInput page={page}></SearchInput>
                <div className={styles.results}>
                    {results.rows.map(
                        (item) => {
                            return <SearchResult item={item}></SearchResult>
                        }
                    )}
                </div>
                {results.count > 15 ? <Pagination pages={results.pages} handlePage={getCurrentPage} current={page}></Pagination> : ""}
            </div>
        </>
    )
}

export default Search;