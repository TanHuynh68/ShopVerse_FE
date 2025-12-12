"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema, RegisterFormsData } from "./validation";
export const title = "Signup Form";

interface RegisterFormProps {
  isLoading: boolean;
  handleRegister: (values: RegisterFormsData) => Promise<any>;
}

export function RegisterForm({ isLoading, handleRegister }: RegisterFormProps) {
  const form = useForm<RegisterFormsData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  });
  
  function onSubmit(values: RegisterFormsData) {
    handleRegister(values);
  }

  return (
    <div className="">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2 text-center">
            <h1 className="font-bold text-2xl">Đăng ký</h1>
            <p className="text-muted-foreground text-sm">
              Đăng ký để bắt đầu với nền tảng của chúng tôi
            </p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="John Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="Create a strong password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Phải chứa chữ hoa, chữ thường và số
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-normal text-sm">
                    Tôi đồng ý với{" "}
                    <a className="hover:underline" href="#">
                      điều khoản và điều kiện
                    </a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button disabled={isLoading} className="w-full" type="submit">
            Đăng ký
          </Button>
          <p className="text-center text-muted-foreground text-sm">
            Bạn đã có tài khoản?{" "}
            <a className="hover:underline" href="#">
              Đăng nhậo
            </a>
          </p>
        </form>
      </Form>
    </div>
  );
}
