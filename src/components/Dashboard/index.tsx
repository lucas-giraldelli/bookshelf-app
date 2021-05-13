
import { DiscoverBook } from "../DiscoverBook";
import { CurrentlyReading } from '../CurrentlyReading';
import { Container } from "./styles";
import { ReviewsOfTheDay } from "../ReviewsOfTheDay";

export function Dashboard() {
  return (
    <Container>
      <DiscoverBook />
      <CurrentlyReading />
      <ReviewsOfTheDay />
    </Container>
  );
}
