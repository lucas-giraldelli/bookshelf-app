import bookImg from '../../assets/images/book_sample.png';
import bookReading from '../../assets/icons/book_reading.svg';

import { Header } from '../../styles/global';
import { Container } from "./styles";

export function CurrentlyReading() {
  return (
    <>
      <Header>
        <h1>Currently Reading</h1>
        <p>All</p>
      </Header>
      <Container>
        <div>
          <img src={bookImg} alt="Current book"/>
          <div>
            <h2>Originals</h2>
            <h3>by Adam Grant</h3>
            <span>
              <img src={bookReading} alt="Icon of reading book" />
              <p>Chapter <span>2</span> from 9</p>
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}
