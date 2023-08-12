import "./App.css";
import "./Components/Header/Header";
import Header from "./Components/Header/Header";
import Test from "./Components/Header/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
