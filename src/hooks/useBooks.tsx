import {
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';
import { useDebouncedCallback } from 'use-debounce';

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      medium: string;
    }
  }
}

interface BooksProviderProps {
  children: ReactNode;
}

interface BookContextProps {
  focused: boolean;
  setFocused: (value: boolean) => void;
  isLoading: boolean;

  displayValue: string;
  setDisplayValues: (value: string) => void;
  handleInputChange: (event: {target: HTMLInputElement}) => void;

  discoverBook: Book[];
  setDiscoverBook: (value: Book[]) => void;

  currentDetailsBook: Book;
  saveCurrentDetailBook: (value: Book) => void;

  searchResults: Book[];
  setSearchResults: (value: Book[]) => void;
}

const BooksContext = createContext<BookContextProps>(
  {} as BookContextProps
);

export function BooksProvider({children}: BooksProviderProps) {
  const { REACT_APP_DEBOUNCE_TIME, REACT_APP_MAX_RESULTS } = process.env;

  const [focused, setFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [displayValue, setDisplayValues] = useState('');
  const debouncedValue = useDebouncedCallback(value => {
    searchBook(value);
    setIsLoading(true);
  }, Number(REACT_APP_DEBOUNCE_TIME));

  const [discoverBook, setDiscoverBook] = useState<Book[]>([]);
  const [currentDetailsBook, setCurrentDetailsBooks] = useState<Book>(
    {} as Book
  );

  const [searchResults, setSearchResults] = useState<Book[]>([]);

  async function searchBook(query: string) {
    if (!query && !displayValue) {
      debouncedValue.cancel();
    }

    const replacedQuery = query.replace(/\s/, '+');
    const queryString = `?q=${replacedQuery}&maxResults=${REACT_APP_MAX_RESULTS}`
    const { data } = await api.get(queryString);

    setSearchResults(data.items);
    setIsLoading(false);
  }

  function handleInputChange(event: { target: HTMLInputElement }) {
    setDisplayValues(event.target.value);

    if (event.target.value) {
      debouncedValue(event.target.value);
    } else {
      setIsLoading(false);
      setSearchResults([]);
      debouncedValue.cancel();
    }
  }

  function saveCurrentDetailBook(book: Book) {
    setCurrentDetailsBooks(book);
  }

  return (
    <BooksContext.Provider value={{
      focused,
      setFocused,
      isLoading,
      displayValue,
      setDisplayValues,
      handleInputChange,
      currentDetailsBook,
      saveCurrentDetailBook,
      discoverBook,
      setDiscoverBook,
      searchResults,
      setSearchResults
    }}>
      {children}
    </BooksContext.Provider>
  )
}

export function useBooks() {
  const context = useContext(BooksContext);

  return context;
}
