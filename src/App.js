import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./component/pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
