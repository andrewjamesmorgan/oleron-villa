import { useState, useEffect, useRef } from 'react';
import { config } from '../config';
import Review from './reviews/Review';
import Error from './Error';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setError(null);
    const fetchReviews = async () => {
      try {
        const response = await fetch(config.getReviewsURL);
        if (!response.ok) throw new Error(`Error fetching reviews: ${response.statusText}`);
        const data = await response.json();
        if (!data.reviews) throw new Error('Error fetching reviews: invalid response (no reviews element).');
        setReviews(data.reviews);
      } catch (err) {
        setError(err.message || 'An unexpected error occurred when fetching reviews.');
        console.error(err.message || 'An unexpected error occurred when fetching reviews.');
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    function updateVisibleCount() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const reviewWidth = 300;
        const gap = 16;
        const count = Math.max(1, Math.floor((containerWidth + gap) / (reviewWidth + gap)));
        setVisibleCount(count);
      }
    }
    setTimeout(updateVisibleCount, 0);
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    if (startIndex > Math.max(0, reviews.length - visibleCount)) {
      setStartIndex(Math.max(0, reviews.length - visibleCount));
    }
  }, [visibleCount, reviews.length, startIndex]);

  const handlePrev = () => setStartIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setStartIndex((prev) => Math.min(reviews.length - visibleCount, prev + 1));
  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + visibleCount < reviews.length;

  return (
    <div className="reviews-outer">
      <button
        onClick={handlePrev}
        disabled={!canScrollLeft}
        aria-label="Previous reviews"
        className="reviews-arrow reviews-arrow-left"
      >
        &#8592;
      </button>
      <div
        ref={containerRef}
        className="reviews"
      >
        <div className="reviews-inner">
          {reviews.slice(startIndex, startIndex + visibleCount).map((review, index) => (
            <Review key={index + startIndex} review={review} />
          ))}
        </div>
        {error && <Error message={error} />}
      </div>
      <button
        onClick={handleNext}
        disabled={!canScrollRight}
        aria-label="Next reviews"
        className="reviews-arrow reviews-arrow-right"
      >
        &#8594;
      </button>
    </div>
  );
}