import { FormEvent } from 'react';
import { FiHome, FiBook, FiUser } from 'react-icons/fi';
import { Container } from './styles';

export function Navigation() {
  const iconSize = 1.35;

  function handleOnClick(ev: FormEvent) {
    //just for deactivating annoying lints and click problems
    ev.preventDefault();
    ev.stopPropagation();
  }

  return (
    <Container>
      <a href="#"  className="nav__link nav__link--active" onClick={handleOnClick} >
        <FiHome size={`${iconSize}rem`}/>
        <span className="nav__text">Home</span>
      </a>
      <a href="#"  className="nav__link" onClick={handleOnClick} >
        <FiBook size={`${iconSize}rem`}/>
        <span className="nav__text">Libraries</span>
      </a>
      <a href="#"  className="nav__link" onClick={handleOnClick} >
        <FiUser size={`${iconSize}rem`}/>
        <span className="nav__text">Profile</span>
      </a>
    </Container>
  );
}
