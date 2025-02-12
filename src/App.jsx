import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pageroute from "./Pageroute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pageroute/>} />
      </Routes>
    </Router>
  );
}

export default App;
