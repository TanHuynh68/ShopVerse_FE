import { HTTP_METHOD } from "@/constants/enum";
import useApiService from "@/hooks/useApi";
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
  return { loading, setIsLoading, getUserProfile, uploadAvatar, updateProfile };
};

export default UserService;
