import { Button } from "@/components/ui/button";
import { USER_PATH } from "@/routes/guest/guestPath";

import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">
            404
          </h1>
          <p className="text-muted-foreground">Không tìm thấy trang</p>
        </div>
        <div onClick={() => navigate(USER_PATH.HOME)}>
          <Button>Quay lại trang chủ</Button>
        </div>
      </div>
    </div>
  );
}
