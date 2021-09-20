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
