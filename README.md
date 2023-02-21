# coconutprefix
The simplest command parser that could be used to implement prefix commands

Although it is powerful library to handle prefix commands for bot development in discord, this library **IS NOT** dependent on any discord library.
You can use it in any other project you'd like to implement some command management.

## Import
First of all as always you will need to import the library using the old good way:
```js
const Prefix = require('coconutprefix')
```

## Create instance
We decided to design it using OOP paradigm so you will need to create an instance like that:
```js
const commandHandler = new Prefix('/')
```
The argument that you pass in constructor could be a single character like we just did 
or you could use an array of strings to handle command with more than one prefix:

```js
const commandHandler = new Prefix('/', '!', '.')
```

You could use prefix with more than one character as well:

```js
const commandHandler = new Prefix('/', '!', '.command$')
```

## Use it
Now you can call *handleCommand* method and pass your command as string


#### single word argument
```js
const myCommand = `/print hello!`
const [error, command, params] = commandHandler.parseCommand(myCommand)
```

| property | value |
| -------- | -------- |
| error | It will be an error message if there is one. Otherwise it will be undefined |
| command | It will take the name of the command (word that sticks to prefix)  |
| args | It will take an array of parms that are passed with the command|

#### multiple words argument
if you need to handle more than one word argument (for example you need to print *hello world* istead of simple *hello!*)
you have to wrap the argument with `quotes (" ")`

example:
```js
const myCommand = `/print "hello world!"`
const [error, command, params] = commandHandler.parseCommand(myCommand)
```

