import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./component/data/data";
import {
  Deatils,
  Fillter,
  Home,
  Listing,
  Login,
  Signup,
  Success,
  Wishlist,
} from "./component/pages";
import { detailscontext } from "./component/context";
import { useState } from "react";

function App() {
  localStorage.setItem("data", JSON.stringify(data));
  const [detail, setdetail] = useState("");
  // const [current_user, set_currentuser] = useState("");

  return (
    <BrowserRouter>
      <detailscontext.Provider value={{ detail, setdetail }}>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/hotels" element={<Listing />} />
            <Route path="/hotels/:location" element={<Fillter />} />
            <Route path="/hotel/:name" element={<Deatils />} />
            <Route path="/success" element={<Success />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </detailscontext.Provider>
    </BrowserRouter>
  );
}

export default App;
