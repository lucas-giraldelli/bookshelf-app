import { useEffect } from 'react';

import { useBooks } from '../../hooks/useBooks';
import { useHistory } from 'react-router-dom';
import searchImg from '../../assets/icons/search.svg';

import { Container } from './styles';

export function SearchBox() {
  const history = useHistory();
  const {
    focused,
    setFocused,
    searchBoxValue,
    setSearchBoxValue,
    handleInputChange,
    handleInputSubmit
  } = useBooks();

  useEffect(() => {
    if(searchBoxValue) {
      history.push('/search');
    } else {
      setSearchBoxValue('');
      return history.push('/');
    }
  }, [searchBoxValue])

  return (
    <Container isFocused={focused} onSubmit={handleInputSubmit}>
      <img src={searchImg} alt="Search" />
      <input
        autoFocus={true}
        type="text"
        placeholder="Search book"
        value={searchBoxValue}
        onChange={handleInputChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Container>
  )
}
