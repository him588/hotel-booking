import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Deatils,
  Fillter,
  Home,
  Listing,
  Login,
  Signup,
} from "./component/pages/index";
import { detailscontext } from "./component/context";
import { useState } from "react";

function App() {
  const [detail, setdetail] = useState("");
  return (
    <BrowserRouter>
      <detailscontext.Provider value={{ detail, setdetail }}>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/Signup" element={<Signup></Signup>} />
            <Route path="/hotels" element={<Listing></Listing>} />
            <Route path="/hotels/:location" element={<Fillter></Fillter>} />
            <Route path="/hotel/:name" element={<Deatils></Deatils>} />
          </Routes>
        </div>
      </detailscontext.Provider>
    </BrowserRouter>
  );
}

export default App;
