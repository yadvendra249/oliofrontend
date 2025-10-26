import { useDispatch } from "react-redux";
import React, { useState, useCallback } from "react";
import { bookingCab, bookingDriver, getOptionsVichles } from "../redux/features/users/userThunk";

import dayjs from "dayjs";
import MapboxAutocomplete from "./GoogleMapComponent";
import { useEffect } from "react";

const Booking = () => {
  const [mainTab, setMainTab] = useState("immediate");
  const [subTabImmediate, setSubTabImmediate] = useState("cab");
  const [subTabSchedule, setSubTabSchedule] = useState("cab");
  const [vehicleTypes, setvehicleTypes] = useState([])
  const dispatch = useDispatch();

   useEffect(() => {
    (async () => {
      try {
        const data = await getOptionsVichles();
             setvehicleTypes(data ? data?.map((ele) => ele.name) : [])
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const initialFormState = {
    // Immediate Cab
    immediateCabType: "",
    name: "",
    passengerName: "",
    mobileNumber: "",
    passengerMobileNumber: "",
    otp: "",
    pickupAddress: "",
    dropAddress: "",
    dropAddress: "",
    terminal: "",
    passengers: "",
    luggage: "",
    comments: "",
    // Immediate Driver
    driverCabType: "",
    driverName: "",
    driverMobileNumber: "",
    driverOtp: "",
    driverPickupLocation: "",
    driverdropAddress: "",
    numberOfDays: "",
    // Schedule Cab
    scheduleCabType: "",
    scheduleName: "",
    scheduleMobileNumber: "",
    scheduleOtp: "",
    schedulePickupLocation: "",
    scheduledropAddress: "",
    scheduleDate: "",
    dropDate: "",
    pickupDate: "",
    schedulePassengers: "",
    // Schedule Driver
    scheduleDriverCabType: "",
    scheduleDriverName: "",
    scheduleDriverMobileNumber: "",
    scheduleDriverOtp: "",
    scheduleDriverPickupLocation: "",
    scheduleDriverdropAddress: "",
    vehicleType: "",
    pickupTime: ""
  }

  // Form states
  const [formData, setFormData] = useState(initialFormState);
  const [showTerminalField, setShowTerminalField] = useState(false);

  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);

  // Memoize callbacks so they don't recreate on every render
  const handlePickupSelect = useCallback((place) => {
    setPickup(place);
    setFormData((pre) => ({ ...pre, pickupAddress: place?.name }))
  }, []);

  const handleDropSelect = useCallback((place) => {
    setDrop(place);
    setFormData((pre) => ({ ...pre, dropAddress: place?.name }))
  }, []);


  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Show terminal field if airport is selected
    if (
      name === "immediateCabType" ||
      name === "driverCabType" ||
      name === "scheduleCabType" ||
      name === "scheduleDriverCabType"
    ) {
      setShowTerminalField(value === "airport");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subTabImmediate === "cab" || subTabSchedule === "cab") {
      const payload = {
        "passengerName": formData?.passengerName,
        "passengerMobileNumber": formData?.passengerMobileNumber,
        "pickupAddress": formData?.pickupAddress,
        "dropAddress": formData?.dropAddress,
        "vehicleType": formData?.vehicleType || "SUV",
        "pickupTime": dayjs(new Date()).toISOString()
      }
      dispatch(bookingCab(payload)).unwrap()
        .then((res) => {
          if (res) {
            setFormData(initialFormState)
          }
        });
    } else {
      const payload = {
        "passengerName": formData?.passengerName,
        "passengerMobileNumber": formData?.passengerMobileNumber,
        "pickupAddress": formData?.pickupAddress,
        "dropAddress": formData?.dropAddress,
        "startTime": dayjs(new Date()).toISOString(),
        "endTime": dayjs(new Date()).toISOString()
      }
      dispatch(bookingDriver(payload)).unwrap()
        .then((res) => {
          if (res) {
            setFormData(initialFormState)
          }
        });
    }
  };



  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .booking-section-bg {
          background: #a19ba7;
          min-height: 100vh;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .tab-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }
        .tab-btn {
          background: #eee;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 4px 4px 0 0;
          font-weight: bold;
          transition: background 0.2s;
          color: #222;
        }
        .tab-btn.active {
          background: #007bff;
          color: #fff;
        }
        .tab-buttons.sub {
          margin-bottom: 10px;
        }
        .radio-control label {
          margin-right: 20px;
          font-weight: normal;
          color: #222;
        }
        .request-form {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-control {
          width: 100%;
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .btn-primary {
          background: #007bff;
          color: #fff;
          border: none;
          padding: 10px 24px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
        }
        .btn-primary:hover {
          background: #0056b3;
        }
      `}</style>

      <section id="booking" className="ftco-section driver-section booking-section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-md-8">
              {/* Main Tabs */}
              <div className="tab-buttons">
                <button
                  className={`tab-btn ${mainTab === "immediate" ? "active" : ""}`}
                  onClick={() => setMainTab("immediate")}
                >
                  Immediate
                </button>
                <button
                  className={`tab-btn ${mainTab === "scheduleLater" ? "active" : ""}`}
                  onClick={() => setMainTab("scheduleLater")}
                >
                  Schedule Later
                </button>
              </div>

              <div className="tab-content">
                {/* Immediate Tab */}
                {mainTab === "immediate" && (
                  <>
                    <div className="tab-buttons sub">
                      <button
                        className={`tab-btn ${subTabImmediate === "cab" ? "active" : ""}`}
                        onClick={() => {
                          setSubTabImmediate("cab")
                          setSubTabSchedule("cab")
                        }}
                      >
                        Cab
                      </button>
                      <button
                        className={`tab-btn ${subTabImmediate === "driver" ? "active" : ""}`}
                        onClick={() => {
                          setSubTabImmediate("driver")
                          setSubTabSchedule("driver")
                        }}
                      >
                        Driver
                      </button>
                    </div>
                    {/* Immediate Cab Form */}
                    {subTabImmediate === "cab" && (
                      <div>
                        <div className="radio-control">
                          <label>
                            <input
                              type="radio"
                              name="immediateCabType"
                              value="local"
                              checked={formData.immediateCabType === "local"}
                              onChange={handleInputChange}
                            /> Local
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="immediateCabType"
                              value="airport"
                              checked={formData.immediateCabType === "airport"}
                              onChange={handleInputChange}
                            /> Airport
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="immediateCabType"
                              value="outstation"
                              checked={formData.immediateCabType === "outstation"}
                              onChange={handleInputChange}
                            /> Outstation
                          </label>
                        </div>
                        <form onSubmit={handleSubmit} className="request-form">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="passengerName"
                              placeholder="Name"
                              value={formData?.passengerName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="mobileNumber"
                              name="passengerMobileNumber"
                              placeholder="Mobile Number"
                              value={formData.passengerMobileNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="otp">OTP</label>
                            <input
                              type="text"
                              className="form-control"
                              id="otp"
                              name="otp"
                              placeholder="Enter OTP"
                              value={formData.otp}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Vehicle Type</label>
                            <select name="vehicleType" className="form-control" value={formData.vehicleType} onChange={handleInputChange} required>
                              <option value="">Select</option>
                              {vehicleTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">

                            <label htmlFor="pickupLocation">Pickup Location</label>
                            <MapboxAutocomplete
                              label="Enter pickup location..."
                              onSelect={handlePickupSelect}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="dropAddress">Drop Location</label>
                            <MapboxAutocomplete
                              label="Enter drop location..."
                              onSelect={handleDropSelect}
                            />

                            {/* <input
                              type="text"
                              className="form-control"
                              id="dropAddress"
                              name="dropAddress"
                              placeholder="Drop Location"
                              value={formData.dropAddress}
                              onChange={handleInputChange}
                              required
                            /> */}

                          </div>
                          {showTerminalField && (
                            <div className="form-group">
                              <label htmlFor="terminal">Terminal</label>
                              <input
                                type="number"
                                className="form-control"
                                id="terminal"
                                name="terminal"
                                placeholder="Terminal"
                                value={formData.terminal}
                                onChange={handleInputChange}
                              />
                            </div>
                          )}
                          <div className="form-group">
                            <label htmlFor="passengers">Passengers</label>
                            <input
                              type="number"
                              className="form-control"
                              id="passengers"
                              name="passengers"
                              placeholder="Number of Passengers"
                              value={formData.passengers}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="luggage">Luggage</label>
                            <input
                              type="number"
                              className="form-control"
                              id="luggage"
                              name="luggage"
                              placeholder="Number of Luggage"
                              value={formData.luggage}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="comments">Comments</label>
                            <textarea
                              className="form-control"
                              id="comments"
                              name="comments"
                              placeholder="Comment"
                              value={formData.comments}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Book Now"
                              className="btn btn-primary py-3 px-4"
                            />
                          </div>
                        </form>
                      </div>
                    )}
                    {/* Immediate Driver Form */}
                    {subTabImmediate === "driver" && (
                      <div>
                        <div className="radio-control">
                          <label>
                            <input
                              type="radio"
                              name="driverCabType"
                              value="local"
                              checked={formData.driverCabType === "local"}
                              onChange={handleInputChange}
                            /> Local
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="driverCabType"
                              value="airport"
                              checked={formData.driverCabType === "airport"}
                              onChange={handleInputChange}
                            /> Airport
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="driverCabType"
                              value="outstation"
                              checked={formData.driverCabType === "outstation"}
                              onChange={handleInputChange}
                            /> Outstation
                          </label>
                        </div>
                        <form onSubmit={handleSubmit} className="request-form">
                          <div className="form-group">
                            <label htmlFor="driverName">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="driverName"
                              name="passengerName"
                              placeholder="Name"
                              value={formData.passengerName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="driverMobileNumber">Mobile Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="driverMobileNumber"
                              name="passengerMobileNumber"
                              placeholder="Mobile Number"
                              value={formData.passengerMobileNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="driverOtp">OTP</label>
                            <input
                              type="text"
                              className="form-control"
                              id="driverOtp"
                              name="driverOtp"
                              placeholder="Enter OTP"
                              value={formData.driverOtp}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">

                            <label htmlFor="pickupLocation">Pickup Location</label>
                            <MapboxAutocomplete
                              label="Enter pickup location..."
                              onSelect={handlePickupSelect}
                            />
                            {/* <input
                              type="text"
                              className="form-control"
                              id="driverPickupLocation"
                              name="pickupAddress"
                              placeholder="Pickup Location"
                              value={formData.pickupAddress}
                              onChange={handleInputChange}
                              required
                            /> */}
                          </div>
                          <div className="form-group">
                            <label htmlFor="dropAddress">Drop Location</label>
                            <MapboxAutocomplete
                              label="Enter drop location..."
                              onSelect={handleDropSelect}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="numberOfDays">Number of Days</label>
                            <input
                              type="number"
                              className="form-control"
                              id="numberOfDays"
                              name="numberOfDays"
                              placeholder="Number of Days"
                              value={formData.numberOfDays}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Book Driver"
                              className="btn btn-primary py-3 px-4"
                            />
                          </div>
                        </form>
                      </div>
                    )}
                  </>
                )}

                {/* Schedule Later Tab */}
                {mainTab === "scheduleLater" && (
                  <>
                    <div className="tab-buttons sub">
                      <button
                        className={`tab-btn ${subTabSchedule === "cab" ? "active" : ""}`}
                        onClick={() => {
                          setSubTabImmediate("cab")
                          setSubTabSchedule("cab")
                        }}
                      >
                        Cab
                      </button>
                      <button
                        className={`tab-btn ${subTabSchedule === "driver" ? "active" : ""}`}
                        onClick={() => {
                          setSubTabImmediate("driver")
                          setSubTabSchedule("driver")
                        }}
                      >
                        Driver
                      </button>
                    </div>
                    {/* Schedule Cab Form */}
                    {subTabSchedule === "cab" && (
                      <div>
                        <div className="radio-control">
                          <label>
                            <input
                              type="radio"
                              name="scheduleCabType"
                              value="local"
                              checked={formData.scheduleCabType === "local"}
                              onChange={handleInputChange}
                            /> Local
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="scheduleCabType"
                              value="airport"
                              checked={formData.scheduleCabType === "airport"}
                              onChange={handleInputChange}
                            /> Airport
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="scheduleCabType"
                              value="outstation"
                              checked={formData.scheduleCabType === "outstation"}
                              onChange={handleInputChange}
                            /> Outstation
                          </label>
                        </div>
                        <form onSubmit={handleSubmit} className="request-form">
                          <div className="form-group">
                            <label htmlFor="scheduleName">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleName"
                              name="passengerName"
                              placeholder="Name"
                              value={formData.passengerName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleMobileNumber">Mobile Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleMobileNumber"
                              name="passengerMobileNumber"
                              placeholder="Mobile Number"
                              value={formData.passengerMobileNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleOtp">OTP</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleOtp"
                              name="scheduleOtp"
                              placeholder="Enter OTP"
                              value={formData.scheduleOtp}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Vehicle Type</label>
                            <select name="vehicleType" className="form-control" value={formData.vehicleType} onChange={handleInputChange} required>
                              <option value="">Select</option>
                              {vehicleTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">

                            <label htmlFor="pickupLocation">Pickup Location</label>
                            <MapboxAutocomplete
                              label="Enter pickup location..."
                              onSelect={handlePickupSelect}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="dropAddress">Drop Location</label>
                            <MapboxAutocomplete
                              label="Enter drop location..."
                              onSelect={handleDropSelect}
                            />
                          </div>
                          {showTerminalField && (
                            <div className="form-group">
                              <label htmlFor="terminal">Terminal</label>
                              <input
                                type="number"
                                className="form-control"
                                id="terminal"
                                name="terminal"
                                placeholder="Terminal"
                                value={formData.terminal}
                                onChange={handleInputChange}
                              />
                            </div>
                          )}
                          <div className="form-group">
                            <label htmlFor="dropDate">Drop Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="dropDate"
                              name="dropDate"
                              placeholder="Drop Date"
                              value={formData.dropDate}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="pickupDate">Pickup Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="pickupDate"
                              name="pickupDate"
                              placeholder="Pickup Date"
                              value={formData.pickupDate}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleDate">Booking Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="scheduleDate"
                              name="scheduleDate"
                              placeholder="Booking Date"
                              value={formData.scheduleDate}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="schedulePassengers">Passengers</label>
                            <input
                              type="number"
                              className="form-control"
                              id="schedulePassengers"
                              name="schedulePassengers"
                              placeholder="Number of Passengers"
                              value={formData.schedulePassengers}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Schedule Now"
                              className="btn btn-primary py-3 px-4"
                            />
                          </div>
                        </form>
                      </div>
                    )}
                    {/* Schedule Driver Form */}
                    {subTabSchedule === "driver" && (
                      <div>
                        <div className="radio-control">
                          <label>
                            <input
                              type="radio"
                              name="scheduleDriverCabType"
                              value="local"
                              checked={formData.scheduleDriverCabType === "local"}
                              onChange={handleInputChange}
                            /> Local
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="scheduleDriverCabType"
                              value="airport"
                              checked={formData.scheduleDriverCabType === "airport"}
                              onChange={handleInputChange}
                            /> Airport
                          </label>
                          <label>
                            <input
                              type="radio"
                              name="scheduleDriverCabType"
                              value="outstation"
                              checked={formData.scheduleDriverCabType === "outstation"}
                              onChange={handleInputChange}
                            /> Outstation
                          </label>
                        </div>
                        <form onSubmit={handleSubmit} className="request-form">
                          <div className="form-group">
                            <label htmlFor="scheduleDriverName"> Name</label>

                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDriverName"
                              name="passengerName"
                              placeholder="Driver Name"
                              value={formData.passengerName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleDriverMobileNumber">Mobile Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDriverMobileNumber"
                              name="passengerMobileNumber"
                              placeholder="Mobile Number"
                              value={formData.passengerMobileNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleDriverOtp">OTP</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDriverOtp"
                              name="scheduleDriverOtp"
                              placeholder="Enter OTP"
                              value={formData.scheduleDriverOtp}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">

                            <label htmlFor="pickupLocation">Pickup Location</label>
                            <MapboxAutocomplete
                              label="Enter pickup location..."
                              onSelect={handlePickupSelect}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleDriverdropAddress">Drop Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDriverdropAddress"
                              name="dropAddress"
                              placeholder="Drop Location"
                              value={formData.dropAddress}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Schedule Driver"
                              className="btn btn-primary py-3 px-4"
                            />
                          </div>
                        </form>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
