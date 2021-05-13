import detailsHeader from '../../assets/images/details_header.png';
import bookInDetail from '../../assets/images/details_book_sample.png';

import { Container } from './styles'
import { useHistory } from 'react-router';
import { FiArrowLeft } from 'react-icons/fi';

export function Details() {
  const history = useHistory();

  return (
    <Container>
      <button type="button" onClick={() => history.goBack()}>
        <FiArrowLeft/>
      </button>
      <header className="header__container">
        <img src={detailsHeader} alt="Header of details" />
        <img src={bookInDetail} alt="Book in detail" />
      </header>
      <main className="main__container">
        <h1 className="main__title">
          Hooked: How to build Habid-Forming Products
        </h1>
        <span className="main__author">
          Nir Eyal
        </span>

        <p className="main__description">
          How do successful companies create products people can’t put down?
          Why do some products capture widespread attention while others flop?
          Why do some products capture widespread attention while others flop?
          Why do some products capture widespread attention while others flop?
        </p>
      </main>


    </Container>
  );
}
