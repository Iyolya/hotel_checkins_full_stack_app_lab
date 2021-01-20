<template>
    <div>
        <ul>
            <li v-for="(booking, index) in bookings" :key="index">
                {{ booking.guestName }} - {{ booking.checkedIn }}
            </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "BookingsList",
        props: ['bookings']
    }
</script>

<style lang="css" scoped>

</style>