import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useAuth from "@/hooks/api/useAuth";
import { VerifyFormData } from "@/services/auth.service";
import { useState } from "react";

export function VerifyForm({ ...props }: React.ComponentProps<typeof Card>) {
  const initValue = {
    email: localStorage.getItem("emailToVerify") || "",
    verifyCode: "",
  };
  const { handleVerify, handleResendOtpVerify, isLoading } = useAuth();
  const [data, setData] = useState<VerifyFormData>(initValue);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Nhập mã xác minh</CardTitle>
        <CardDescription>
          Chúng tôi đã gửi mã gồm 6 chữ số tới email của bạn.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="otp">Mã xác minh</FieldLabel>
              <InputOTP
                maxLength={6}
                id="otp"
                required
                onChange={(value) => setData({ ...data, verifyCode: value })}
              >
                <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription>
                Nhập mã gồm 6 chữ số được gửi tới email của bạn.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Button disabled={isLoading} onClick={() => handleVerify(data)}>
                Xác minh
              </Button>
              <FieldDescription
                onClick={() => handleResendOtpVerify(initValue.email)}
                className="text-center"
              >
                Không nhận được mã? <a href="#">Gửi lại</a>
              </FieldDescription>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
