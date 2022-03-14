import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

import { Results } from './Results';

function Routes() {
  return (
    <div className='p-4'>
        <Router>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route path={['/search', '/images', '/news', '/videos']}>
            <Results />
          </Route>
        </Router>
    </div>
  )
}

export default Routes