import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/destination" element={<Destination></Destination>}></Route>
      <Route path="/crew" element={<Crew></Crew>}></Route>
      <Route path="/technology" element={<Technology></Technology>}></Route>
    </Routes>
  );
}

export default App;
