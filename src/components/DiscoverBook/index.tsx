import bookImg from '../../assets/icons/book.svg';
import bookCover from '../../assets/images/details_book_sample.png';

import { Header } from '../../styles/global';
import { Container } from "./styles";

export function DiscoverBook() {
  return (
    <>
      <Header>
        <h1>Discover New Book</h1>
        <p>More</p>
      </Header>
      <Container>
        <div>
          <h2>Hooked</h2>
          <p>Nir Eyal</p>
          <span>
            <img src={bookImg} alt="reads" />
            120+ Read Now
          </span>
          <img src={bookCover} alt="Book Cover" />
        </div>
        <div>
          <h2>Hooked</h2>
          <p>Nir Eyal</p>
          <span>
            <img src={bookImg} alt="reads" />
            120+ Read Now
          </span>
          <img src={bookCover} alt="Book Cover" />
        </div>
        <div>
          <h2>Hooked</h2>
          <p>Nir Eyal</p>
          <span>
            <img src={bookImg} alt="reads" />
            120+ Read Now
          </span>
          <img src={bookCover} alt="Book Cover" />
        </div>
      </Container>
    </>
  )
}
