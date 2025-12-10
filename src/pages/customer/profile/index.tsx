import ProfileHeader from "./profile-header/profile-header";
import ProfileContent from "./profile-content/profile-content";
import useUser from "@/hooks/useUser";
import { useEffect } from "react";

export default function Page() {
  const { fetchUserProfile, handleUploadAvatar,handleUploadProfile , profile } = useUser();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      {profile && <ProfileHeader info={profile}  handleUploadAvatar={handleUploadAvatar}/>}
      {profile && <ProfileContent handleUploadProfile={handleUploadProfile} info={profile} />}
    </div>
  );
}
