import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useBooks, Book } from '../../hooks/useBooks';
import { FiArrowLeft } from 'react-icons/fi';
import Parser from 'html-react-parser';

import detailsBg from '../../assets/images/details_header.png';
import detailsOval from '../../assets/images/details_oval.png';
import defaultImage from "../../assets/images/search_default_img.png";

import { Container } from './styles'

export function Details() {
  const history = useHistory();
  const {
    currentDetailsBook,
    saveCurrentDetailBook
  } = useBooks();

  useEffect(() => {
    if(!currentDetailsBook.id) {
      saveCurrentDetailBook({} as Book);
      history.push('/');
      return;
    }
  }, []);

  return (
    <Container>
      <button type="button" onClick={() => history.goBack()}>
        <FiArrowLeft/>
      </button>
      {currentDetailsBook.id && (
        <>
          <header className="header__container">
            <img src={detailsBg} alt="Header of details" />
            <img src={detailsOval} alt="Header oval" />
            <img src={currentDetailsBook.volumeInfo.imageLinks?.thumbnail || defaultImage} alt="Book in detail" />
          </header>
          <main className="main__container">
            <h1 className="main__title">
              {currentDetailsBook.volumeInfo.title}
            </h1>
            <span className="main__author">
              {currentDetailsBook.volumeInfo.authors}
            </span>
            <p className="main__description">
              {Parser(currentDetailsBook.volumeInfo.description.trim())}
            </p>
          </main>
        </>
      )}
    </Container>
  );
}
