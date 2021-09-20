### This is the instructions about Vue foundations 2.

### Life cycle.

---

- project 1:

1. lifecycle hooks:

```js
let vm = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    };
  },
  beforeCreate() {
    console.log('beforeCreate() function called', this.message);
  },
  created() {
    console.log('created() function called', this.message);
  },
  beforeMount() {
    console.log('beforeMount() function called', this.$el);
  },
  mounted() {
    console.log('mounted() function called', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called', this.$el);
  },
  update() {
    console.log('update() function called');
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called');
  },
  unmounted() {
    console.log('unmounted() function called');
  },
});

vm.mount('#app');
```

2. Vue compiler. Using `template` keyword.

```js
// with compiler, full build
let vm = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    };
  },
  template: `{{message}}`,
});

vm.mount('#app');

// without compiler, manully creating the object. <global.js, lighter>
let vm2 = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    };
  },
  render() {
    return Vue.h('h1', this.message);
  },
});

vm2.mount('#app2');
```

3. Components:

```js
let vm = Vue.createApp({});

vm.component('hello', {
  template: `<h5>{{message}}</h5>`,
  data() {
    return {
      message: 'Hello World from component!',
    };
  },
});

vm.mount('#app');
```

```html
<!DOCTYPE >
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app">
      {{message}}
      <hello></hello>
      <hello></hello>
      <hello></hello>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```
