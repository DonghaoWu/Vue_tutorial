### This is the instructions about Vue master project.

### Life cycle.

---

- project 1:

1. install yarn

```
$ npm install -g yarn
$ yarn --version
$ npm uninstall -g @vue/cli
$ npm list -g --depth
$ yarn global add @vue/cli
$ vue --version
```

2. Vue UI

```bash
$ vue ui
```

3. create a vue project with vue UI

```bash
create => project folder name => package manager => Manual => Babel + choose vue version + Router + Vuex + Linter / Formatter + Unit Testing + E2E Testing + Use config files => next => version 3 + use history mode for router + linter(Airbnb config) + lint on save + Jset(unit testing) + Cypress(E2E testing) => create project
```

4. vue files

- plugins tag
- dependencies
- `delete .editorconfig`

5. Adding the template

- tailwind
- download the files, put the files into template folder
- `delete HelloWorld.vue`
-

- `App.vue`

```vue
<template>
  <div></div>
</template>
```

- `assets/index.html`

```vue

```

- apply index.html in `App.vue`

- copy everything inside <body> tag.
- paste the code in `App.vue` template block.

6. Tailwind (a CSS framework, like bootstrap.)

- install tailwind
- add plugin button on the right side
- search `vue-cli-plugin-tailwind`

- select `minimal` option.
- continue

7. Practising with tailwind.

```html
<body class="bg-gray-100 font-sans pb-24"></body>
```

8. loading assets

- `main.js`

```js
import './assets/main.css';
```

- copy the `assets` folder and put it in public folder.

- delete the css folder.

- copy the index.html link tag to `public/index.html`

9. understanding state.

- state refers to the data for your application.
- Typically retrieved from a database or API.
- pass down callback function

- inspired byt the Flue implementation.
- A single location where all your data is stored and managed.
- Vuex is the most popular choice for Vue.

- using the centralized state is optional.

10. VueX

- install

```bash
$ yarn add vuex
```

- `main.js`

```js
createApp(App).use(store).use(router).mount('#app');
```

- `store/index.js`

```js
import { createStore } from 'vuex';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
```

11. splitting the files into components.

- `Header.vue`
- `Auth.vue`

- `App.vue`

```vue
<template>
  <div>
    <AppHeader></AppHeader>
    <AuthModal></AuthModal>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';
import AppHeader from './components/Header.vue';
import AppHeader from './components/Header.vue';
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
  },
};
</script>
```

12. working on state.

- `store/index.js`

```js
import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalSHow: false,
  },
  mutations: {},
  actions: {},
  modules: {},
});
```

- `Header.vue`

```html
<a class="px2 text-white" href="#" @click.prevent="toggleAuthModal"></a>

<script>
  export default {
    name: 'Header',
    methods: {
      toggleAuthModal() {
        this.$store.state.authModalShow = !this.$store.state.authModalShow;
      },
    },
  };
</script>
```

13. using mutation.

- `store/index.js`

```js
import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  actions: {},
  modules: {},
});
```

- `Header.vue`

```html
<a class="px2 text-white" href="#" @click.prevent="toggleAuthModal"></a>

<script>
  export default {
    name: 'Header',
    methods: {
      toggleAuthModal() {
        this.$store.commit('toggleAuthModal');
      },
    },
  };
</script>
```

14. Mapping mutations.

```html
<a class="px2 text-white" href="#" @click.prevent="toggleAuthModal"></a>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'Header',
    methods: {
      ...mapMutations(['toggleAuthModal']),
    },
  };
</script>
```

15. understanding getter / using getters.

- `store/index.js`

```js
import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    authModalShow: (state) => {
      return state.authModalShow,
    },
  },
});
```

- `Auth.vue`

```vue
<template>
  <div class="" id="modal" :class="{ hidden: !authModalShow }"></div>
</template>

<script>
export default {
  name: 'Auth',
  computed: {
    authModalShow() {
      return this.$store.getters.authModalShow;
    },
  },
};
</script>
```

16. closing the modal

- `store/index.js`

```js
import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    authModalShow: (state) => {
      return state.authModalShow,
    },
  },
});
```

- `Auth.vue`

```vue
<template>
  <div class="" id="modal" :class="{ hidden: !authModalShow }"></div>

  <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAuthModal">
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Auth',
  computed: {
    authModalShow() {
      return this.$store.getters.authModalShow;
    },
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
};
</script>
```

17. mapping getters and state properties

- `store/index.js`

```js
import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    authModalShow: (state) => {
      return state.authModalShow,
    },
  },
});
```

- `Auth.vue`

```vue
<template>
  <div class="" id="modal" :class="{ hidden: !authModalShow }"></div>

  <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAuthModal">
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Auth',
  computed: {
    ...mapGetters(['authModalShow']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
};
</script>
```

- `Auth.vue`

```vue
<template>
  <div class="" id="modal" :class="{ hidden: !authModalShow }"></div>

  <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAuthModal">
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Auth',
  computed: {
    ...mapState(['authModalShow']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
};
</script>
```

- mapGetters: Better for performing `a calculation` on / with a state property.

- mapState: Better for retrieving `a state property`.

18. Alisas.

- `Auth.vue`

```vue
<template>
  <div class="" id="modal" :class="{ hidden: !modal }"></div>

  <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAuthModal">
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Auth',
  computed: {
    // ...mapState(['authModalShow']),
    ...mapState({
      modal: 'authModalShow',
    }),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
};
</script>
```

19. Adding tabs.

- `Auth.vue`

```vue
<template>
  <a
    @click.prevent="tab = 'login'"
    :class="{
      'hover:text-white text-white bg-blue-600': tab === 'login',
      'hover:text-blue-600': tab === 'register',
    }"
    >Login</a
  >
  <a
    @click.prevent="tab = 'register'"
    :class="{
      'hover:text-white text-white bg-blue-600': tab === 'register',
      'hover:text-blue-600': tab === 'login',
    }"
    >Register</a
  >

  <form v-show='tab=== 'login''></form>
  <form v-show='tab=== 'register''></form>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Auth',
  data(){
    return{
      tab:'login'
    }
  }
  computed: {
    // ...mapState(['authModalShow']),
    ...mapState({
      modal: 'authModalShow',
    }),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
};
</script>
```
