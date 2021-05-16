import { useBooks } from "../../hooks/useBooks";
import { Link } from 'react-router-dom';

import { Navigation } from "../../components/Navigation";
import { SearchBox } from "../../components/SearchBox";

import defaultImage from "../../assets/images/search_default_img.png";

import { Container } from './styles';
import { useEffect } from "react";

export function Search() {
  const {
    searchResults,
    setSearchResults,
    saveCurrentDetailBook,
  } = useBooks();

  useEffect(() => {
    if(!searchResults){
      return setSearchResults([]);
    }
  })

  return (
    <>
      <SearchBox />
      <Container>
        {searchResults && searchResults.map(result =>(
          <Link to='/details' className="image__card" onClick={() => saveCurrentDetailBook(result)} key={result.id}>
            <img src={result.volumeInfo.imageLinks?.thumbnail || defaultImage} alt="Searched books" />
            <h1>{decodeURI(result.volumeInfo.title)}</h1>
            <span>{result.volumeInfo.authors}<br/></span>
          </Link>
        ))}
      </Container>
      <Navigation />
    </>
  );
}
