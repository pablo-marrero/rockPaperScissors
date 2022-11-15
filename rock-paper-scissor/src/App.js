import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { RockPeperScissors } from "./Page/rockPaperScissors/RockPeperScissors";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="rock-paper-scissors" />} />
          <Route path="/rock-paper-scissors" element={<RockPeperScissors />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
