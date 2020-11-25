import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // useHistory,
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
import mainLogo from "./assets/pngs/LALogoStraight72ppi.png";
import mainWhiteLogo from "./assets/pngs/LALogoStraight_White.png";
import whiteCurvedLogo from "./assets/pngs/LALogoCurved_White.72ppi.png";

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

// function AuthButton() {
//   const history = useHistory();
//   const auth = useAuth();
//   return (
//     auth.user && (
//       <p>
//         Welcome!{" "}
//         <button
//           className="bg-red-600"
//           onClick={() => {
//             auth.signout(() => {
//               console.log("signed out!");
//               history.push("/");
//             });
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     )
//   );
// }

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ProvideAuth>
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
              {showMenu ? (
                <img
                  className="w-40 h-10 object-contain"
                  src={mainWhiteLogo}
                  alt={`L & A`}
                />
              ) : (
                <img
                  className="w-40 h-10 object-contain"
                  src={mainLogo}
                  alt={`L & A`}
                />
              )}
            </Link>
          </div>

          <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
          {showMenu ? (
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
          ) : (
            <>
              {/* <AuthButton /> */}
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
      </Router>
    </ProvideAuth>
  );
}

const MenuButton = ({ showMenu, setShowMenu }) => {
  return (
    <div className="absolute right-0 p-6 block lg:hidden">
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

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <nav>
      <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      <ul className="h-screen flex items-center bg-green-700 p-6">
        <div className="container h-64">
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-white text-2xl font-serif"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-2xl font-serif"
          >
            <Link to="/our-story">Our Story</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-2xl font-serif"
          >
            <Link to="/travel-stay">{"Travel & Stay"}</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="flex justify-center text-2xl font-serif"
          >
            <Link to="/rsvp">RSVP</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
