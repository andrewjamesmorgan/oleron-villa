
use('Oleron');
const bookings = db.getCollection('bookings');

const sampleDocument = {
  "property": "Oleron Villa",
  "start": new Date("2025-01-04T00:00:00Z"),
  "end": new Date("2025-01-11T00:00:00Z"),
  "booked": false,
  "price": 1200,
  "archived": false
};

const fullYearOf2026WeeklyBookings = Array.from({ length: 52 }, (_, i) => {
  const startDate = new Date(Date.UTC(2026, 0, 3 +  i * 7));
  const endDate = new Date(Date.UTC(2026, 0, 10 + i * 7));
  return {
    "property": "Oleron Villa",
    "start": startDate,
    "end": endDate,
    "booked": false,
    "price": 1250,
    "archived": false
  };
});

// bookings.insertOne(fullYearOf2026WeeklyBookings[0]);

bookings.insertMany(fullYearOf2026WeeklyBookings);