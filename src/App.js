import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// Custom Components
import Home from "./views/Home/Home";
import OurStory from "./views/OurStory/OurStory";
import RSVP from "./views/RSVP/RSVP";
import TravelStay from "./views/TravelStay/TravelStay";
import Login from "./views/Login/Login";

// Contexts
import authContext from "./contexts/AuthContext";

// Assets
import mainWhiteLogo from "./assets/pngs/LALogoStraight_White.png";

/** AUTH hooks **/
const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// const authContext = createContext();

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

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
  return useContext(authContext);
}

/** END AUTH hooks **/

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ProvideAuth>
      <Router>
        <div className="bg-green-700 h-screen overflow-auto">
          <div className="mx-auto container">
            <NavigationBar showMenu={showMenu} setShowMenu={setShowMenu} />
            {showMenu ? (
              <Menu setShowMenu={setShowMenu} />
            ) : (
              <>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <PrivateRoute path="/our-story">
                    <OurStory />
                  </PrivateRoute>
                  <PrivateRoute path="/travel-stay">
                    <TravelStay />
                  </PrivateRoute>

                  <PrivateRoute path="/rsvp">
                    <RSVP />
                  </PrivateRoute>
                  <PrivateRoute path="/">
                    <Home />
                  </PrivateRoute>
                </Switch>
              </>
            )}
          </div>
        </div>
      </Router>
    </ProvideAuth>
  );
}

const MenuButton = ({ showMenu, setShowMenu }) => {
  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center px-3 py-2 border focus:outline-none rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
      >
        <svg
          className="fill-current h-4 w-4"
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

const Menu = ({ setShowMenu }) => {
  return (
    <nav>
      <ul className="h-auto flex items-center bg-green-700 mt-12 p-6">
        <div className="container">
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-gray-300 text-2xl font-serif"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-gray-900 flex justify-center text-2xl font-serif"
          >
            <Link to="/our-story">Our Story</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-gray-900 flex justify-center text-2xl font-serif"
          >
            <Link to="/travel-stay">{"Travel & Stay"}</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-gray-900 flex justify-center text-2xl font-serif"
          >
            <Link to="/rsvp">RSVP</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

const NavigationBar = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <div
        onClick={() => showMenu && setShowMenu(false)}
        className="flex justify-between pt-6 px-4"
      >
        <Link
          to="/"
          className={`${
            showMenu && "text-white text-3xl font-semibold"
          } text-3xl select-none font-bold`}
        >
          <img
            className="w-40 h-10 object-contain"
            src={mainWhiteLogo}
            alt={`L & A`}
          />
        </Link>
        <DesktopMenu setShowMenu={setShowMenu} />
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </>
  );
};

const DesktopMenu = ({ setShowMenu }) => {
  return (
    <nav className="invisible lg:visible w-1/2 xl:w-1/3">
      <ul className="">
        <div className="flex justify-evenly">
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-gray-300 text-2xl font-serif"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-gray-900 flex justify-center text-2xl font-serif"
          >
            <Link to="/our-story">Our Story</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-gray-900 flex justify-center text-2xl font-serif"
          >
            <Link to="/travel-stay">{"Travel & Stay"}</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-gray-900 flex justify-center text-2xl font-serif"
          >
            <Link to="/rsvp">RSVP</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
