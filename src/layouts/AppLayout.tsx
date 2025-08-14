import { Outlet  } from "react-router";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const LayoutContent: React.FC = () => {
  return (
    <div className="min-h-screen  bg-black flex flex-col">
      <div className="order-3 md:order-1">
        <AppHeader />
      </div>

      <div className={`h-full flex-1 order-1 md:order-2`}>
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
