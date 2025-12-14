import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginFormsData } from "./login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import ENV from "@/config/env";
interface LoginFormProps {
  handleLogin: (values: LoginFormsData) => void;
  handleLoginGoogle: (token: string) => void;
  isLoading: boolean;
}

export function LoginForm({
  handleLogin,
  handleLoginGoogle,
  isLoading,
}: LoginFormProps) {
  const form = useForm<LoginFormsData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormsData) => {
    await handleLogin(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6")}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Đăng nhập</h1>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Địa chỉ email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="shadcn" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between  text-sm">
            <Link to={"/auth/forgot-password"} className="hover:text-blue-500">
              Quên mật khẩu ?
            </Link>
            <Link className="hover:text-blue-500" to={"/"}>
              Quay về trang chủ
            </Link>
          </div>
          {/* login with google */}
          <GoogleOAuthProvider clientId={ENV.VITE_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={(credentialResponse) =>
                handleLoginGoogle(credentialResponse.credential || "")
              }
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
          <Button disabled={isLoading} type="submit" className="w-full">
            Đăng nhập
          </Button>
        </div>
        <div className="text-center text-sm">
          Bạn chưa có tài khoản ?{" "}
          <a href="/auth/register" className="underline underline-offset-4">
            Đăng ký
          </a>
        </div>
      </form>
    </Form>
  );
}
