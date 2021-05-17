import { useEffect, useState } from "react";
import { useBooks } from "../../hooks/useBooks";
import { Link } from 'react-router-dom';

import { FiRefreshCcw } from 'react-icons/fi';
import { Navigation } from "../../components/Navigation";
import { SearchBox } from "../../components/SearchBox";

import defaultImage from "../../assets/images/search_default_img.png";

import { Container, GridContainer, ResultsBox, Footer } from './styles';

export function Search() {
  const { REACT_APP_MAX_RESULTS, REACT_APP_LOAD_MORE } = process.env;
  const maxResults = Number(REACT_APP_MAX_RESULTS) || 9;
  const loadMore = Number(REACT_APP_LOAD_MORE) || 3;

  const {
    searchResults,
    setSearchResults,
    saveCurrentDetailBook,
    increaseResults
  } = useBooks();

  useEffect(() => {
    if(!searchResults){
      return setSearchResults([]);
    }
  });

  return (
    <Container>
      <SearchBox />
      <ResultsBox>{searchResults.length} result(s)</ResultsBox>
      <GridContainer>
        {searchResults && searchResults.map(result =>(
          <Link
            to='/details'
            className="image__card"
            onClick={() => saveCurrentDetailBook(result)}
            key={result.id}
          >
            <img
              src={result.volumeInfo.imageLinks?.thumbnail || defaultImage}
              alt="Searched books"
            />
            <h1>{decodeURI(result.volumeInfo.title)}</h1>
            <span>{result.volumeInfo.authors}<br/></span>
          </Link>
        ))}
        </GridContainer>
        {searchResults.length >= maxResults && (
          <Footer>
            <FiRefreshCcw />
            <button
              type="button"
              onClick={() => increaseResults(loadMore)}
            >
            Load more
            </button>
          </Footer>
        )}
      <Navigation />
    </Container>
  );
}
