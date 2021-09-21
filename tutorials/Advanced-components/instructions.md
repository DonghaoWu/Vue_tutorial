### This is the instructions about Vue advanved component.

### Vue advanced component.

---

- project 1:

1. Vue CLI

2. Install the Vue ClI

```bash
$ npm i -g @vue/cli
$ vue create components
$ cd components
$ npm run serve
```

3. Sidebar:understanding servers

4. install VS code plugin `Vetur`.

5. creating components

- delete `assets & components` folders
- editing App.vue file

```vue
<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello world',
    };
  },
};
</script>
```

6. Child component

- new folder `components`, new file in it named `Greeting.vue`

- `Greeting.vue`

```vue
<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      msg: 'Hello world',
    };
  },
};
</script>
```

- `App.vue`

```vue
<template>
  <Greeting></Greeting>
</template>

<script>
import Greeting from './components/Greeting.vue';

export default {
  name: 'App',
  components: {
    Greeting,
  },
};
</script>
```

- `main.js`

```js
import { createApp } from 'vue';
import App from './App.vue';

const vm = createApp(App);

vm.mount('#app');
```

7. component styles

- `Greeting.vue`

```vue
<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      msg: 'Hello world',
    };
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
```

- App.vue

```vue
<template>
  <div>
    <p>Hey!</p>
    <Greeting></Greeting>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';

export default {
  name: 'App',
  components: {
    Greeting,
  },
};
</script>
```

8. Using SASS.

- install SASS

```bash
$ npm i node-sass@4.14.1 sass-loader@10.0.5 --save-dev
```

- `Greeting.vue`

```vue
<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Greeting',
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
```

9. Communication between components.

- Root / Siblings

- send data down using props.

- `App.vue`

```vue
<template>
  <div>
    <h3>Hey!</h3>
    <Greeting></Greeting>
    <User :age="age"></User>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
};
</script>
```

- `/components/User.vue`

- shorthand command: `vue + enter`

```vue
<template>
  <p>The user is {{ age }} years old</p>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
};
</script>

<style></style>
```

10. The limitation of props

- `App.vue`

```vue
<template>
  <div>
    <h3>Hey!</h3>
    <Greeting :age="age"></Greeting>
    <User :age="age"></User>

    <button type="button" @click="age++">Update Age</button>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
};
</script>
```

- `Greeting.vue`

```vue
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
```

- 如果把 button 放在 User.vue 或者 Greeting.vue，则会出错，且不会改变 age 的值。

- 这就是类似 react 的单向父传子参数的限制，在 react 中如果要解决这个问题，需要做的是把函数在父组件中 `bind`，然后传递到子组件中使用。

11. Emitting Events

- to produce or trigger an event

- `User.vue`

```vue
<template>
  <p>The user is {{ age }} years old</p>
  <button type="button" @click="onClickAge">Update Age</button>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
  methods: {
    onClickAge() {
      this.$emit('age-change');
    },
  },
};
</script>

<style></style>
```

- `App.vue`

```vue
<template>
  <div>
    <h3>Hey!</h3>
    <Greeting :age="age"></Greeting>
    <User :age="age" @age-change="age++"></User>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
};
</script>
```

- 以上展示了如何向下传递 method，并绑定和侦听的过程。

- `App.vue`

```vue
<template>
  <div>
    <h3>Hey!</h3>
    <Greeting :age="age"></Greeting>
    <User :age="age" @age-change="updateAge"></User>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
  },
};
</script>
```

- `User.vue`

```vue
<template>
  <div>
    <p>The user is {{ age }} years old</p>
    <p>Double age:{{ ageDoubled }}</p>
    <button type="button" @click="onClickAge">Update Age</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
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
```

- 以上展示了如何向绑定的 method 传递相应的 parameter。

12. Validating props.

- `User.vue`

```vue
<template>
  <div>
    <p>The user is {{ age }} years old</p>
    <p>Double age:{{ ageDoubled }}</p>
    <button type="button" @click="onClickAge">Update Age</button>
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
```

13. Callback function.

- `App.vue`

```vue
<template>
  <div>
    <h3>Hey!</h3>
    <Greeting :age="age"></Greeting>
    <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></User>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
```

- `User.vue`

```vue
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
```

- 这里介绍的是另外一种传递 method 的方法，这种方法更类似于 React 的传递 bind method 的方式。

- 大多数的 tutorials 和 documentations 会推荐使用 events。

14. Inserting content with slots.

```bash
$ vue create slots
```

- `App.vue`

```vue
<template>
  <AppForm />
</template>

<script>
import AppForm from './components/Form.vue';
export default {
  name: 'App',
  components: {
    AppForm,
  },
};
</script>

<style></style>
```

- `components/Form.vue`

```vue
<template>
  <form>
    <div class="help">
      <p>this is some help text.</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AppForm',
};
</script>

<style></style>
```

- How to reuse the form component?

- `App.vue`

```vue
<template>
  <AppForm>
    <div class="help">
      <p>this is some help text.</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
  </AppForm>
  <AppForm></AppForm>
</template>

<script>
import AppForm from './components/Form.vue';
export default {
  name: 'App',
  components: {
    AppForm,
  },
};
</script>

<style></style>
```

- `components/Form.vue`

```vue
<template>
  <form>
    <slot>No form to render.</slot>
  </form>
</template>

<script>
export default {
  name: 'AppForm',
};
</script>

<style></style>
```

15. Optimize named slots.

- `App.vue`

```vue
<template>
  <div>
    <AppForm>
      <template v-slot:help>
        <p>{{ help }}</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
      </template>
      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>
      <p>Dummy text</p>
    </AppForm>
    <AppForm>
      <template v-slot:help>
        <p>Contact help text.</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="message" />
      </template>
      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>
    </AppForm>
  </div>
</template>

<script>
import AppForm from './components/Form.vue';
export default {
  name: 'App',
  components: {
    AppForm,
  },
  data() {
    return {
      help: 'This is some help text.',
    };
  },
};
</script>

<style></style>
```

- `components/Form.vue`

```vue
<template>
  <form>
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
    <slot></slot>
  </form>
</template>
```

16. Dynamic components.

- create

```bash
$ vue create dynamic-component
$ cd dynamic-component
$ npm run serve
```

- `App.vue`

```vue
<template>
  <div>
    <select v-model="componentName">
      <option value="Home">Home</option>
      <option value="About">About</option>
    </select>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Home,
    About,
  },
  data() {
    return {
      componentName: 'Home',
    };
  },
};
</script>

<style></style>
```

- `Home.vue`

```vue
<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log('Home component unmounted.');
  },
  activated() {
    console.log('Home component activated.');
  },
  deactivated() {
    console.log('Home component deactivated.');
  },
};
</script>

<style></style>
```

- `About.vue`

```vue
<template>
  <h1>About Page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log('About component unmounted.');
  },
};
</script>
```

- 要使用 `<component :is="componentName"></component>` 的方式来选择组件进行 render。
- 要使用 `keepAlive` 来保证切换组件的过程中不触发 `unmounted`，从而保持了数据的不会进行重复 fetch。
- 使用了 `keepAlive` 之后，组件就有两个状态：`activated` 和 `deactivated`.