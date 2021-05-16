import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useBooks } from '../../hooks/useBooks';

import bookImg from '../../assets/icons/book.svg';
import ovalImg from '../../assets/images/discover_oval.png';
import ovalSmallImg from '../../assets/images/discover_oval_small.png';
import triangleImg from '../../assets/images/discover_triangle.png';
import rectangleImg from '../../assets/images/discover_rectangle.png';

import { Container } from "./styles";
import { Header } from '../../styles/global';

export function DiscoverBook() {
  const {
    saveCurrentDetailBook,
    discoverBook,
    setDiscoverBook,
  } = useBooks();

  async function populateDiscoverBook() {
    const { REACT_APP_BOOKS_API_KEY } = process.env;

    const book1 = await api.get(`/dsz5AwAAQBAJ?key=${REACT_APP_BOOKS_API_KEY}`);

    const book2 = await api.get(`/U10PAQAAMAAJ?key=${REACT_APP_BOOKS_API_KEY}`);

    const bookIds = [book1.data.id, book2.data.id]; // like if we had already the listing

    const doesntHaveId = discoverBook.every((book, idx) => book.id !== bookIds[idx]);

    if(doesntHaveId) {
      setDiscoverBook([...discoverBook, book1.data, book2.data]);
    }
  }

  useEffect(() => {
    populateDiscoverBook();
  }, []);

  return (
    <>
      <Header>
        <h1>Discover New Book</h1>
        <p>More</p>
      </Header>
      <Container>
        {discoverBook.map(book =>(
          <Link to="/details" onClick={() => saveCurrentDetailBook(book)} key={book.id} >
            <div className="shell">
              <img src={ovalImg} alt="Discover oval" />
              <img src={ovalSmallImg} alt="Discover oval small" />
              <img src={triangleImg} alt="Discover triangle" />
              <img src={rectangleImg} alt="Discover rectangle" />
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors}</p>
              <div>
                <img src={bookImg} alt="reads" />
                <span>120+ Read Now</span>
              </div>
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book Cover" />
            </div>
          </Link>
          )
        )}
      </Container>
    </>
  )
}
