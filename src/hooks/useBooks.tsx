import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
  FormEvent
} from 'react';

import { useHistory } from 'react-router-dom';
import { api } from '../services/api';

interface Books {

}

interface BooksProviderProps {
  children: ReactNode;
}

interface BooksContextProps {
  focused: boolean;
  setFocused: (value: boolean) => void;
  searchBoxValue: string;
  setSearchBoxValue: (value: string) => void;
  handleInputChange: (event: {target: HTMLInputElement}) => void;
  handleInputSubmit: (event: FormEvent) => void;
}

const BooksContext = createContext<BooksContextProps>(
  {} as BooksContextProps
);

export function BooksProvider({children}: BooksProviderProps) {
  const apiKey = process.env.BOOKS_API_KEY;
  const history = useHistory();
  const [focused, setFocused] = useState(false);
  const [searchBoxValue, setSearchBoxValue] = useState('');

  function handleInputChange(event: { target: HTMLInputElement }) {
    setSearchBoxValue(event.target.value);
  }

  function handleInputSubmit(event: FormEvent) {
    event.preventDefault();
  }

  /*useEffect(() => {
    api('')
  })*/

  return (
    <BooksContext.Provider value={{
      focused,
      setFocused,
      searchBoxValue,
      setSearchBoxValue,
      handleInputChange,
      handleInputSubmit
    }}>
      {children}
    </BooksContext.Provider>
  )
}


export function useBooks() {
  const context = useContext(BooksContext);

  return context;
}
