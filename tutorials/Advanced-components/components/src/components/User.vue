<template>
  <div>
    <p>The user is {{ age }} years old</p>
    <p>Double age:{{ ageDoubled }}</p>
    <button type="button" @click="onClickAge">Update Age Event</button>
    <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    age: {
      type: Number,
      // required: true,
      // default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ['age-change'],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit('age-change', 3);
    },
  },
};
</script>

<style></style>
