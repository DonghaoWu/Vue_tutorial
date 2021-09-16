### This is the instructions about Vue tutorials.

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

35. 

---

- project 2:

1. add Vue cdn in index.html
2. add create function in app.js
3.

---

- project 3:

1. add Vue cdn in index.html
2. add create function in app.js
3.
