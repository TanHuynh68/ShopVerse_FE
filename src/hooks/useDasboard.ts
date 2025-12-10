
import { ProductFormData } from "@/pages/admin/dashboard/columns/product/validation";
import DashboardService, {
  getDashboardValues,
} from "@/services/dashboard.service";
import {
  DashboardBrand,
  DashboardCategory,
  DashboardProduct,
  DashboardStats,
} from "@/types/dashboard";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
  const [cates, setCates] = useState<DashboardCategory[]>([]);
  const [brands, setBrands] = useState<DashboardBrand[]>([]);
  const {
    craeteProducts,
    getDashboard,
    getUsers,
    getBrands,
    getProducts,
    getOrders,
    getTransactions,
    getCategories,
    loading,
  } = DashboardService();
  const [products, setProducts] = useState<DashboardProduct[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const adminCreateProduct = async (values: ProductFormData) => {
    console.log('useDashboard: ',values )
    const response = await craeteProducts(values);
    if (response.status_code === 200) {
      toast.success("Tạo sản phẩm thành công");
      fetchProducts({ startDate: null, endDate: null })
      return response;
    }
    return null;
  };
 
  const fetchBrands = async (values: getDashboardValues) => {
    const response = await getBrands(values);
    if (response.status_code === 200) {
      setBrands(response.data);
      return response;
    }
    return null;
  };

  const fetchProducts = async (values: getDashboardValues) => {
    const response = await getProducts(values);
    if (response.status_code === 200) {
      setProducts(response.data);
      return response;
    }
    return null;
  };

  const fetchTransactions = async (values: getDashboardValues) => {
    const response = await getTransactions(values);
    if (response.status_code === 200) {
      setDashboardData(response.data);
      return response;
    }
    return null;
  };

  const fetchOrders = async (values: getDashboardValues) => {
    const response = await getOrders(values);
    if (response.status_code === 200) {
      setDashboardData(response.data);
      return response;
    }
    return null;
  };

  const fetchDashboard = async (values: getDashboardValues) => {
    const response = await getDashboard(values);
    if (response.status_code === 200) {
      setDashboardData(response.data);
      return response;
    }
    return null;
  };

  const fetchCategories = async (values: getDashboardValues) => {
    const response = await getCategories(values);
    if (response.status_code === 200) {
      setCates(response.data);
      return response;
    }
    return null;
  };

  const fetchUsers = async () => {
    const response = await getUsers();
    if (response.status_code === 200) {
      setUsers(response.data);
      return response;
    }
    return null;
  };

  return {
    users,
    isLoading: loading,
    dashboardData,
    brands,
    cates,
    products,
    fetchDashboard,
    fetchUsers,
    fetchBrands,
    fetchOrders,
    fetchProducts,
    fetchTransactions,
    fetchCategories,
    adminCreateProduct
  };
};

export default useDashboard;
