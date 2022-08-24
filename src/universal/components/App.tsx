import { Routes, Route, Link } from "react-router-dom";

import { Intro } from "@components/Intro";
import { Form } from "@components/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
