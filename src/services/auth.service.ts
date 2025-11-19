import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { LoginFormsData } from "@/pages/auth/login/login.schema";
import { useCallback } from "react";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/userSlice";
import { DecodedUserRaw, NormalizedUser } from "@/type/auth.type";
const AuthService = () => {
    const { callApi, loading, setIsLoading } = useApiService();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const login = useCallback(
        async (values: LoginFormsData) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `/auth/login`, values);
                     console.log("response: ",response)
                if (response?.status_code === 200) {
                    const token = response?.data?.accessToken;
                    if (token) {
                        localStorage.setItem("token", token);
                        const decoded = jwtDecode<DecodedUserRaw>(token);
                        console.log("decoded: ", decoded)
                        const user = normalizeDecodedUser(decoded);
                        dispatch(loginSuccess(user));
                        toast.success("Đăng nhập thành công!");
                        switch (user.role) {
                            // case ROLE.ADMIN:
                            //     navigate(PATH.ADMIN_DASHBOARD);
                            //     break;
                            default:
                                navigate("/");
                                break;
                        }
                    }
                }
                return response;
            } catch (e: any) {
                toast.error(e?.response?.data);
            }
        },
        [callApi]
    );

    return { login, loading, setIsLoading, };
};

 function normalizeDecodedUser(decoded: DecodedUserRaw): NormalizedUser {
  return {
    name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
    id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
    role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
    exp: decoded.exp,
    avatar: decoded.Avatar,
  };
}

export default AuthService;
