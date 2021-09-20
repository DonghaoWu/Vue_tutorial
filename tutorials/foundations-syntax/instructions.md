### This is the instructions about Vue tutorials.

### Vue Foundations.

---

- project 1:

1. add Vue cdn in index.html
2. add create function in app.js
3. run the index.html file in Browser
4. install Vue Devtools extension.(Get the chrome extension)

5. pass a variable to html file and render it.`(firstName: 'John')`
6. pass a variable to html file and render it.`(lastName: 'Doe')`

7. Add another Vue instances to show another`(firstName: 'Kate',firstName: 'Gin')`, then delete it.

8. access the instance(#app) data and modify the firstName from `John` to `Tom`

9. use html inline expression to show a full name.

10. use vue methods way to show a full name. `use regular function.`

11. Add vue directives to wait for the function done then render the result.`v-cloak` + `css`

12. Add a input in index.html to implement two ways data binding.`connect the input data with the variable`, so that we will see the variable change as we type. `v-model`

13. add a new variable. `(url: 'https://google.com')`

14. Add a google link <a> tag with a attribute using variable `url`. `v-bind:href`

15. use the `v-bind:href` shorthand version.

16. output a raw HTML. A new <a> tag.

- `<a href="https://google.com" target="_blank">Google: raw Html</a>` --- `v-html`

17. Add a new variable `age:20` and render it.

18. Add two buttons, one is an increment button, another one is a decrement button. Add fucntionality to this two buttons.

19. connect the event to a fucntion listener.`v-on:click="age++"`

20. define an increment function.

21. use event listener shorthand way. `@`

22. change the lastName input field method from `v-model` way to `event listener way` ---`:value | @input`. recommanded

23. Add an update last name method.

24. Pass a string as the first parameter in updateLastName method. `$event`

25. prevent the updateLastname default behavior.

26. add a event modifier so that we don't need `event.preventDefault()` --- `@input.prevent`

27. add a new variable, `middleName:''`

28. add a new input element to control the middleName field. with `@keyup` listener.

29. add a new method to the `keyup` listener. --- `updateMiddleName`

30. add `enter` modifier to `keyup` event. 这样就可以实现 input 之后按下 enter 才能修改 middleName。

31. add a input field with `v-model` to control the age variable. --- `type='text'`

32. change the input type from 'text' to 'number'.但这只能强制输入的是数字，但回传的仍然是 `string`。

33. add `number` modifier to `v-model`,这样就可以强制使回传的数据类型是 number。

34. add `lazy.trim` modifier to firstName input field.

35. remove the `lazy` modifier. 主要作用是不会马上显示更新。

36. computed feature. 引入这个功能的原因是当一个 method 调用时，其他 method 也可能调用，比如 {`{fullName()}}` 相当于调用一个 function，当 data 发生变化时会发生类似于 rerender 的动作，从而再一次调用了 `fullName fucntion`.

37. add a new key in createApp object, called `computed`, move the fullname function into in.

38. Change

```html
<p>{{fullName()}}</p>
// delete

<p>{{fullName}}</p>
```

39. fullName 的调用一开始是跟随 re-render 或者 data variable change 的，到后来在 computed 中只跟随 data variable change 而调用。`任何在 computed fucntion 里面的 data 变量一旦发生变化，function 就会被 invoke`

40. add a new key in createApp object, called `watch`,

41. 如果特定变量变化了，执行 watch 里面的对应函数。`这个说法错误。`

```js
watch:{
  age{newVal, oldVal}{
    setTimeout(()=>{
      this.age = 20;
    },3000)
  }
}
```

---

- project 2:

1. add Vue cdn in index.html
2. add create function in app.js
3. run the index.html file in Browser
4. install Vue Devtools extension.(Get the chrome extension)

5. bind a new class to the div with content `Hi`

6. the class name is `purple`, controlled by a data variabel called isPurple.

7. add a new variable called `isPurple` in data.

8. add a v-model into checkbox, called `isPurple`

9. 值得注意的是，第 8 步直接实现了 value toggle。

10. add a computed object, with a function called `circle_classes`

```js
circle_classes(){
  return {purple:this.isPurple}
}
```

11. change

```html
// delete
<div class="circle" :class="{purple:isPurple}">Hi!</div>

// add
<div class="circle" :class="circle_classes">Hi!</div>
```

12. add select tag with three options.

13. add a v-modle into select tag

14. add a new variable called 'selectedColor'

15. bind the div class to `selectedColor`

16. use this to bind mutiple classes.

```js
:class = '[selectedColor, circle_classes]'
```

17. binding styles.

18. add a new variable `size:150`

19. create an input tag, type is number, `v-model to size`.

20. bind the style with

```html
<div
  class="circle"
  :class="[selectedColor, circle_classes]"
  :style='{width: size + "px", height:size + "px"}'
></div>
```

21. add a new style property to style, add `[]`,

```html
:style='[ {width: size + "px", height:size + "px", lineHeight:size + "px"},
{transform:"rotate(300deg)"} ]'
```

---

- project 3:

1. add Vue cdn in index.html
2. add create function in app.js
3. run the index.html file in Browser
4. install Vue Devtools extension.(Get the chrome extension).

5. conditional rendering.

6. create a new variable, `mode : 1`

7. create three p tags, with

```html
v-if / v-else-if / v-else
```

- controlled by the `mode` variable

8. add a select tags, with three opitons, v-model to `mode`

9. apply the v-show directive.

10. add this.

```html
<i v-show="mode == 1">v-show</i>
```

11. v-show 的意思是 display:none, 然而 element 还是存在的，而 v-if 展示出来的是使 element `删除`。

---

- project 4:

1. add Vue cdn in index.html
2. add create function in app.js
3. run the index.html file in Browser
4. install Vue Devtools extension.(Get the chrome extension).

5. map through the birds data and people data.

6. add a unorder list in the `#app ` div.

7. add `v-for = "bird in birds"`

8. add (bird, index)

9. add another unorder list to render `people` variable.

10. create another way to loop through the person object.

---

- project 5:

1. add Vue cdn in index.html
2. add create function in app.js
3. run the index.html file in Browser
4. install Vue Devtools extension.(Get the chrome extension).

5. map through the people data and render them in cards.

6. add a click event listener in button, bind to a function named `move`

7. add function move in methods.

8. add a input field into the card loop div.

9. add `:key` attribute into the div, to bind all elments inside a single card.
