import { LoginFormsData } from "@/pages/auth/login/login.schema";
import { RegisterFormsData } from "@/pages/auth/register/validation";
import AuthService, { VerifyFormData } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useAuth = () => {
  const { login, register, verify, resendOtpVerify, loading } = AuthService();
  const navigate = useNavigate();

  const handleLogin = async (values: LoginFormsData) => {
    const response = await login(values);
    if (response.status_code === 200) {
      toast.success("Đăng nhập thành công");
      return response;
    }
    return null;
  };

  const handleRegister = async (values: RegisterFormsData) => {
    const response = await register(values);
    if (response.status_code === 200) {
      localStorage.setItem('emailToVerify', values.email)
      toast.success("Đăng ký thành công");
      navigate('/auth/verify')
      return response;
    }
    return null;
  };

  const handleVerify = async (values: VerifyFormData) => {
    const response = await verify(values);
    if (response.status_code === 200) {
      toast.success("Xác thực tài khoản thành công");
      localStorage.clear()
      navigate('/auth/login')
      return response;
    }
    return null;
  };

  const handleResendOtpVerify = async (email: string) => {
    const response = await resendOtpVerify(email);
    if (response.status_code === 200) {
      toast.success("Gửi lại mã xác minh thành công. Hãy kiểm tra email của bạn!");
      return response;
    }
    return null;
  };

  return { isLoading: loading, handleLogin, handleRegister, handleVerify, handleResendOtpVerify };
};

export default useAuth;
