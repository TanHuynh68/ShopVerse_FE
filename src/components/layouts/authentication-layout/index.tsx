import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <div>
      <div className="">
        <div className="justify-items-center">
          <div className="w-[1200px] mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
