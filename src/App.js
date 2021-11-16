import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    //This is function that will help us to show alerts and type by passing value.
    //parameters and arguments arguments are the value that we pass to function.
    // their are four type in bootstrap from that we are using success.
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = function () {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      //this are the arguments because we pass the value.and show alert is help us to mass argument when we enable dark mode by clicking.
      // document.title = "Textutils-Dark mode";
      // setInterval(() => {
      //   document.title="Textutils is beutifull"
      // }, 3000);
      // setInterval(() => {
      //   document.title="insatll Textutils is beutifull"
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Textutils-light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          main="Home"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              {/* we use exact keyword for avoiding partial matching */}
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try Textutils-Word counter,charecter counter,Remove extra spaces"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
