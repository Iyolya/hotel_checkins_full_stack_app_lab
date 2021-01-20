<template>
    <div>
        <form v-on:submit.prevent="addBooking">
            <input type="text" placeholder="Name" v-model="name">
            <input type="email" placeholder=" email" v-model="email">
            <input type="submit" value="Create Booking">
        </form>
    </div>
</template>

<script>
    import BookingsService from '../services/BookingsService'
    export default {
        name: 'BookingForm',
        data() {
            return {
                name: null,
                email: null,
                checkedIn: false,
            }
        },
        methods: {
            addBooking() {
                const booking = {
                    guestName: this.name,
                    email: this.email,
                    checkedIn: this.checkedIn
                }
                BookingsService.addBooking(booking)
                .then(res => this.$emit('booking-added', res))
                
            }
        },
    }
</script>

<style lang="css" scoped>

</style>