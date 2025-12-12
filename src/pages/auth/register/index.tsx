
import useAuth from "@/hooks/api/useAuth";
import {RegisterForm} from "./register-form";

export default function LoginPage() {
  const {handleRegister, isLoading} = useAuth()
  return (
    <div className="grid min-h-svh ">
       <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm handleRegister={handleRegister} isLoading={isLoading} />
          </div>
        </div>
    </div>
  );
}
