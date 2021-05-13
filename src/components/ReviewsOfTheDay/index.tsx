
import imgReviews from '../../assets/images/reviews.png';

import { Header } from "../../styles/global";
import { Container } from "./styles";

export function ReviewsOfTheDay() {
  return (
    <>
      <Header>
          <h1>Reviews of The Day</h1>
          <p>All videos</p>
      </Header>
      <Container>
        <img src={imgReviews} alt="Reviews video" />
      </Container>
    </>
  );
}
