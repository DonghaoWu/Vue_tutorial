<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <button type="button" @click="addItem">Add item</button>
    <ul>
      <transition-group
        name="fade"
        enter-active-class="animate__animated animate__flipInX"
        leave-active-class="animate__animated animate__flipOutX"
      >
        <li
          v-for="(number, index) in numbers"
          :key="number"
          @click="removeItem(index)"
        >
          {{ number }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, num);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log('before-enter event fired.', el);
    },
    enter(el) {
      console.log('enter event fired.', el);
    },
    afterEnter(el) {
      console.log('after-enter event fired.', el);
    },
    beforeLeave(el) {
      console.log('before leave event fired.', el);
    },
    leave(el) {
      console.log('leave event fired.', el);
    },
    afterLeave(el) {
      console.log('after-leave event fired.', el);
    },
  },
};
</script>

<style>
.animate__flipOutX {
  position: absolute;
}

.animate__animated {
  animation-duration: 1.5s;
}

li {
  font-size: 22px;
  cursor: pointer;
}
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.fade-move {
  transition: all 1s linear;
}

.fade-leave-active {
  position: absolute;
}
</style>
