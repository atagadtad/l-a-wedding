import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import OurStory from "./views/OurStory/OurStory";
import RSVP from "./views/RSVP/RSVP";
import TravelStay from "./views/TravelStay/TravelStay";

const AuthContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

/*** */

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div className="container">
        <div
          onClick={() => showMenu && setShowMenu(false)}
          className="absolute left-0 p-6 block lg:hidden"
        >
          <Link
            to="/"
            className={`${
              showMenu && "text-white text-3xl font-semibold"
            } text-3xl select-none font-bold`}
          >
            {showMenu ? "Lelaine & Aaron" : "L & A"}
          </Link>
        </div>
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
        {showMenu ? (
          <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        ) : (
          <>
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
          </>
        )}
      </div>
    </Router>
  );
}

const MenuButton = ({ showMenu, setShowMenu }) => {
  return (
    <div className="absolute right-0 p-6 block lg:hidden">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <nav>
      <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      <ul className="h-screen flex items-center bg-teal-500 p-6">
        <div className="container h-64">
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-white text-2xl"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-2xl"
          >
            <Link to="/our-story">Our Story</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-2xl"
          >
            <Link to="/travel-stay">{"Travel & Stay"}</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-2xl"
          >
            <Link to="/rsvp">RSVP</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
