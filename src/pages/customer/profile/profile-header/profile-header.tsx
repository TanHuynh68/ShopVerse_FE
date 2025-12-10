import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Camera, Mail } from "lucide-react";
import { User } from "@/types/user.type";
import AvatarUpload from "./upload-avatar";

interface ProfileHeaderProps {
  info: User;
  handleUploadAvatar: any;
}

export default function ProfileHeader({
  info,
  handleUploadAvatar,
}: ProfileHeaderProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarUpload
                onFileChange={handleUploadAvatar}
                defaultAvatar={
                  info.avatar != ""
                    ? info.avatar
                    : "https://bundui-images.netlify.app/avatars/08.png"
                }
              />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="outline"
              className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full"
            >
              <Camera />
            </Button>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <h1 className="text-2xl font-bold">{info.name}</h1>
              <Badge variant="secondary">
                {info.role === "USER" ? "Khách hàng" : "Quản trị viên"}
              </Badge>
            </div>
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                {info.email}
              </div>
              {/* <div className="flex items-center gap-1">
                <MapPin className="size-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                Joined March 2023
              </div> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
