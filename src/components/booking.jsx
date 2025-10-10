import React, { useState } from "react";

const Booking = () => {
  // Tab states
  const [mainTab, setMainTab] = useState("immediate");
  const [subTabImmediate, setSubTabImmediate] = useState("cab");
  const [subTabSchedule, setSubTabSchedule] = useState("cab");

  // Form states
  const [formData, setFormData] = useState({
    // Immediate Cab
    immediateCabType: "",
    name: "",
    mobileNumber: "",
    otp: "",
    pickupLocation: "",
    dropLocation: "",
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
    driverDropLocation: "",
    numberOfDays: "",
    // Schedule Cab
    scheduleCabType: "",
    scheduleName: "",
    scheduleMobileNumber: "",
    scheduleOtp: "",
    schedulePickupLocation: "",
    scheduleDropLocation: "",
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
    scheduleDriverDropLocation: "",
  });

  const [showTerminalField, setShowTerminalField] = useState(false);

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

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Data Submitted! (Console main dekhein)");
    console.log("Form Data Submitted:", formData);
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
                        onClick={() => setSubTabImmediate("cab")}
                      >
                        Cab
                      </button>
                      <button
                        className={`tab-btn ${subTabImmediate === "driver" ? "active" : ""}`}
                        onClick={() => setSubTabImmediate("driver")}
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
                              name="name"
                              placeholder="Name"
                              value={formData.name}
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
                              name="mobileNumber"
                              placeholder="Mobile Number"
                              value={formData.mobileNumber}
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
                            <label htmlFor="pickupLocation">Pickup Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="pickupLocation"
                              name="pickupLocation"
                              placeholder="Pickup Location"
                              value={formData.pickupLocation}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="dropLocation">Drop Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="dropLocation"
                              name="dropLocation"
                              placeholder="Drop Location"
                              value={formData.dropLocation}
                              onChange={handleInputChange}
                              required
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
                              name="driverName"
                              placeholder="Name"
                              value={formData.driverName}
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
                              name="driverMobileNumber"
                              placeholder="Mobile Number"
                              value={formData.driverMobileNumber}
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
                            <label htmlFor="driverPickupLocation">Pickup Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="driverPickupLocation"
                              name="driverPickupLocation"
                              placeholder="Pickup Location"
                              value={formData.driverPickupLocation}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="driverDropLocation">Drop Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="driverDropLocation"
                              name="driverDropLocation"
                              placeholder="Drop Location"
                              value={formData.driverDropLocation}
                              onChange={handleInputChange}
                              required
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
                        onClick={() => setSubTabSchedule("cab")}
                      >
                        Cab
                      </button>
                      <button
                        className={`tab-btn ${subTabSchedule === "driver" ? "active" : ""}`}
                        onClick={() => setSubTabSchedule("driver")}
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
                              name="scheduleName"
                              placeholder="Name"
                              value={formData.scheduleName}
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
                              name="scheduleMobileNumber"
                              placeholder="Mobile Number"
                              value={formData.scheduleMobileNumber}
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
                            <label htmlFor="schedulePickupLocation">Pickup Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="schedulePickupLocation"
                              name="schedulePickupLocation"
                              placeholder="Pickup Location"
                              value={formData.schedulePickupLocation}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleDropLocation">Drop Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDropLocation"
                              name="scheduleDropLocation"
                              placeholder="Drop Location"
                              value={formData.scheduleDropLocation}
                              onChange={handleInputChange}
                              required
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
                            <label htmlFor="scheduleDriverName">Driver Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDriverName"
                              name="scheduleDriverName"
                              placeholder="Driver Name"
                              value={formData.scheduleDriverName}
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
                              name="scheduleDriverMobileNumber"
                              placeholder="Mobile Number"
                              value={formData.scheduleDriverMobileNumber}
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
                            <label htmlFor="scheduleDriverPickupLocation">Pickup Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDriverPickupLocation"
                              name="scheduleDriverPickupLocation"
                              placeholder="Pickup Location"
                              value={formData.scheduleDriverPickupLocation}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="scheduleDriverDropLocation">Drop Location</label>
                            <input
                              type="text"
                              className="form-control"
                              id="scheduleDriverDropLocation"
                              name="scheduleDriverDropLocation"
                              placeholder="Drop Location"
                              value={formData.scheduleDriverDropLocation}
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
