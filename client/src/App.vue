<template>
  <div id="app">
    <booking-form  v-on:booking-added="addToBookings"  ></booking-form>
    <button v-on:click="deleteBooking('60084522bc57a0be312c7bfd')"> Test Delete</button>
    <bookings-list v-bind:bookings="bookings" v-on:booking-delete="deleteBooking"></bookings-list>
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
    },
    deleteBooking: function(id) {
      console.log(id)
        let index = this.bookings.findIndex(booking => booking._id === id)
        console.log('id ', id, 'index: ', index)
        this.bookings.splice(index, 1)
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
