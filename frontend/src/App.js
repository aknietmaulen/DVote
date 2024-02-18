import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateVote from "./CreateVotes";
import Votes from "./Votes";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="create-vote" element={<CreateVote />} />
          <Route path="votes" element={<Votes />} />
        </Routes>
      </div>
    </Router>    
  );
}

export default App;