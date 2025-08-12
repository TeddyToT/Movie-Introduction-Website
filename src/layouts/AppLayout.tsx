import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const LayoutContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="order-3 md:order-1 mt-5">
        <AppHeader />
      </div>

      <div className="p-4 mx-auto w-11/12 h-full flex-1 order-1 md:order-2 md:mt-5">
        <Outlet />
      </div>

      <div className="order-2 md:order-3">
        <AppFooter />
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return <LayoutContent />;
};

export default AppLayout;
