import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import CheckCart from "./Components/CheckCart/CheckCart";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";
import Prime from "./Components/Prime/Prime";

function App() {
  const [{}, dispatch] = useStateValue(null);

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route
            key="home"
            path="/"
            element={[
              <Home key="home-component" />,
              <Footer key="footer-component" />,
            ]}
          ></Route>
          <Route
            key="checkcart"
            path="/checkcart"
            element={[
              <CheckCart key="checkcart-component" />,
              <Footer key="footer-component" />,
            ]}
          ></Route>
          <Route
            // key="login"
            path="/login"
            element={<Login key="login-component" />}
          ></Route>
          <Route
            // key="prime"
            path="/prime"
            element={[
              <Prime key="prime-component" />,
              <Footer key="footer-component" />,
            ]}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
