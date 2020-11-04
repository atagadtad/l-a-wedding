import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home/Home'
import OurStory from './views/OurStory/OurStory';
import RSVP from './views/RSVP/RSVP';
import TravelStay from './views/TravelStay/TravelStay';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-story">Our Story</Link>
            </li>
            <li>
  <Link to="/travel-stay">{'Travel & Stay'}</Link>
            </li>
            <li>
  <Link to="/rsvp">RSVP</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/our-story">
            <OurStory />
          </Route>
          <Route path="/travel-stay">
            <TravelStay />
          </Route>
          <Route path="/rsvp"> 
            <RSVP />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
