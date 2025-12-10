import { HTTP_METHOD, ROLE } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
import { LoginFormsData } from "@/pages/auth/login/login.schema";
import { useCallback } from "react";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/userSlice";
import { DecodedUserRaw} from "@/types/auth.type";
import { ADMIN_PATH } from "@/routes/admin/adminPath";
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
                        dispatch(loginSuccess(decoded.data));
                        toast.success("Đăng nhập thành công!");
                        switch (decoded.data.role) {
                            case ROLE.ADMIN:
                                console.log('admin')
                                 console.log('user: ', decoded)
                                navigate('/admin/'+ADMIN_PATH.ADMIN_DASHBOARD);
                                break;
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



export default AuthService;
