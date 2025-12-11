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
import { useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import useUser from "@/hooks/api/useUser";
import { useEffect } from "react";

const NavAuth = () => {
  const navigate = useNavigate();
  const { fetchUserProfile, profile } = useUser();
  const dispatch = useDispatch();

  isLoggedIn() &&
    useEffect(() => {
      fetchUserProfile();
    }, []);

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
            <Avatar>
              <AvatarImage
                className="h-8 w-8"
                src={profile?.avatar || "https://github.com/shadcn.png"}
                alt="hình đại diện"
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel className="cursor-pointer">
              <Link to={"profile"}>Tài khoản của tôi</Link>
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
