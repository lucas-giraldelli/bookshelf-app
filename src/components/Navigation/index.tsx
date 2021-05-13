import { FiHome, FiBook, FiUser } from 'react-icons/fi';
import { Container } from './styles';

export function Navigation() {
  const iconSize = 1.35;

  return (
    <Container>
      <a className="nav__link --active">
        <FiHome size={`${iconSize}rem`}/>
        <span className="nav__text">Home</span>
      </a>
      <a className="nav__link">
        <FiBook size={`${iconSize}rem`}/>
        <span className="nav__text">Libraries</span>
      </a>
      <a className="nav__link">
        <FiUser size={`${iconSize}rem`}/>
        <span className="nav__text">Profile</span>
      </a>
    </Container>
  );
}
