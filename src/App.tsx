import { BrowserRouter as Router } from 'react-router-dom';
import { BooksProvider } from './hooks/useBooks';

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BooksProvider>
      <GlobalStyle />

      <Router>
        <Routes />
      </Router>
    </BooksProvider>
  );
}

export default App;
