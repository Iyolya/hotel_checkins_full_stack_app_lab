use hotel_db
db.dropDatabase();


db.bookings.insertMany([
    {
        guestName: "Basil Fawlty",
        email: "basil@fawlty",
        checkedIn: true
    },
    {
        guestName: "Sybil Fawlty",
        email: "Sybil@Fawlty",
        checkedIn: false
    },
    {
        guestName: "Polly Sherman",
        email: "Polly@fawtly",
        checkedIn: false
    },
    {
        guestName: "Manuel",
        email: "manuel@fawlty",
        checkedIn: true
    },
    
])

