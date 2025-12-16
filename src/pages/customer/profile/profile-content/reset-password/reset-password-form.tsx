"use client";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUser from "@/hooks/api/useUser";
export interface ResetPasswordFormValues {
  oldPassword: string;
  newPassword: string;
}
const ResetPasswordForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [data, setData] = useState<ResetPasswordFormValues>({
    oldPassword: "",
    newPassword: "",
  });
    useState(false);
  const { handleResetPassword, isLoading } = useUser();

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          Mật khẩu cũ
        </Label>
        <div className="relative">
          <Input
            onChange={(e) => setData({ ...data, oldPassword: e.target.value })}
            id="oldPassword"
            name="oldPassword"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••••••"
            className="pr-9"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isPasswordVisible ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
      </div>

      {/* Password */}
      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          Mật khẩu mới
        </Label>
        <div className="relative">
          <Input
            onChange={(e) => setData({ ...data, newPassword: e.target.value })}
            id="newPassword"
            name="newPassword"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••••••"
            className="pr-9"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isPasswordVisible ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
      </div>

      <Button
        className="w-full"
        type="submit"
        disabled={isLoading}
        onClick={() => handleResetPassword(data)}
      >
        Đổi mật khẩu
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
