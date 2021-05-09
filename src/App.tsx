import { Dashboard } from './components/Dashboard';
import { SearchBox } from './components/SearchBox';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <SearchBox />
      <Dashboard name="Lucas Giraldelli" />
      <GlobalStyle />
    </>
  );
}

export default App;
