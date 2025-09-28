import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  role: '',
  id: '',
  name: '',
  avatar: '',
  exp: 0
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (_state, action) => {
      return action.payload;
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      // toast.success("Hẹn gặp lại lần sau! Cảm ơn bạn thật nhiều 🐻✨");
      toast.success("Đăng xuất thành công");
      return initialState;
    },
  },
});

export const { login: loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
