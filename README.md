# react-toaster-js

`npm i -S react-toaster-js`

## Component

```js
const { Toaster } = require('react-toaster-js')

// place where you'd like in your app
module.exports = () => <Toaster />;
```


## Usage

```js
const toaster = require('react-toaster-js');

// display an info toast with no title
toastr.info('Are you the 6 fingered man?')

// display a warning toast, with no title
toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

// display a success toast, with a title
toastr.success('Have fun storming the castle!', 'Miracle Max Says')

// display an error toast, with a title
toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

// remove all toasts without using animation
toastr.remove()

// override global options
toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', { timeOut: 5000 })
```

## Options

`position: String`
The position to mount the toaster. Possible values: `top-right`, `top-left`, `bottom-right`, `bottom-left`. Defaults to `top-right`.

`type: String`
The type of toast to throw. Possible values: `success`, `danger`, `info`, `warning`. Defaults to `''` (standard).

`className: String`
Adds the class to the toast.

`title: String`
The title of the toast.

`message: String`
The message of the toast

`fade: Number`
The duration to wait until fade, in milliseconds. Defaults to `5000`.

`duration: Number`
The toast display duration, in milliseconds. Defaults to `15000`.

`nofade: Boolean`
Prevents the toast from fading. Defaults to `false`.

`persist: Boolean`
Prevents the toast from expiring. Defaults to `false`.

`dismissible: Boolean`
Whether the toast can be dismissed with a click. Defaults to `true`.


## Styles

### CSS

An `index.css` file is located in the root of the project.

### #SASS

An `index.scss` file is located in the root of the project.