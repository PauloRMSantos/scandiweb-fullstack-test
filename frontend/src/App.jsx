import { Routes, Route } from "react-router-dom";
import Clothes from "./Pages/Clothes";
import All from "./Pages/All";
import Tech from "./Pages/Tech";
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/clothes" element={<clothes />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </>
  );
}

export default App;
