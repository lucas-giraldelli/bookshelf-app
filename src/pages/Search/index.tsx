import { Navigation } from "../../components/Navigation";
import { SearchBox } from "../../components/SearchBox";

import bookImg from '../../assets/images/details_book_sample.png';

import { Container } from './styles';

export function Search() {
  return (
    <>
      <SearchBox />
      <Container>
        <div className="image__card">
          <img src={bookImg} alt="Searched books" />
          <h1>Hooked</h1>
          <span>by Nir Eyal</span>
        </div>
        <div className="image__card">
          <img src={bookImg} alt="Searched books" />
          <h1>Hooked</h1>
          <span>by Nir Eyal</span>
        </div>
        <div className="image__card">
          <img src={bookImg} alt="Searched books" />
          <h1>Hooked</h1>
          <span>by Nir Eyal</span>
        </div>
        <div className="image__card">
          <img src={bookImg} alt="Searched books" />
          <h1>Hooked</h1>
          <span>by Nir Eyal</span>
        </div>
        <div className="image__card">
          <img src={bookImg} alt="Searched books" />
          <h1>Hooked</h1>
          <span>by Nir Eyal</span>
        </div>
        <div className="image__card">
          <img src={bookImg} alt="Searched books" />
          <h1>Hooked</h1>
          <span>by Nir Eyal</span>
        </div>
      </Container>
      <Navigation />
    </>
  );
}
