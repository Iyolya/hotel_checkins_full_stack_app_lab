const baseURL = 'http://localhost:3000/api/bookings/';

export default {
  getBookings() {
    return fetch(baseURL)
    .then((res) => res.json());
  },
  addBooking(booking){
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
    }).then(res => res.json())
  }
};

// postGame(payload){
//     return fetch(baseURL, {
//       method: 'POST',
//       body: JSON.stringify(payload),
//       headers: { 'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
//   }

