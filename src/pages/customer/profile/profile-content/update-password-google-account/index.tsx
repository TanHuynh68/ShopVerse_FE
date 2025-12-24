import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";
import UpdatePassword from "./update-password-01";
import useUser from "@/hooks/api/useUser";

const UpdatePasswordGoogleAccount = () => {
  const { handleUpdatePasswordGoogleAccount } = useUser();
  
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Key className="mr-2 h-4 w-4" />
            Cập nhật mật khẩu
          </Button>
        </DialogTrigger>
        <DialogContent>
          <UpdatePassword handleUpdatePasswordGoogleAccount={handleUpdatePasswordGoogleAccount}/>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default UpdatePasswordGoogleAccount;
