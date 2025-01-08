import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* <Navber /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
