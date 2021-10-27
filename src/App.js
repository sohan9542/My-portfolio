import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
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
    useEffect(()=>{
        call()
    })
  return (
    <div className="App bg-pr w-screen h-screen">
      <Router>
        <div id="cursor" className="cursor"></div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
