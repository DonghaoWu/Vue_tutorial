Vue.js

1. installation

- CDN:[vue link](v3.vuejs.org)

```html
<script src="https://unpkg.com/vue@next"></script>
```

- html file `(index.html)`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app">
      <p>Hey</p>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

- js file `(app.js)`

```js
Vue.createApp({}).mount('#app');
```

- css file `(main.css)`

```css
body {
  font-size: 22px;
}

input[type='text'] {
  margin: 10px 0;
  display: block;
}
```

2. vue dev tool extention

- `Vue Dev Tools`

3. working with data

```js
Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      lastName: 'k',
    };
  },
}).mount('#app');
```

- using the data in html file

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app">{{ 2 + 2}} // expression</div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app">{{ firstName }}</div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

- `使用 {{}} 去获得变量，且变量只能在`

```html
<div id="app"></div>
```

- `之内使用。`

- `所有的传递 data 必须在 data method 之内。`

5. Multiple Vue instances

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app">{{ firstName }}</div>

    <div id="app2">{{ lastName }}</div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```js
Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
    };
  },
}).mount('#app');

Vue.createApp({
  data() {
    return {
      lastName: 'K',
    };
  },
}).mount('#app2');
```

6. accessing the instance data

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
    };
  },
}).mount('#app');

setTimeout(() => {
  vm.firstName = 'Bob';
}, 2000);
```

- `with proxy.`, you can check vm name in chrome console.

7. methods, `必须尝试这个例子。`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app">{{ firstName.toUpperCase() }}</div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
  },
}).mount('#app');
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app">{{ upperCase() }}</div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

- `method 中要使用 this keyword，同时不要用 arrow function 来定义 method。`

8. Directives. 主要用于提升 page performance。

```js
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app" v-cloak>{{ upperCase() }}</div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```css
[v-cloak] {
  display: none;
}
```

9. two ways data binding

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app" v-cloak>
      {{ upperCase() }}

      <hr />
      <label>First name</label>
      <input type="text" v-model="firstName" />

      <label>Last name</label>
      <input type="text" v-model="lastName" />
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

- 关键词：`v-model`

10. Binding attributes

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app" v-cloak>
      <p>{{ upperCase() }}</p>
      <p><a v-bind:href="url" target="_blank">Google</a></p>

      <hr />
      <label>First name</label>
      <input type="text" v-model="firstName" />

      <label>Last name</label>
      <input type="text" v-model="lastName" />
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      lastName: 'Doe',
      url: 'https://google.com',
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
  },
}).mount('#app');
```

- 关键词：`v-bind || :`

11. output Raw Html `安全范畴。`

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
  },
}).mount('#app');
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app" v-cloak>
      <p>{{ upperCase() }}</p>
      <p><a v-bind:href="url" target="_blank">Google</a></p>
      <p v-html="raw_html"></p>

      <hr />
      <label>First name</label>
      <input type="text" v-model="firstName" />

      <label>Last name</label>
      <input type="text" v-model="lastName" />
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

- 关键词：v-html。
- 问题：这样的写法好吗？

12. listening to Events

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app" v-cloak>
      <p>{{ upperCase() }}</p>
      <p><a v-bind:href="url" target="_blank">Google</a></p>
      <p v-html="raw_html"></p>
      <p>{{age}}</p>

      <hr />
      <label>First name</label>
      <input type="text" v-model="firstName" />

      <label>Last name</label>
      <input type="text" :value="lastName" @input="updateLastName" />

      <button type="button" v-on:click="increment">Increment</button>
      <button type="button" v-on:click="age--">Decrement</button>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
    },
  },
}).mount('#app');
```

- 关键词：`v-on:click`, `@click`

- binding and controlling

- 推荐这个：

```html
<label>Last name</label>
<input type="text" :value="lastName" @input="updateLastName" />
```

13. passing on data with events

```html
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS Course</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
  </head>

  <body>
    <div id="app" v-cloak>
      <p>{{ upperCase() }}</p>
      <p><a v-bind:href="url" target="_blank">Google</a></p>
      <p v-html="raw_html"></p>
      <p>{{age}}</p>

      <hr />
      <label>First name</label>
      <input type="text" v-model="firstName" />

      <label>Last name</label>
      <input
        type="text"
        :value="lastName"
        @input="updateLastName(last name event triggered!', $event)"
      />

      <button type="button" v-on:click="increment">Increment</button>
      <button type="button" v-on:click="age--">Decrement</button>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
}).mount('#app');
```

14. event modifier

```html
<label>Last name</label>
<input
  type="text"
  :value="lastName"
  @input.prevent="updateLastName('last name event triggered!', $event)"
/>
```

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault(); // delete
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
}).mount('#app');
```

15. keyboard events and modifiers

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      middleName: '',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault(); // delete
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
}).mount('#app');
```

```html
<label>Middle name</label> <input type="text" @keyup.enter="updateMiddleName" />
```

16. v-model modifiers

```html
<input type="number" v-model.number="age" />

<input type="text" v-model.lazy.trim="firstName" />
```

17. Computed Properties. pure component.

```js
fullName(){
  console.log('full name funciton.')
  return `123`;
}
```

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      middleName: '',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault(); // delete
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
  },
}).mount('#app');
```

```html
<p>{{ upperCase }}</p>
```

18. Watchers

```js
const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Tom',
      middleName: '',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault(); // delete
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    upperCase() {
      return `${this.firstName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount('#app');
```

19. Binding Classes.

```html
<div class="circle" :class="{purple:isPurple}">Hi!</div>

<label> <input type="checkbox" v-model="isPurple" />Purple</label>
```

```js
let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
  },
}).mount('#app');
```

```html
<div class="circle" :class="[selectedColor,circle_classes]">Hi!</div>

<select v-model="selectedColor">
  <option value="">White</option>
  <option value="text-black">Black</option>
  <option value="text-orange">Orange</option>
</select>
```

20. Binding Styles

```js
<input type='number' v-model='size'>

<div class="circle" :class="[selectedColor,circle_classes]" :style='{width: size + 'px', height:size + 'px', lineHeight:size + 'px'},{transform:'rotate(30deg)'}'>Hi!</div>
```

21. conditional rendering

```html
<div id="app">
  <p v-if="mode == 1">Showing v-if directive content</p>
  <p v-else-if="mode == 2">v-else-if</p>
  <p v-else>v-else</p>

  <select v-model="mode">
    <option value="1">v-if</option>
    <option value="2">v-else-if</option>
    <option value="3">v-else</option>
  </select>
</div>
```

```js
let vm = Vue.createApp({
  data() {
    return {
      mode: 1,
    };
  },
}).mount('#app');
```

22. the v-show directive, hide an element.

```html
<i v-show="mode == 1">v-show</i>
```

23. v-show / v-if

24. List rendering

```js
let vm = Vue.createApp({
  data() {
    return {
      birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
      people: [
        { name: 'John', age: 20 },
        { name: 'Rick', age: 18 },
        { name: 'Amy', age: 33 },
      ],
    };
  },
}).mount('#app');
```

```html
<div id="app">
  <ul>
    <li v-for="(bird, index) in birds" :class="bird">{{bird}} - {{index}}</li>
  </ul>

  <ul>
    <li v-for="(person) in people">
      <div>{{person.age}}</div>
      <div>{{person.name}}</div>
    </li>
  </ul>

  <ul>
    <li v-for="(person) in people">
      <div v-for="(value, key, index) in person">
        {{key}}:{{value}} - Index:{{index}}
      </div>
    </li>
  </ul>
</div>
```

25. understanding the role of the key attribute.

```html
<div id="app">
  <div id="app">
    <button type="button" class="move" @click="move">Move to Bottom</button>
    <div class="card" v-for="person in people" :key='person.name'>
      <h3>{{person.name}}</h3>
      <p>{{person.message}}</p>
      <input type="text" />
    </div>
  </div>
</div>
```

```js
methods:{
  move(){
    const first = this.people.shift();
    this.people.push(first);
  }
}
```
