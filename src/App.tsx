import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewsList from './views/NewsList/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NewsList} />
      </Switch>
    </Router>
  );
}

export default App;
