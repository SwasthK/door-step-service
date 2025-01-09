import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout/Layout";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Career } from "./page/Career";
import { Support } from "./page/Support";
import { Categories } from "./page/Categories";
import { Signup } from "./page/Signup";
import { Ban } from "lucide-react";

function App() {
  return (
    <>
      {import.meta.env.PROJECT_MODE === "DEVELOPMENT" ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <p className="text-7xl">Maintainance</p>
            <div className="flex gap-2 items-center">
              <p>Content unavailable </p>
              <Ban className="ml-1 h-5 w-5 inline-block"></Ban>
            </div>
            <p className="text-sm font-mono">
              This page is under construction . Stay tuned.
            </p>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="about" element={<About />} />
              <Route path="career" element={<Career />} />
              <Route path="support" element={<Support />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
