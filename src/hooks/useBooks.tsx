import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
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

  increaseResults: (value: number) => void;
}

const BooksContext = createContext<BookContextProps>(
  {} as BookContextProps
);

export function BooksProvider({children}: BooksProviderProps) {
  const { REACT_APP_DEBOUNCE_TIME, REACT_APP_MAX_RESULTS } = process.env;

  const maxDebounceTime = Number(REACT_APP_DEBOUNCE_TIME) || 1500;
  const maxResults = Number(REACT_APP_MAX_RESULTS) || 9;

  const [focused, setFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [displayValue, setDisplayValues] = useState('');
  const debouncedValue = useDebouncedCallback(value => {
    searchBook(value);
    setIsLoading(true);
  }, maxDebounceTime);

  const [discoverBook, setDiscoverBook] = useState<Book[]>([]);
  const [currentDetailsBook, setCurrentDetailsBooks] = useState<Book>(
    {} as Book
  );

  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [totalResults, setTotalResults] = useState(maxResults);

  function handleInputChange(event: { target: HTMLInputElement }) {
    setDisplayValues(event.target.value);

    if (event.target.value) {
      debouncedValue(event.target.value);
    } else {
      resetStatesAndDebounce();
    }
  }

  function resetStatesAndDebounce() {
    setIsLoading(false);
    setTotalResults(maxResults);
    setSearchResults([]);
    debouncedValue.cancel();
  }

  async function searchBook(query: string) {
    if (!query && !displayValue) {
      debouncedValue.cancel();
    }
    callApi(query, maxResults);
  }

  function saveCurrentDetailBook(book: Book) {
    setCurrentDetailsBooks(book);
  }

  function increaseResults(value: number) {
    setTotalResults(totalResults + value);
  }

  async function loadMore() {
    if (!displayValue) {
      debouncedValue.cancel();
    }
    callApi(displayValue, totalResults);
  }

  async function callApi(query: string, maxResults: number) {
    const replacedQuery = query.replace(/\s/g, '+');

    const queryString = `?q=${replacedQuery}&maxResults=${maxResults}`;

    const { data } = await api.get(queryString);

    setSearchResults(data.items);
    setIsLoading(false);
  }

  useEffect(() =>{
    if(totalResults > maxResults) {
      loadMore();
    }
  }, [totalResults])

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
      setSearchResults,
      increaseResults,
    }}>
      {children}
    </BooksContext.Provider>
  )
}

export function useBooks() {
  const context = useContext(BooksContext);

  return context;
}
