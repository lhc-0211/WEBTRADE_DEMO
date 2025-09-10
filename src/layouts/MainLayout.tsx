import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      {/* Content của page */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
