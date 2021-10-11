import { useState } from "react";
import NavBar from "./Components/NavBar";
import { TextForm } from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    /* mode === "light" ? setMode("dark")  : setMode("light"); */
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavBar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <TextForm
          heading="Enter Text to Anaylze"
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
    </>
  );
}

export default App;
