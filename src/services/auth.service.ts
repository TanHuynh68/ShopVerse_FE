import { HTTP_METHOD, ROLE } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { LoginFormsData } from "@/pages/auth/login/login.schema";
import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/userSlice";
import { DecodedUserRaw } from "@/types/auth.type";
import { ADMIN_PATH } from "@/routes/admin/adminPath";
import { RegisterFormsData } from "@/pages/auth/register/validation";
export interface VerifyFormData {
    email: string;
    verifyCode: string;
}

const AuthService = () => {
    const { callApi, loading, setIsLoading } = useApiService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = useCallback(
        async (values: LoginFormsData) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `/auth/login`, values);
                if (response?.status_code === 200) {
                    const token = response?.data?.accessToken;
                    if (token) {
                        localStorage.setItem("token", token);
                        const decoded = jwtDecode<DecodedUserRaw>(token);
                        dispatch(loginSuccess(decoded.data));
                        switch (decoded.data.role) {
                            case ROLE.ADMIN:
                                console.log('admin')
                                console.log('user: ', decoded)
                                navigate('/admin/' + ADMIN_PATH.ADMIN_DASHBOARD);
                                break;
                            default:
                                navigate("/");
                                break;
                        }
                    }
                }
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const requestLoginGoogle = useCallback(
        async (token: string) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `auth/login-google`, { token });
                if (response?.status_code === 200 || response?.status_code === 201) {
                    const token = response?.data?.accessToken;
                    if (token) {
                        localStorage.setItem("token", token);
                        const decoded = jwtDecode<DecodedUserRaw>(token);
                        dispatch(loginSuccess(decoded.data));
                        switch (decoded.data.role) {
                            case ROLE.ADMIN:
                                navigate('/admin/' + ADMIN_PATH.ADMIN_DASHBOARD);
                                break;
                            default:
                                navigate("/");
                                break;
                        }
                    }
                }
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const forgotPassword = useCallback(
        async (email: string) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `auth/forgot-password`, {email});
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const register = useCallback(
        async (values: RegisterFormsData) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `auth/register`, values);
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const verify = useCallback(
        async (values: VerifyFormData) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `auth/verify`, values);
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );

    const resendOtpVerify = useCallback(
        async (email: string) => {
            try {
                const response = await callApi(HTTP_METHOD.POST, `auth/resend-verify`, { email });
                return response;
            } catch (e: any) {
                console.error(e?.response?.data);
            }
        },
        [callApi]
    );
    return { login, register, verify, loading, setIsLoading, resendOtpVerify, requestLoginGoogle, forgotPassword };
};



export default AuthService;
