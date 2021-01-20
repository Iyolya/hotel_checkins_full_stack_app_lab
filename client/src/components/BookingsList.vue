<template>
    <div>
    
      <booking-card v-bind:booking="booking" v-for="(booking, index) in bookings" :key="index"></booking-card>
      
    </div>
</template>

<script>

import BookingsService from '../services/BookingsService.js';
import BookingCard  from './BookingCard'
    export default {
        name: "BookingsList",
        components: {
            'booking-card': BookingCard,
        },
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