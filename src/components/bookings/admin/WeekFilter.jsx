import React, { useState, useEffect } from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function WeekFilter({ applyFilter }) {
  const [filter, setFilter] = useState({
    from: null,
    to: null,
    justBookings: false
  });

  const onFromDate = (date) => {
    let newFilter = {...filter};
    newFilter.from = date;
    if (!filter.to || date > filter.to) {
      newFilter.to = new Date(date);
      newFilter.to.setMonth(newFilter.to.getMonth() + 1);
    }
    setFilter(newFilter);
  }

  const onToDate = (date) => {
    let newFilter = {...filter};
    newFilter.to = date;
    if (!filter.from || date < filter.from) {
      newFilter.from = new Date(date);
      newFilter.from.setMonth(newFilter.from.getMonth() - 1);
    }
    setFilter(newFilter);
  }

  const setJustBookings = (justBookings) => {
    setFilter({...filter, justBookings
    });
  }

  useEffect(() => {
    applyFilter(filter);
  }, [filter]);

  return (
    <>
      <div className='space-above'>
        <h2>Filter dates</h2>
        <form className="needs-validation" noValidate>
          <div className="responsive-form">
            {/* Start Date */}
            <div className="mb-3 med-field">
              <label htmlFor="startDate" className="form-label">From Date</label>
              <br/>
              <ReactDatePicker
                id="fromDate"
                selected={filter.from}
                onChange={onFromDate}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                placeholderText="Select from date"
              />
            </div>
            {/* End Date */}
            <div className="mb-3 med-field">
              <label htmlFor="endDate" className="form-label">To Date</label>
              <br/>
              <ReactDatePicker
                id="toDate"
                selected={filter.to}
                onChange={onToDate}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                placeholderText="Select to date"
              />
            </div>
            {/* Just Bookings */}
            <div className="mb-3 med-field">
              <label htmlFor="justBookings" className="form-label">Just Bookings</label>
              <br/>
              <input
                type="checkbox"
                id="justBookings"
                checked={filter.justBookings}
                onChange={() => setJustBookings(!filter.justBookings)}
              />  
            </div>
          </div>
        </form>
      </div>
    </>
  );
}