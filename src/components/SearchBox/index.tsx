import { useState } from 'react';
import searchImg from '../../assets/icons/search.svg';

import { Container } from './styles';

export function SearchBox() {
  const [focused, setFocused] = useState(false);

  return (
    <Container isFocused={focused}>
      <img src={searchImg} alt="Search" />
      <input
        type="text"
        placeholder="Search book"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Container>
  )
}