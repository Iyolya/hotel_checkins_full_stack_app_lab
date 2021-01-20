<template>
  <div id="app">
    <booking-form v-on:booking-added="addToBookings"></booking-form>
    <bookings-list v-bind:bookings="bookings"></bookings-list>
  </div>
</template>

<script>
import BookingsService from './services/BookingsService.js';
import BookingsList from './components/BookingsList.vue';
import BookingForm from './components/BookingForm.vue'

export default {
  name: 'App',
  data() {
    return {
      bookings: [],
    };
  },
  mounted () {
    this.getData();
  },
  components: {
    'bookings-list': BookingsList,
    'booking-form': BookingForm
  },
  methods: {
    getData: function() {
      BookingsService.getBookings().then((bookings) => {
        this.bookings = bookings;
      });
    },
    addToBookings: function(booking) {
        this.bookings.push(booking)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
