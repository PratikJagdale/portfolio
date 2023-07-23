import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Pages
import Home from "./pages/home.js";
import Model from "./pages/model.js";
import Emera from "./pages/emera.js";


//components
import Header from "./components/header.js";
import Footer from "./components/footer.js";

//Styles
import "./App.scss";


function App() {
  const imageDetails = {
    width: 400,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <Footer />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={true} mode="wait">
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/model/:id'
                render={() => <Model imageDetails={imageDetails} />}
              />

              <Route
                exact
                path='/emera/:id'
                render={() => <Emera imageDetails={imageDetails} />}
              />

            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
