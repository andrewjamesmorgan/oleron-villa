import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { config } from '../../../config';
import WeekFilter from './WeekFilter';
import ExistingWeeks from './ExistingWeeks';

export default function AdminBookingsForm({ refresh }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const [filterQuery, setFilterQuery] = useState({
    from: null,
    to: null,
    justBookings: false
  });
  const [bookings, setBookings] = useState(null);
  const [week, setWeek] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  function selectWeek(week) {
    setWeek(week);
    setStart(week.start);
    setEnd(week.end);
  }

  const removeEmptyFields = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
  };

  // Memoize fetchBookings using useCallback. This is so that it can be
  // used as a dependency in useEffect without causing an infinite loop.
  const fetchBookings = useCallback(async () => {
    const username = localStorage.getItem("ol-username");
    const password = localStorage.getItem("ol-password");
    let url = config.getBookingsURL;
    const body = {
      username,
      password
    };
    if (filterQuery.from) {
      url += `&fromDate=${filterQuery.from}`;
    }
    if (filterQuery.to) {
      url += `&toDate=${filterQuery.to}`;
    }
    if (filterQuery.justBookings) {
      url += `&justBookings=${filterQuery.justBookings}`;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log("Fetched bookings:", data);
        setBookings(data.bookings);
      } else {
        console.error(`Failed to fetch bookings: ${data.message}`);
      }
    } catch (error) {
      console.error(`Failed to fetch bookings: ${error.message}`);
    }
  }, [filterQuery]); // Dependencies: filterQuery

  const onSubmit = async (data) => {
    setErrorMessage(null);

    if (!start || !end) {
      setErrorMessage("Start and end dates are required.");
      return;
    }
    if (start >= end) {
      setErrorMessage("End date must be after start date.");
      return;
    }

    let weekToStore = {
      ...week,
      start,
      end,
      booked: data.booked,
      notes: data.notes,
      price: data.price,
      source: data.source
    };

    weekToStore = removeEmptyFields(weekToStore);

    const json = JSON.stringify({
      username: localStorage.getItem("ol-username"),
      password: localStorage.getItem("ol-password"),
      booking: weekToStore
    });

    console.log(`Submit`, json);

    try {
      const res = await fetch(config.updateBookingURL, {
        method: "POST",
        body: json,
      });
      const result = await res.json();
      if (res.ok) {
        reset();
        setStart(null);
        setEnd(null);
        await fetchBookings(); // Call fetchBookings here
        refresh();
      } else {
        setErrorMessage(`Failed to update booking: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(`Failed to update booking: ${error.message}`);
    }
  };

  useEffect(() => {
    if (week) {
      setIsBooked(week.booked || false); // Initialize the checkbox state when the week changes
      setValue('booked', week.booked);
      setValue('notes', week.notes);
      setValue('price', week.price);
      setValue('source', week.source);
    }
  }, [week, setValue]);

  useEffect(() => {
    fetchBookings(); // Call the memoized fetchBookings function
  }, [fetchBookings]);

  return (
    <>
      <WeekFilter applyFilter={setFilterQuery}/>
      { bookings && <ExistingWeeks weeks={bookings} selectWeek={selectWeek} /> }
      
      {/* Form */}
      <div className='space-above'>
        {week && <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
            <div className="responsive-form">
              <div className="mb-3 med-field narrow-field">
                <label htmlFor="start" className="form-label">Start Date</label>
                <br/>
                <ReactDatePicker
                  id="start"
                  selected={start}
                  onChange={(date) => setStart(date)}
                  dateFormat="yyyy-MM-dd"
                  className="form-control centered-input"
                  placeholderText="Select start date"
                />
              </div>
              <div className="mb-3 med-field narrow-field">
                <label htmlFor="end" className="form-label">End Date</label>
                <br/>
                <ReactDatePicker
                  id="end"
                  selected={end}
                  onChange={(date) => setEnd(date)}
                  dateFormat="yyyy-MM-dd"
                  className="form-control centered-input"
                  placeholderText="Select end date"
                />
              </div>
              <div className="mb-3 med-field narrow-field">
                <label htmlFor="price" className="form-label">Price (€)</label>
                <br />
                <input
                  type="number"
                  id="price"
                  className="form-control centered-input"
                  {...register('price', {
                    required: "Price is required",
                    valueAsNumber: true,
                    validate: (value) => Number.isInteger(value) || "Price must be an integer",
                  })}
                />
                {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
              </div>
              <div className="mb-3 med-field very-narrow-field">
                <label htmlFor="booked" className="form-label">Booked</label>
                <br />
                <input
                  type="checkbox"
                  id="booked"
                  className="form-check-input"
                  {...register('booked')}
                  checked={isBooked} // Bind the checkbox to the state variable
                  onChange={(e) => {
                    setIsBooked(e.target.checked); // Update the state when the checkbox is clicked
                    setValue('booked', e.target.checked); // Update the form value
                  }}
                />
              </div>
              <div className="mb-3 med-field narrow-field">
                <label htmlFor="source" className="form-label">Source</label>
                <br />
                <select
                  id="source"
                  className="form-control narrow-field centered-input"
                  {...register('source')}
                >
                  <option value="">Select source</option>
                  <option value="Direct">Direct</option>
                  <option value="Airbnb">Airbnb</option>
                  <option value="Abritel">Abritel</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="notes" className="form-label">Notes</label>
              <textarea
                id="notes"
                rows={5}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                {...register('notes')}
              />
              {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-primary-branded" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Update week"}
            </button>
            {errorMessage && <div className='error-message'>{errorMessage}</div>}
          </form>
        </div>}
      </div>
    </>
  );
}