<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view the hidden message</p>
</template>

<script>
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Hello world',
    };
  },
};
</script>

<style scoped lang="scss">
$red: #32cc60;
p {
  color: $red;
}
</style>
