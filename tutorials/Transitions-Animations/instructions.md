### This is the instructions about Vue transitions and animations.

### Transitions and Animations.

---

1. add basic transition.

- `App.vue`

```vue
<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <transition name="fade" mode="out-in">
      <h2 v-if="flag" key="main">Flag is true now.</h2>
      <h2 v-else key="secondary">Another hello!</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 3s linear;
}

.fade-leave-to {
  transition: all 3s linear;
  opacity: 0;
}
</style>
```

2. Animating with css animations.

- `App.vue`

```vue
<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <transition name="zoom" type="animation" appear>
      <h2 v-if="flag">Hello</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style>
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

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
```

3. animation with javaScript

- `App.vue`

```vue
<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
    >
      <h2 v-if="flag">Hey</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('before-enter event fired.', el);
    },
    enter(el, done) {
      console.log('enter event fired.', el);
      const animation = el.animate(
        [
          {
            transform: 'scale3d(0, 0, 0)',
          },
          {},
        ],
        { duration: 1000 }
      );
      animation.onfinish = () => {
        done();
      };
    },
    afterEnter(el) {
      console.log('after-enter event fired.', el);
    },
    beforeLeave(el) {
      console.log('before leave event fired.', el);
    },
    leave(el, done) {
      console.log('leave event fired.', el);
      const animation = el.animate(
        [
          {},
          {
            transform: 'scale3d(0, 0, 0)',
          },
        ],
        { duration: 1000 }
      );
      animation.onfinish = () => {
        done();
      };
    },
    afterLeave(el) {
      console.log('after-leave event fired.', el);
    },
  },
};
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
</style>
```

4. CSS & JavaScript transitions.

- `App.vue`

```vue
<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      name="fade"
    >
      <h2 v-if="flag">Hey</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
  methods: {
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
</style>
```

5. Animating a list.

- `App.vue`

```vue
<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <button type="button" @click="addItem">Add item</button>
    <ul>
      <transition-group name="fade">
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
```

6. Transition CSS class names, add an external CSS library.

- `index.html`

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

- `App.vue`

```vue
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
```
