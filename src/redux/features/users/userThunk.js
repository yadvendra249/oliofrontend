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
      const res = await api.get(apiEnpoint.myBookings, userData);
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
      const res = await api.put(apiEnpoint.carBookings + "/" + userData?.id + "/" + userData?.action);
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
      const res = await api.put(apiEnpoint.driverBookings + "/" + userData?.id + "/" + userData?.action);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const   getAdminDrivers = createAsyncThunk(
  "user/AdminDrivers",
  async (type,{ rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.adminDrivers);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const   getAdminCars = createAsyncThunk(
  "user/adminVehcales",
  async (type,{ rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.adminVehicles);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const postAdminCars = createAsyncThunk( "user/adminVehcales",async (data,{ rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.adminVehicles,data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const   postAdminDrivers = createAsyncThunk(
  "user/AdminDrivers",
  async (data,{ rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.adminDrivers,data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const   deleteAdminDrivers = createAsyncThunk(
  "user/AdminDrivers",
  async (data,{ rejectWithValue }) => {
    try {
      const res = await api.delete(apiEnpoint.adminDrivers+ "/" + data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const deleteAdminCars = createAsyncThunk( "user/adminVehcales",async (data,{ rejectWithValue }) => {
    try {
      const res = await api.delete(apiEnpoint.adminVehicles +"/"+data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const   getPendingCars = createAsyncThunk(
  "user/ admin cars",
  async (type,{ rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.pendingCarBooking);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
)


export const   getPendingDriver = createAsyncThunk(
  "user/admin driver ",
  async (type,{ rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.pendingDriverBookings);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
)

//adminVehicles

export const   getOptionsVichles = createAsyncThunk(
  "get/options vichels ",
  async (type,{ rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.adminVehicles);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
)
