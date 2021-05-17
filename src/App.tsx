import { BrowserRouter as Router } from 'react-router-dom';
import { BooksProvider } from './hooks/useBooks';

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BooksProvider>
      <GlobalStyle />

      <Router>
        <Routes />
      </Router>
    </BooksProvider>
  );
}
