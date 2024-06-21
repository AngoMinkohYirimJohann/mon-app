import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/signin" Component={Signin} />
            <Route exact path="/register" Component={Register} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
