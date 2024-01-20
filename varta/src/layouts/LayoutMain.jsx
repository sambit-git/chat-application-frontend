import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
const LayoutMain = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default LayoutMain;
