import "./App.css";
import NavBar from "./Components/NavBar";
import { TextForm } from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" />
      <div className="container">
        <TextForm heading="Enter Text to Anaylze g" />
      </div>
    </>
  );
}

export default App;
