export default {
  pepperoni: function () {
    console.log('Pepperoni topping added!');
  },
  bacon: function () {
    console.log('Bacon topping added!');
  },
  myFunc: async function () {
    let myPromise = () => {
      return new Promise((res, rej) => {
        res('this is a message from ES6.');
      });
    };
    const mes = await myPromise();
    console.log(mes);
  },
};
