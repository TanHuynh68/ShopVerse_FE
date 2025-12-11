import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types/user.type";
import { useState } from "react";
import { updateProfileValue } from "@/services/user.service";
import { TransactionTable } from "./transaction-table";
import { Transaction } from "@/types/transaction";

interface ProfileContentProps {
  info: User;
  isLoading: boolean;
  handleUploadProfile: (values: updateProfileValue) => Promise<any>;
  transactions: Transaction[];
}

export default function ProfileContent({
  info,
  isLoading,
  handleUploadProfile,
  transactions,
}: ProfileContentProps) {
  const [data, setData] = useState<updateProfileValue>({
    name: info.name,
    phone: info.phone || "",
  });
    const initValue = {
    name: info.name,
    phone: info.phone || "",
  }
  const checkValueChange = JSON.stringify(data) != JSON.stringify(initValue);

  return (
    <Tabs defaultValue="personal" className="space-y-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="personal">Thông tin cá nhân</TabsTrigger>
        <TabsTrigger value="account">Tài khoản</TabsTrigger>
        {/* <TabsTrigger value="security">Bảo mật</TabsTrigger> */}
        <TabsTrigger value="notifications">Lịch sử giao dịch</TabsTrigger>
      </TabsList>

      {/* Personal Information */}
      <TabsContent value="personal" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin cá nhân</CardTitle>
            <CardDescription>
              Cập nhật thông tin cá nhân và thông tin hồ sơ của bạn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  onChange={(e) =>
                    setData({
                      name: e.target.value,
                      phone: data.phone,
                    })
                  }
                  id="name"
                  defaultValue={info.name}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Địa chỉ email</Label>
                <Input
                  disabled
                  id="email"
                  type="email"
                  defaultValue={info.email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="text"
                  onChange={(e) =>
                    setData({
                      name: data.name,
                      phone: e.target.value,
                    })
                  }
                  defaultValue={info.phone === "" ? "Chưa có" : info.phone}
                />
              </div>
            </div>
            {/* <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" defaultValue="San Francisco, CA" />
            </div> */}
            <div className="flex justify-end">
              <Button
                disabled={checkValueChange === true ? isLoading : true}
                onClick={() => handleUploadProfile(data)}
              >
                Cập nhật
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Account Settings */}
      <TabsContent value="account" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Cài đặt tài khoản</CardTitle>
            <CardDescription>
              Quản lý tùy chọn tài khoản và đăng ký của bạn.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base">Trạng thái tài khoản</Label>
                <p className="text-muted-foreground text-sm">
                  Tài khoản của bạn hiện đang hoạt động
                </p>
              </div>
              <Badge
                variant="outline"
                className="border-green-200 bg-green-50 text-green-700"
              >
                {info.isActive === true
                  ? "Đang hoạt động"
                  : "Đã bị ngưng hoạt động"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Security Settings */}
      {/* <TabsContent value="security" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>
              Manage your account security and authentication.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base">Password</Label>
                  <p className="text-muted-foreground text-sm">
                    Last changed 3 months ago
                  </p>
                </div>
                <Button variant="outline">
                  <Key className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base">Two-Factor Authentication</Label>
                  <p className="text-muted-foreground text-sm">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-green-200 bg-green-50 text-green-700"
                  >
                    Enabled
                  </Badge>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base">Login Notifications</Label>
                  <p className="text-muted-foreground text-sm">
                    Get notified when someone logs into your account
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base">Active Sessions</Label>
                  <p className="text-muted-foreground text-sm">
                    Manage devices that are logged into your account
                  </p>
                </div>
                <Button variant="outline">
                  <Shield className="mr-2 h-4 w-4" />
                  View Sessions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent> */}

      {/* Notification Settings */}
      <TabsContent value="notifications" className="space-y-6">
        <TransactionTable transactions={transactions} />
      </TabsContent>
    </Tabs>
  );
}
