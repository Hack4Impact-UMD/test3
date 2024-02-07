import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<h1>Hijej</h1>} />
        <Route path="/sec" element={<h1>Hi2</h1>} />
        <Route path="*" element={<h1>Hi Nt Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
