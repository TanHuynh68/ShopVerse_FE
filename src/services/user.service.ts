import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/api/useApi";
import { ResetPasswordFormValues } from "@/pages/customer/profile/profile-content/reset-password/reset-password-form";
import { useCallback } from "react";
export interface uploadAvatarValues {
  avatar: File;
}

export interface updateProfileValue {
  name: string;
  phone: string;
}

const UserService = () => {
  const { callApi, loading, setIsLoading } = useApiService();

  const getUserProfile = useCallback(async () => {
    try {
      const response = await callApi(HTTP_METHOD.GET, `users/profile`);
      return response;
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  }, [callApi]);

  const uploadAvatar = useCallback(
    async (values: uploadAvatarValues) => {
      const formData = new FormData();
      formData.append("avatar", values.avatar)
      try {
        const response = await callApi(HTTP_METHOD.PATCH, `users/upload-avatar`, formData);
        return response;
      } catch (e: any) {
        console.log(e?.response?.data);
      }
    },
    [callApi]
  );

  const updateProfile = useCallback(async (values: updateProfileValue) => {
    try {
      const response = await callApi(HTTP_METHOD.PUT, `users/update-profile`, values);
      return response;
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  }, [callApi]);

  const resetPassword = useCallback(async (data: ResetPasswordFormValues) => {
    try {
      const response = await callApi(HTTP_METHOD.PATCH, `users/reset-password`, data);
      return response;
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  }, [callApi]);

  // when user register = google account, password will null => must be update password before user can use function change password (user must be have password to change password)
  const updatePasswordGoogleAccount = useCallback(async (newPassword: string) => {
    try {
      const response = await callApi(HTTP_METHOD.PATCH, `users/update-password-google-account`, { newPassword });
      return response;
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  }, [callApi]);

  return { loading, setIsLoading, getUserProfile, uploadAvatar, updateProfile, updatePasswordGoogleAccount, resetPassword };
};

export default UserService;
