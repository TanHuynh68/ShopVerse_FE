import useAuth from "@/hooks/api/useAuth";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  const {handleLogin} = useAuth()

  return (
    <div className="grid min-h-svh ">
       <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm handleLogin={handleLogin} />
          </div>
        </div>
    </div>
  );
}
