import React from 'react';
import './Booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Booking() {
  return (
    <div  id='booking' className="container maindiv mt-5">
      <h1 className="text-center">Booking Form</h1>

      <div className="mb-4 full_name">
        <h2>Full Name</h2>
        <div className="inner_text d-flex gap-3">
          <input type="text" className="form-control" placeholder="First name" />
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>

      <div className="mb-4 address">
        <div className="inner_text">
          <h2>Address</h2>
          <input type="text" className="form-control mb-2" placeholder="Street address" />
        </div>
        <input type="text" className="form-control mb-2" placeholder="Street address 2" />
        <div className="add_inner d-flex gap-3">
          <input type="text" className="form-control" placeholder="City" />
          <input type="text" className="form-control" placeholder="State/Province" />
        </div>
      </div>

      <div className="mb-4 phone">
        <div className="phone_inner mb-3">
          <h2>Phone No</h2>
          <input type="number" className="form-control" placeholder="Phone no" />
        </div>
        <div className="phone_email">
          <h2>Email</h2>
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      </div>

      <div className="mb-4 Arrival">
        <h2>Arrival Date & Time</h2>
        <div className="inner_arival d-flex gap-3">
          <input type="date" className="form-control" placeholder="MM-DD-YY" />
          <input type="time" className="form-control" placeholder="HH-MM" />
        </div>
      </div>

      <div className="mb-4 Departure">
        <h2>Departure Date & Time</h2>
        <div className="inner_departure d-flex gap-3">
          <input type="date" className="form-control" placeholder="MM-DD-YY" />
          <input type="time" className="form-control" placeholder="HH-MM" />
        </div>
      </div>

      <div className="mb-4 adult_main">
        <div className="adult_inner mb-3">
          <h2>Number of Adults</h2>
          <input type="number" className="form-control" placeholder="ex. 23" />
        </div>
        <div className="kid_inner">
          <h2>Number of Kids</h2>
          <input type="number" className="form-control" placeholder="ex. 23" />
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-primary submit-button">Submit</button>
      </div>
    </div>
  );
}

export default Booking;
