<template>
    <div>
        <ul>
            <li v-for="(booking, index) in bookings" :key="index">
                {{ booking.guestName }} {{booking.email}} - {{ booking.checkedIn }}
            <button v-on:click="deleteBooking(bookings[index])"> X</button>
            </li>
      </ul>
    </div>
</template>

<script>

import BookingsService from '../services/BookingsService.js';

    export default {
        name: "BookingsList",
        props: ['bookings'],
        methods: {
            deleteBooking: function(booking) {
                BookingsService.deleteBooking(booking._id)
                .then(() => this.$emit('booking-delete', booking._id))
            }
        },
    }
</script>

<style lang="css" scoped>

</style>