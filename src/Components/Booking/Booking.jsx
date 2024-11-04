import React from "react";
import "./Booking.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Booking() {
  return (
    <form
      action="https://formspree.io/f/mjkvyqjz"
      method="POST"
      id="booking"
      className="container p-20 maindiv mt-5"
    >
      <h1 className="text-center">Buchungsformular</h1>

      <div className="mb-4 full_name">
        <h2>Vollständiger Name</h2>
        <div className="inner_text d-block d-md-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Vorname"
            name="first_name"
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Nachname"
            name="last_name"
            required
          />
        </div>
      </div>

      <div className="mb-4 address">
        <div className="inner_text">
          <h2>ADRESSE</h2>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Straße"
            name="address_line_1"
            required
          />
        </div>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Straße 2"
          name="address_line_2"
        />
        <div className="add_inner d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Stadt"
            name="city"
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Bundesland/Provinz"
            name="state"
            required
          />
        </div>
      </div>

      <div className="mb-4 phone">
        <div className="phone_inner mb-3">
          <h2>Telefonnummer</h2>
          <input
            type="tel"
            className="form-control"
            placeholder="Telefonnummer"
            name="phone_number"
            required
          />
        </div>
        <div className="phone_email">
          <h2>E-mail</h2>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            name="email"
            required
          />
        </div>
      </div>

      <div className="mb-4 Arrival">
        <h2>Ankunftsdatum & -uhrzeit</h2>
        <div className="inner_arival d-block d-md-flex gap-3">
          <input
            type="date"
            className="form-control"
            placeholder="MM-DD-YY"
            name="arrival_date"
            required
          />
          <input
            type="time"
            className="form-control mt-3 mt-md-0"
            placeholder="HH-MM"
            name="arrival_time"
            required
          />
        </div>
      </div>

      <div className="mb-4 Departure">
        <h2>Abreisedatum & -uhrzeit</h2>
        <div className="inner_departure d-block d-md-flex gap-3">
          <input
            type="date"
            className="form-control"
            placeholder="MM-DD-YY"
            name="departure_date"
            required
          />
          <input
            type="time"
            className="form-control mt-3 mt-md-0"
            placeholder="HH-MM"
            name="departure_time"
            required
          />
        </div>
      </div>

      <div className="mb-4 adult_main">
        <div className="adult_inner mb-3">
          <h2>Anzahl der Erwachsenen</h2>
          <input
            type="number"
            className="form-control"
            placeholder="z.B. 23"
            name="adults_count"
            required
          />
        </div>
        <div className="kid_inner">
          <h2>Anzahl der Kinder</h2>
          <input
            type="number"
            className="form-control"
            placeholder="z.B. 23"
            name="children_count"
            required
          />
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary submit-button">
          Einreichen
        </button>
      </div>
    </form>
  );
}

export default Booking;
