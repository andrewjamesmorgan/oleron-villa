import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import { config } from '../../config';
import AddReviewIntro from './AddReviewIntro';

export default function AddReview() {
  const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors, isSubmitting },
      reset
    } = useForm();


  const [errorMessage, setErrorMessage] = useState(null);
 
  useEffect(() => {
    register('date', { required: "Please enter a date" });
  }, [register]);

  const addReview = async (data) => {
    setErrorMessage(null);

    const json = JSON.stringify({
      username: localStorage.getItem("ol-username"),
      password: localStorage.getItem("ol-password"),
      review: data
    });

    try {
      const res = await fetch(config.addReviewURL, {
        method: "POST",
        body: json,
      });
      const result = await res.json();
      if (res.ok) {
        reset();
      } else {
        setErrorMessage(`Failed to add review: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(`Failed to add review: ${error.message}`);
    }
  }

  return (
    <div className='space-above'>
      <AddReviewIntro />
      <form
        onSubmit={handleSubmit(addReview, (formErrors) => {
          console.log('Validation errors:', formErrors);
        })}
        className="needs-validation"
      >
        <div className="responsive-form">
          {/* Date */}
          <div className="mb-3 med-field narrow-field">
            <label htmlFor="date" className="form-label">Review Date</label>
            <br/>
            <ReactDatePicker
              id="date"
              selected={watch('date')}
              onChange={(date) => setValue('date', date, { shouldValidate: true })}
              dateFormat="yyyy-MM-dd"
              className={`form-control ${errors.date ? 'is-invalid' : ''} centered-input`}
              // {...register('date', { required: "Please enter a date" })}
              placeholderText="Select date"
            />
            {errors.date && <div className="my-invalid-feedback">{errors.date.message}</div>}
          </div>
          {/* Name */}
          <div className="mb-3 med-field medium-field">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''} centered-input`}
              {...register('name', { required: "Please enter a name" })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
          {/* Stars */}
          <div className="mb-3 med-field narrow-field">
            <label htmlFor="stars" className="form-label">Rating (0-10)</label>
            <br />
            <input
              type="number"
              id="stars"
              className={`form-control ${errors.stars ? 'is-invalid' : ''} centered-input`}
              min={0}
              max={10}
              {...register('stars', {
                valueAsNumber: true,
                validate: (value) => {
                  if (value === null || value === undefined || isNaN(value) || value === '') {
                    return "Rating is required";
                  }
                  if (!Number.isInteger(value) || value < 0 || value > 10) {
                    return "Rating must be an integer between 0 and 10";
                  }
                  return true;
                }
              })}
            />
            {errors.stars && <div className='invalid-feedback'>
              {errors.stars.message}
            </div>}
          </div>
          {/* Headline */}
          <div className="mb-3 med-field medium-field">
            <label htmlFor="headline" className="form-label">Headline</label>
            <input
              id="headline"
              type="text"
              className={`form-control ${errors.headline ? 'is-invalid' : ''} centered-input`}
              {...register('headline', { required: "Please enter a headline" })}
            />
            {errors.headline && <div className="invalid-feedback">
              {errors.headline.message}
            </div>}
          </div>
          {/* Headline (French) */}
          <div className="mb-3 med-field medium-field">
            <label htmlFor="headlineFR" className="form-label">French Headline</label>
            <input
              id="headlineFR"
              type="text"
              className={`form-control ${errors.headlineFR ? 'is-invalid' : ''} centered-input`}
              {...register('headlineFR', { required: "Please enter a French headline" })}
            />
            {errors.headlineFR && <div className="invalid-feedback">
              {errors.headlineFR.message}
            </div>}
          </div>
        </div>
        <div className="responsive-form">
          {/* Review */}
          <div className="mb-3 med-field">
            <label htmlFor="review" className="form-label">Review</label>
            <textarea
              id="review"
              rows={5}
              className={`form-control ${errors.review ? 'is-invalid' : ''}`}
              {...register('review', { required: "Please enter a review" })}
            />
            {errors.review && <div className="invalid-feedback">{errors.review.message}</div>}
          </div>
          {/* ReviewFR */}
          <div className="mb-3 med-field">
            <label htmlFor="reviewFR" className="form-label">French Review</label>
            <textarea
              id="reviewFR"
              rows={5}
              className={`form-control ${errors.reviewFR ? 'is-invalid' : ''}`}
              {...register('reviewFR', { required: "Please enter a French review" })}
            />
            {errors.reviewFR && <div className="invalid-feedback">{errors.reviewFR.message}</div>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-primary-branded"
            disabled={isSubmitting}>
          {isSubmitting ? "Saving review..." : "Add review"}
        </button>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </form>
    </div>
  );
}