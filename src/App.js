import Test from "./Door";
import Position from "./Position";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="1" element={<Test />} />
        <Route path="2" element={<Position />} />
      </Routes>
    </div>
  );
}

export default App;
