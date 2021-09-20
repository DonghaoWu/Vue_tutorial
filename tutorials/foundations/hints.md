### This is the hints about Vue tutorials.(Chinese edition)

### Vue Foundations.

---

#### project 1:

1. 如何添加 Vue cdn？
2. 如何在 app.js 中添加 vue 内容使得 app.js 跟 index.html 连接？
3. 如何运行 index.html？
4. 如何使用 vue devtools？

5. 如何建立变量，然后从 app.js 向 index.html 传递变量？

6. 如何实现展现多个 instance 连接？

7. 如何在 app.js 中通过代码改变变量的值？

8. 如何在 index.html 中使用变量公式进行运算？

9. 如何在 app.js 中定义 function 并在 index.html 中使用？ `use regular function.`

10. 如何实现先计算后呈现，而不是先呈现后计算再呈现？`v-cloak` + `css`

11. 如何使用 `v-model` 实现双向绑定？

12. 如何使用 `v-bind:href` 对 <a> 的 attribute 进行绑定？

13. 如何使用 `v-html` 输出 raw-html？

14. 尝试使用两种方法去改变变量，一种是 `v-on:click="age++"`，另外一种是 `v-on:click="increment"`，其中第二种是另外定义 function 的方式。

15. event listener 的简写是 `v-on:click =====> @click`

16. 如何使用另外一种双向绑定方法，也就是从 `v-model` 到 `value + @input` 方式的转换。(更推荐)。

17. 如何使用 `@input.prevent` 代替 `event.preventDefault()`？

18. 如何使用 `@keyup.enter` 实现输入后按下 enter 键才改变变量？

19. change the lastName input field method from `v-model` way to `event listener way` ---`:value | @input`. `recommanded`

20. 如何使用 `v-model.number` 实现在双向绑定中回传一个数字变量。

21. 如何使用 `v-model.lazy.trim` 实现自动清除输入空格？使用 `lazy` 相当于双向绑定取消了。---- `疑惑点1`

22. 如何使用 `computed` 功能实现 pure component 的功能，也就是说当 fucntion 相关变量改变的时候那个 funciton 才会重新被调用。

23. 如何在 index.html 中调用在 `computed` 中定义的 function？

24. 如何使用 `watch`，主要用来记录输入值的前后变化，作为一个缓存作用? ---- `疑惑点2`

---

#### project 2:

1. 如何使用变量去控制一个类的值，如 `":class="{purple:isPurple}"`

2. 如何在 checkbox 中通过 `v-model` 去 toggle 一个变量？

3. 如何使用 computed function 去替代直接的表达式。类似的点还有 `project1 8 & 9`

```html
// delete
<div class="circle" :class="{purple:isPurple}">Hi!</div>

// add
<div class="circle" :class="circle_classes">Hi!</div>
```

4. 如何在 select 中通过 `v-model` 去改变一个变量？

5. add a new variable called 'selectedColor'

6. 如何使 `:class` 绑定多个 class 的表达式。

```js
:class = '[selectedColor, circle_classes]'
```

7. 如何使用 `:style` 去绑定多个变量并使用 inline 表达式？

```html
<label>Size:<input type="number" v-model="size" /></label>
<div
  class="circle"
  :class="[selectedColor, circle_classes]"
  :style='[ {width: size + "px", height:size + "px", lineHeight:size + "px"},
{transform:"rotate(300deg)"} ]'
></div>
```

---

#### project 3:

1. 如何使用 `v-model` 去控制一个变量，然后使用 `v-if="model == 1"` 去实现 conditional rendering。

2. v-show 的意思是 display:none, 然而 element 还是存在的，而 v-if 展示出来的是使 element `删除`。

---

#### project 4:

1. 如何 map through 一个 array 并 render？ `v-for`

2. 如何 map through 一个 object 并 render？ `v-for`

3. 如何 map through 一个 object 并 提取它的 key 和 value？

---

#### project 5:

1. 如何实现 map through cards 时，card 里面的所有元素也随着 card 的移动而移动？ `:key`。
