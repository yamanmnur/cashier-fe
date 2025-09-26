import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <main className="min-h-screen w-full">
      <Outlet />
    </main>
  );
};

export default BaseLayout;
