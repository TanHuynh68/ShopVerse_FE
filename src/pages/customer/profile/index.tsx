import ProfileHeader from "./profile-header/profile-header";
import ProfileContent from "./profile-content/profile-content";
import useUser from "@/hooks/api/useUser";
import { useEffect } from "react";
import useTransaction from "@/hooks/api/useTransaction";

export default function Page() {
  const { fetchUserProfile, handleUploadAvatar,handleUploadProfile , profile, isLoading } = useUser();
  const {fetchMyTransactions, transactions} = useTransaction();

  useEffect(() => {;
    fetchUserProfile();
    fetchMyTransactions()
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      {profile && <ProfileHeader info={profile}  handleUploadAvatar={handleUploadAvatar}/>}
      {profile && <ProfileContent isLoading={isLoading} transactions={transactions} handleUploadProfile={handleUploadProfile} info={profile} />}
    </div>
  );
}
