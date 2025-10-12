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

export const bookingDriver = createAsyncThunk(
  "user/RegisterUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.driverBookings, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const bookingCab = createAsyncThunk(
  "user/RegisterUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.carBookings, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const getMyBooking = createAsyncThunk(
  "user/RegisterUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.myBookings, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const approveCar = createAsyncThunk(
  "user/RegisterUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.carBookings + "/"+userData?.id + "/" + userData?.action);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const approveDriver = createAsyncThunk(
  "user/RegisterUser",
  async (userData, { rejectWithValue }) => {
    try {
          const res = await api.post(apiEnpoint.driverBookings + "/"+userData?.id + "/" + userData?.action);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);
