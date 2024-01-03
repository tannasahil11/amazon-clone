import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <h1>This is the checkout page</h1>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
