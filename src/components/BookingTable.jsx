import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { approveDriver, getMyBooking } from "../redux/features/users/userThunk";

const cabBookingsSample = [
    {
        id: 1,
        name: "Ali",
        mobile: "03001234567",
        bookingDate: "2025-10-12",
        bookingLocation: "Lahore",
        type: "Airport",
        outstation: "No",
        dropLocation: "Islamabad",
    },
    // ...add more sample data
];

const driverBookingsSample = [
    {
        id: 1,
        name: "Ahmed",
        mobile: "03007654321",
        bookingDate: "2025-10-13",
        bookingLocation: "Karachi",
        type: "Local",
        outstation: "Yes",
        dropLocation: "Hyderabad",
    }
];

const BookingTable = () => {
    const [cabBookings, setCabBookings] = useState([]);
    const [driverBookings, setDriverBookings] = useState([]);
    const [loading,setLoading]= useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyBooking()).unwrap().then((res)=>{
            if(res){
                setCabBookings(res?.carBookings || [])
                setDriverBookings(res?.driverBookings || [])
            }   
        })
    }, [loading])

    const handleCancelCab = (id,action) => {
        dispatch(approveCar()).unwrap({id, action: action}).then((res)=>{
            if(res){
               setLoading((pre)=>!pre)
            }      
    })
}

    const handleCancelDriver = (id,action) => {
        dispatch(approveDriver({id, action: action})).unwrap().then((res)=>{
            if(res){
                 setLoading((pre)=>!pre)
            }
    })
}

    return (
        <div className="booking-table-container">
            <style>{`
        .booking-table-container {
          background: #fff;
          margin-top: 80px;
          padding: 30px 15px;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
        }
        .booking-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        .booking-table th, .booking-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .booking-table th {
          background: #0056b3;
          color: #fff;
        }
        .booking-table tr:nth-child(even) {
          background: #f9f9f9;
        }
        .cancel-btn {
          background: #dc3545;
          color: #fff;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .booking-table, .booking-table thead, .booking-table tbody, .booking-table th, .booking-table td, .booking-table tr {
            display: block;
          }
          .booking-table th {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }
          .booking-table td {
            border: none;
            position: relative;
            padding-left: 50%;
            min-height: 40px;
          }
          .booking-table td:before {
            position: absolute;
            left: 10px;
            top: 8px;
            width: 45%;
            white-space: nowrap;
            font-weight: bold;
            color: #0056b3;
          }
          .booking-table td:nth-of-type(1):before { content: "Name"; }
          .booking-table td:nth-of-type(2):before { content: "Mobile No"; }
          .booking-table td:nth-of-type(3):before { content: "Booking Date"; }
          .booking-table td:nth-of-type(4):before { content: "Booking Location"; }
          .booking-table td:nth-of-type(5):before { content: "Airport"; }
          .booking-table td:nth-of-type(6):before { content: "Outstation"; }
          .booking-table td:nth-of-type(7):before { content: "Drop Location"; }
          .booking-table td:nth-of-type(8):before { content: "Cancel Booking"; }
        }
      `}</style>

            <h3>Cab Booking Table</h3>
            <table className="booking-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Booking Date</th>
                        <th>Booking Location</th>
                        <th>Airport</th>
                        <th>Outstation</th>
                        <th>Drop Location</th>
                        <th>Cancel Booking</th>
                    </tr>
                </thead>
                <tbody>
                    {cabBookings.map(b => (
                        <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.mobile}</td>
                            <td>{b.bookingDate}</td>
                            <td>{b.bookingLocation}</td>
                            <td>{b.type}</td>
                            <td>{b.outstation}</td>
                            <td>{b.dropLocation}</td>
                            <td style={{display:"flex"}}>
                                <button className="cancel-btn" onClick={() => handleCancelCab(b.id,"cancel")}>
                                    Cancel
                                </button>
                                 <button className="cancel-btn" onClick={() => handleCancelCab(b.id,"cancel")}>
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Driver Booking Table</h3>
            <table className="booking-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Booking Date</th>
                        <th>Booking Location</th>
                        <th>Airport</th>
                        <th>Outstation</th>
                        <th>Drop Location</th>
                        <th>Cancel Booking</th>
                    </tr>
                </thead>
                <tbody>
                    {driverBookings.map(b => (
                        <tr key={b.id}>
                            <td>{b.name}</td>
                            <td>{b.mobile}</td>
                            <td>{b.bookingDate}</td>
                            <td>{b.bookingLocation}</td>
                            <td>{b.type}</td>
                            <td>{b.outstation}</td>
                            <td>{b.dropLocation}</td>
                            <td style={{display:"flex"}}>
                                <button className="cancel-btn" onClick={() => handleCancelDriver(b.id,"approve")}>
                                    Approve
                                </button>
                                  <button className="cancel-btn" onClick={() => handleCancelDriver(b.id,"approve")}>
                                   Approve
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;