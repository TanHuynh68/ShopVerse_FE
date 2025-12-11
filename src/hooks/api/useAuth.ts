import { LoginFormsData } from "@/pages/auth/login/login.schema";
import AuthService from "@/services/auth.service";
import { toast } from "sonner";

const useAuth = () => {
  const { login, loading } = AuthService();

  const handleLogin = async (values: LoginFormsData) => {
    const response = await login(values);
    if (response.status_code === 200) {
      toast.success("Đăng nhập thành công");
      return response;
    }
    toast.error("Tài khoản hoặc mật khẩu không đúng!");
    return null;
  };

  return { isLoading: loading, handleLogin };
};

export default useAuth;
