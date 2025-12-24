import { ResetPasswordFormValues } from "@/pages/customer/profile/profile-content/reset-password/reset-password-form";
import { logout } from "@/redux/userSlice";
import UserService, { updateProfileValue, uploadAvatarValues } from "@/services/user.service";
import { User } from "@/types/user.type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useUser = () => {
  const { getUserProfile, uploadAvatar, updateProfile, updatePasswordGoogleAccount, resetPassword, loading } = UserService();
  const [profile, setUserProfile] = useState<User | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  const handleResetPassword = async (data: ResetPasswordFormValues) => {
    const response = await resetPassword(data);
    if (response.status_code === 200) {
      toast.success('Cập nhật mật khẩu thành công, đang đăng xuất')
      setTimeout(() => handleLogout(), 2000)
      return response;
    }
    return null;
  };

  const handleUpdatePasswordGoogleAccount = async (newPassword: string) => {
    const response = await updatePasswordGoogleAccount(newPassword);
    if (response.status_code === 200) {
      toast.success('Cập nhật mật khẩu thành công!');
      setTimeout(() => handleLogout(), 2000)
      return response;
    }
    return null;
  };

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
      toast.success('Cập nhật ảnh đại diện thành công!');
      return response;
    }
    return null;
  };

  const handleUploadProfile = async (values: updateProfileValue) => {
    console.log(values)
    const response = await updateProfile(values);
    if (response.status_code === 200) {
      toast.success('Cập nhật thông tin cá nhân thành công!');
      fetchUserProfile();
      return response;
    }
    return null;
  };

  return { isLoading: loading, profile, fetchUserProfile, handleUploadAvatar, handleUploadProfile, handleUpdatePasswordGoogleAccount, handleResetPassword };
};

export default useUser;
