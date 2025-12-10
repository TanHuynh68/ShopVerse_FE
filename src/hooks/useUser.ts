import UserService, { updateProfileValue, uploadAvatarValues } from "@/services/user.service";
import { User } from "@/types/user.type";
import { useState } from "react";

const useUser = () => {
  const { getUserProfile, uploadAvatar, updateProfile, loading } = UserService();
  const [profile, setUserProfile] = useState<User | null>(null);

  const fetchUserProfile = async () => {
    const response = await getUserProfile();
    if (response.status_code === 200) {
      setUserProfile(response.data);
      return response;
    }
    return [];
  };

  const handleUploadAvatar = async (values: uploadAvatarValues) => {
    console.log(values)
    const response = await uploadAvatar(values);
    if (response.status_code === 200) {
      fetchUserProfile();
      return response;
    }
    return null;
  };

  const handleUploadProfile= async (values: updateProfileValue) => {
    console.log(values)
    const response = await updateProfile(values);
    if (response.status_code === 200) {
      fetchUserProfile();
      return response;
    }
    return null;
  };

  return { isLoading: loading, profile, fetchUserProfile, handleUploadAvatar, handleUploadProfile };
};

export default useUser;
