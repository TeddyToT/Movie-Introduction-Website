import { Outlet, useLocation  } from "react-router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const LayoutContent: React.FC = () => {
    const location = useLocation();
  const isBannerPage = location.pathname === "/";
  return (
    <div className="min-h-screen  bg-black flex flex-col">
      <div className="order-3 md:order-1">
        <AppHeader />
      </div>

      <div className={`h-full flex-1 order-1 md:order-2 ${isBannerPage ? " w-full mx-0" : "p-4 w-11/12 mx-auto"}`}>
        <Outlet />
      </div>

      <div className="order-2 md:order-3 mt-auto">
        <AppFooter />
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return <LayoutContent />;
};

export default AppLayout;
