import ProfileHeader from "./profile-header";
import ProfileContent from "./profile-content";

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}