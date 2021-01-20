<template>
  <div id="app">
    <button v-on:click="bookingServiceTest">Test Fetch</button>
    <bookings-list v-bind:bookings="bookings"></bookings-list>
  </div>
</template>

<script>
import BookingsService from './services/BookingsService.js';
import BookingsList from './components/BookingsList.vue';

export default {
  name: 'App',
  data() {
    return {
      bookings: [],
    };
  },
  components: {
    'bookings-list': BookingsList
  },
  methods: {
    bookingServiceTest() {
      BookingsService.getBookings().then((bookings) => {
        this.bookings = bookings;
      });
    },
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
