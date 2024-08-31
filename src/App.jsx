import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";

function App() {
  const location = useLocation();
  const hideComponent = ["/login"];

  const shouldHideLocation =
    hideComponent.toLocaleString() === location.pathname ? true : false;

  return (
    <div className="bg-[#F2F5F9] container flex flex-col justify-center font-poppins max-w-full">
      <div className="lg:flex lg:flex-row lg:p-20">
        {!shouldHideLocation && <Profile />}
        <div className="flex flex-col lg:items-end gap-5 lg:ml-5 w-full">
          {!shouldHideLocation && <Navbar />}
          <div className="hidden lg:block lg:w-full">
            <Outlet />
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="lg:hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
