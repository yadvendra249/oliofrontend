import React, { useState } from "react";

const initialDriver = {
    firstName: "",
    lastName: "",
    licenseNumber: "",
    dob: "",
    contactNumber: "",
    address: "",
};

const initialCar = {
    passengerName: "",
    passengerMobileNumber: "",
    pickupAddress: "",
    dropAddress: "",
    vehicleType: "",
    pickupTime: "",
};

const vehicleTypes = ["SEDAN", "SUV", "HATCHBACK"];

const AdminPage = () => {
    const [driverForm, setDriverForm] = useState(initialDriver);
    const [carForm, setCarForm] = useState(initialCar);
    const [drivers, setDrivers] = useState([]);
    const [cars, setCars] = useState([]);

    // Handle driver form change
    const handleDriverChange = (e) => {
        const { name, value } = e.target;
        setDriverForm((prev) => ({ ...prev, [name]: value }));
    };

    // Handle car form change
    const handleCarChange = (e) => {
        const { name, value } = e.target;
        setCarForm((prev) => ({ ...prev, [name]: value }));
    };

    // Submit driver form
    const handleDriverSubmit = (e) => {
        e.preventDefault();
        setDrivers([...drivers, driverForm]);
        setDriverForm(initialDriver);
    };

    // Submit car form
    const handleCarSubmit = (e) => {
        e.preventDefault();
        setCars([...cars, carForm]);
        setCarForm(initialCar);
    };

    // Cancel row
    const handleCancelDriver = (idx) => {
        setDrivers(drivers.filter((_, i) => i !== idx));
    };
    const handleCancelCar = (idx) => {
        setCars(cars.filter((_, i) => i !== idx));
    };

    return (
        <div className="container py-4">
            <style>{`
        .admin-row {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        .admin-col {
          flex: 1 1 350px;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          margin-bottom: 30px;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        .admin-table th, .admin-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .admin-table th {
          background: #007bff;
          color: #fff;
        }
        .cancel-btn {
          background: #dc3545;
          color: #fff;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .admin-row { flex-direction: column; }
        }
      `}</style>

            {/* Forms Row */}
            <div className="admin-row">
                {/* Driver Form */}
                <div className="admin-col">
                    <h3 style={{ textAlign: "center" }}>Driver Form</h3>
                    <form onSubmit={handleDriverSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" className="form-control" value={driverForm.firstName} onChange={handleDriverChange} required />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lastName" className="form-control" value={driverForm.lastName} onChange={handleDriverChange} required />
                        </div>
                        <div className="form-group">
                            <label>License Number</label>
                            <input type="text" name="licenseNumber" className="form-control" value={driverForm.licenseNumber} onChange={handleDriverChange} required />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="date" name="dob" className="form-control" value={driverForm.dob} onChange={handleDriverChange} required />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="text" name="contactNumber" className="form-control" value={driverForm.contactNumber} onChange={handleDriverChange} required />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" value={driverForm.address} onChange={handleDriverChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Add Driver</button>
                    </form>
                </div>
                {/* Car Form */}
                <div className="admin-col">
                    <h3 style={{ textAlign: "center" }}>Car Form</h3>
                    <form onSubmit={handleCarSubmit}>
                        <div className="form-group">
                            <label>Passenger Name</label>
                            <input type="text" name="passengerName" className="form-control" value={carForm.passengerName} onChange={handleCarChange} required />
                        </div>
                        <div className="form-group">
                            <label>Passenger Mobile Number</label>
                            <input type="text" name="passengerMobileNumber" className="form-control" value={carForm.passengerMobileNumber} onChange={handleCarChange} required />
                        </div>
                        <div className="form-group">
                            <label>Pickup Address</label>
                            <input type="text" name="pickupAddress" className="form-control" value={carForm.pickupAddress} onChange={handleCarChange} required />
                        </div>
                        <div className="form-group">
                            <label>Drop Address</label>
                            <input type="text" name="dropAddress" className="form-control" value={carForm.dropAddress} onChange={handleCarChange} required />
                        </div>
                        <div className="form-group">
                            <label>Vehicle Type</label>
                            <select name="vehicleType" className="form-control" value={carForm.vehicleType} onChange={handleCarChange} required>
                                <option value="">Select</option>
                                {vehicleTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Pickup Time</label>
                            <input type="datetime-local" name="pickupTime" className="form-control" value={carForm.pickupTime} onChange={handleCarChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Add Car Booking</button>
                    </form>
                </div>
            </div>

            {/* Tables Row */}
            <div className="admin-row">
                {/* Car Table */}
                <div className="admin-col">
                    <h4 style={{ textAlign: "center" }}>Car Booking Table</h4>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Passenger Name</th>
                                <th>Mobile No</th>
                                <th>Pickup Address</th>
                                <th>Drop Address</th>
                                <th>Vehicle Type</th>
                                <th>Pickup Time</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((c, idx) => (
                                <tr key={idx}>
                                    <td>{c.passengerName}</td>
                                    <td>{c.passengerMobileNumber}</td>
                                    <td>{c.pickupAddress}</td>
                                    <td>{c.dropAddress}</td>
                                    <td>{c.vehicleType}</td>
                                    <td>{c.pickupTime}</td>
                                    <td>
                                        <button className="cancel-btn" onClick={() => handleCancelCar(idx)}>Cancel</button>
                                    </td>
                                </tr>
                            ))}
                            {cars.length === 0 && (
                                <tr>
                                    <td colSpan={7} style={{ textAlign: "center" }}>No Car Bookings</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Driver Table */}
                <div className="admin-col">
                    <h4 style={{ textAlign: "center" }}>Driver Table</h4>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>License No</th>
                                <th>DOB</th>
                                <th>Contact No</th>
                                <th>Address</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drivers.map((d, idx) => (
                                <tr key={idx}>
                                    <td>{d.firstName}</td>
                                    <td>{d.lastName}</td>
                                    <td>{d.licenseNumber}</td>
                                    <td>{d.dob}</td>
                                    <td>{d.contactNumber}</td>
                                    <td>{d.address}</td>
                                    <td>
                                        <button className="cancel-btn" onClick={() => handleCancelDriver(idx)}>Cancel</button>
                                    </td>
                                </tr>
                            ))}
                            {drivers.length === 0 && (
                                <tr>
                                    <td colSpan={7} style={{ textAlign: "center" }}>No Drivers</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;