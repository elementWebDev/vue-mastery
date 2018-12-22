# Notes

## Shortcuts

Because of the popularity of certain directives, there has been an effort to use shorthand for ease-of-use.

### v-bind:

- `:alt="description"`
- `:href="url"`
- `:title="toolTip"`
- `:class="isActive"`
- `:style="isStyled"`
- `:disabled="isDisabled"`

### v-on:

- @click
	- `<button @click="addToCart">Add to Cart</button>`
- @mouseover
	- `<div @mouseover="updateProduct">Color</div>`
- @submit
	- `<form @submit="addToCart">...</form>`
- @keyup
	- `<input @keyup.enter="send">`

---

## Use `:key` when using `v-for`

e.g. `<div v-for="variant in variants" :key="variant.variantId">`

---

Expression examples

 *  `{{ product + '?' }}`
 *  `{{ firstName + ' ' + lastName }}`
 *  `{{ clicked ? true : false }}`
 *  `{{ message.split('').reverse().join('') }}`

---

[5. Event Handling `(see notes below video)`](https://www.vuemastery.com/courses/intro-to-vue-js/event-handling)

---
