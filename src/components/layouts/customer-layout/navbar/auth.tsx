import { Button } from "@/components/ui/button";
import { AUTH_PATH } from "@/routes/auth/authPath";
import { isLoggedIn } from "@/utils/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";

const NavAuth = () => {
  const navigate = useNavigate();
  console.log("isLoggedIn: ", isLoggedIn());

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    // toast.success(MESSAGE.LOGOUT_SUCCESSFULLY);
    navigate("/auth/login");
  };
  return (
    <>
      {!isLoggedIn() ? (
        <>
          <div className="flex gap-2">
            <Button
              onClick={() => navigate(AUTH_PATH.REGISTER)}
              variant="outline"
            >
              Đăng ký
            </Button>
            <Button
              onClick={() => navigate(AUTH_PATH.LOGIN)}
              variant={"destructive"}
            >
              Đăng nhập
            </Button>
          </div>
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <User className="h-6 w-6 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel className="cursor-pointer">
              <Link to={'profile'}>
              Tài khoản của tôi
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default NavAuth;
