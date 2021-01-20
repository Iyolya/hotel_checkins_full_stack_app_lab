<template>
  <div>
            {{booking.guestName}} - {{booking.email}} - {{booking.isCheckedin}}      <button>Edit</button>
  </div>
</template>

<script>
export default {
  name: 'booking-card',
  data() {
      return {

      }
  },
  props: ['booking']

}
</script>

<style lang="css" scoped></style>
