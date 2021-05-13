import { Profile } from "../Profile";
import { SearchBox } from "../SearchBox";

import { Link } from 'react-router-dom';

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <SearchBox />
      <Profile name="Lucas Giraldelli" />
    </Container>
  );
}
