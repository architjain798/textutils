import { useState } from "react";
import { About } from "./Components/About";
import Alert from "./Components/Alert";
import NavBar from "./Components/NavBar";
import { TextForm } from "./Components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [message, setMessage] = useState(null);

  const setAlert = (currentMessage, type) => {
    setMessage({
      currentMessage,
      type,
    });
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const toggleMode = () => {
    /* mode === "light" ? setMode("dark")  : setMode("light"); */
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Light Mode has been Enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={message} />
        <div className="container">
          <Switch>
            {/* /users -->component1
            /users/home --->component2
            agar humne exact match use nhi kiya too jab 2 wala use krenge to 1 khulega */}
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                setAlert={setAlert}
                heading="Enter Text to Anaylze"
                mode={mode}
                toggleMode={toggleMode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
