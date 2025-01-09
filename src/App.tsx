import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout/Layout";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Career } from "./page/Career";
import { Support } from "./page/Support";
import { Categories } from "./page/Categories";
import { Signup } from "./page/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories"  element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="support" element={<Support />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
