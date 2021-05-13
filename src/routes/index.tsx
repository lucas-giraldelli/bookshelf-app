import { Switch, Route } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/details" component={Details} />
    </Switch>
  )
}
