import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEnpoint from "../../../constants/apiEndpoint";
import api from "../../../services/api";




export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.login, credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);


export const RegisterUser = createAsyncThunk(
  "user/RegisterUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.register, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);
