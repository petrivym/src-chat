import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

import {User} from '@src-chat/types'

const StyledApp = styled.div`
  // Your style here
`;

const user: User = {
  name: "Test",
  online: true
}

export function App() {
  console.log(`Hello: ${user.name} Status: ${user.online}`)
  return (
    <StyledApp>
      <NxWelcome title="client" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
