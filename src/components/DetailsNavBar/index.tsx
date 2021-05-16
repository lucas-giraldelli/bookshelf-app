import { FiBookOpen, FiShare } from "react-icons/fi";
import { RiHeadphoneFill } from "react-icons/ri";
import { Container, VerticalDivisor } from "./styles";

export function DetailsNavBar() {
  return (
  <Container>
    <a>
      <FiBookOpen />
      Read
    </a>
    <VerticalDivisor />
    <a>
      <RiHeadphoneFill />
      Listen
    </a>
    <VerticalDivisor />
    <a>
      <FiShare />
      Share
    </a>
  </Container>
  );
}
