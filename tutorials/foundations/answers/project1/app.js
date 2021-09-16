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
    fullName() {
      return (
        this.firstName +
        ' ' +
        this.middleName +
        ' ' +
        this.lastName.toUpperCase()
      );
    },
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
}).mount('#app');

vm.firstName = 'Tom';