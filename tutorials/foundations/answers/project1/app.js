let vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: `<a href="https://google.com" target="_blank">Google: raw Html</a>`,
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log('hello');
      return (
        this.firstName +
        ' ' +
        this.middleName +
        ' ' +
        this.lastName.toUpperCase()
      );
    },
  },
  watch: {
    // firstName(newVal, oldVal) {
    //   console.log(newVal, oldVal);
    // },
  },
}).mount('#app');

vm.firstName = 'Tom';
