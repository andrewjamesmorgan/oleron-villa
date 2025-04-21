import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import MarkdownText from '../MarkdownText';
import Stars from './Stars';

export default function Review({ review }) {
  const [reviewText, setReviewText] = useState(null);
  const { language } = useContext(UserContext);
  
  useEffect(() => {
    setReviewText(language === 'fr' ? review.reviewFR : review.review);
  }, [review,language]);

  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString(language === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
    });
  }

  return (
    <div id='review-info' className={`review-info`}>
      <p><b>{ language === 'fr' ? review.headlineFR : review.headline }</b></p>
      <Stars rating={review.stars} />
      <p><i>{ review.name} – {formatDate(review.date) }</i></p>
      <MarkdownText>
        { reviewText }
      </MarkdownText>
    </div>
  );
}