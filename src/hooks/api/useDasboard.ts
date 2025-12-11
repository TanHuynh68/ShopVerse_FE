
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
import { User } from "@/types/user.type";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
    getAdminProfile,
    loading,
  } = DashboardService();
  const [products, setProducts] = useState<DashboardProduct[]>([]);
  const [profile, setAdminProfile] = useState<User | null>(null);

  const fetchAdminProfile = async () => {
    const response = await getAdminProfile();
    if (response.status_code === 200) {
      setAdminProfile(response.data);
      return response;
    }
    return [];
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const adminCreateProduct = async (values: ProductFormData) => {
    console.log('useDashboard: ', values)
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
    adminProfile: profile,
    fetchDashboard,
    fetchUsers,
    fetchBrands,
    fetchOrders,
    fetchProducts,
    fetchTransactions,
    fetchCategories,
    adminCreateProduct,
    fetchAdminProfile
  };
};

export default useDashboard;
