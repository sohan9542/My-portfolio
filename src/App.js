import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Header from "./components/layout/Header";
import Myinfo from "./components/layout/Myinfo";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Portfolio from "./components/pages/portfolio/Portfolio";

const call = () => {
  const cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
  });
};

function App() {
  useEffect(() => {
    call();
  });
  const [show, setShow] = useState(false);
  return (
    <div className="App bg-pr ">
      <Router>
        <div id="cursor" className="cursor">
          {" "}
        </div>{" "}
        <Myinfo show={show} setShow={setShow} /> <Header />
        <Switch>
          <Route exact path="/">
            <Home show={show} setShow={setShow} />{" "}
          </Route>{" "}
          <Route exact path="/about">
            <About />
          </Route>{" "}
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>{" "}
          <Route exact path="/contact">
            <Contact />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
