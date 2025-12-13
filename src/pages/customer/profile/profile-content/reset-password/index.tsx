import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ResetPassword from "./reset-password-01";
import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";

const ResetPasswordDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Key className="mr-2 h-4 w-4" />
            Change Password
          </Button>
        </DialogTrigger>
        <DialogContent >
          <ResetPassword />
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ResetPasswordDialog;
