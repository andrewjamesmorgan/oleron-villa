export default function Stars({ rating }) {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="stars">
      {[...Array(fullStars)].map((_, i) => (
        <i key={`full-${i}`} className="fa fa-star" aria-hidden="true"></i>
      ))}
      {halfStar && <i className="fa fa-star-half-o" aria-hidden="true"></i>}
      {[...Array(emptyStars)].map((_, i) => (
        <i key={`empty-${i}`} className="fa fa-star-o" aria-hidden="true"></i>
      ))}
    </div>
  );
}