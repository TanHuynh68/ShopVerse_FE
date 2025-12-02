import DashboardService, {
  getDashboardValues,
} from "@/services/dashboard.service";
import { DashboardStats } from "@/type/dashboard";
import { useEffect, useState } from "react";

export interface User {
  _id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
  createdAt: string; // hoặc Date nếu bạn parse JSON thành Date
  updatedAt: string; // hoặc Date
  isDeleted: boolean;
}

const useDashboard = () => {
  const [dashboardData, setDashboardData] = useState<DashboardStats | null>(
    null
  );
  const [users, setUsers] = useState<User[]>([]);

  const { getDashboard, loading, getUers } = DashboardService();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchDashboard = async (values: getDashboardValues) => {
    const response = await getDashboard(values);
    if (response.status_code === 200) {
      setDashboardData(response.data);
      return response;
    }
    return null;
  };

  const fetchUsers = async () => {
    const response = await getUers();
    if (response.status_code === 200) {
      setUsers(response.data);
      return response;
    }
    return null;
  };

  return {
    isLoading: loading,
    dashboardData,
    fetchDashboard,
    fetchUsers,
    users,
  };
};

export default useDashboard;
