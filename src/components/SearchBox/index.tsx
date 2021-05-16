import { FormEvent, useEffect } from 'react';
import { ClassicSpinner } from "react-spinners-kit";

import { useBooks } from '../../hooks/useBooks';
import { useHistory } from 'react-router-dom';
import searchImg from '../../assets/icons/search.svg';

import { Container } from './styles';

export function SearchBox() {

  const history = useHistory();
  const {
    focused,
    setFocused,
    isLoading,
    displayValue,
    setDisplayValues,
    handleInputChange,
  } = useBooks();

  useEffect(() => {
    if(displayValue) {
      history.push('/search');

    } else {
      setDisplayValues('');
      return history.push('/');
    }
  }, [displayValue]);


  function handleInputSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Container isFocused={focused} onSubmit={handleInputSubmit}>
      <img src={searchImg} alt="Search" />
      <input
        autoFocus={true}
        type="text"
        placeholder="Search book"
        value={displayValue}
        onChange={handleInputChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <ClassicSpinner size={17} color="var(--black)" loading={isLoading}/>
    </Container>
  )
}
