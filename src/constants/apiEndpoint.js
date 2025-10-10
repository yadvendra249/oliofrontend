const apiEndpoint = {
  login: "/api/v1/auth/login",
  refreshToken: "/api/v1/auth/refresh",
  register: "/api/v1/auth/register",

  users: "/api/v1/users",

  myBookings: "/api/v1/bookings/history/my-bookings",

  carBookings: "/api/v1/bookings/cars",
  driverBookings: "/api/v1/bookings/drivers",

  adminCarBookings: "/api/v1/admin/bookings/cars",
  adminCarBookingApprove: (id) => `/api/v1/admin/bookings/cars/${id}/approve`,
  adminCarBookingCancel: (id) => `/api/v1/admin/bookings/cars/${id}/cancel`,

 
  adminDriverBookings: "/api/v1/admin/bookings/drivers",
  adminDriverBookingApprove: (id) => `/api/v1/admin/bookings/drivers/${id}/approve`,
  adminDriverBookingCancel: (id) => `/api/v1/admin/bookings/drivers/${id}/cancel`,


  adminDrivers: "/api/v1/admin/drivers",
  adminVehicles: "/api/v1/admin/vehicles",
};

export default apiEndpoint;
