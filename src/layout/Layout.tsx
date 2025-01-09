import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Nav";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};
