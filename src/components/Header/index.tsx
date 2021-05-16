import { Profile } from "../Profile";
import { SearchBox } from "../SearchBox";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <SearchBox />
      <Profile name="Lucas Giraldelli" />
    </Container>
  );
}
