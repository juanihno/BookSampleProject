import { Switch, Route } from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';

export function Content( props ) {
  return(
    <div className="container">
      <h1>Hello Content</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  )
}