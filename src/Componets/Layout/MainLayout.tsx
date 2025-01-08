import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-slate-200">
      <Navber />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
