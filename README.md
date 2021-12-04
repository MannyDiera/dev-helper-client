# sm-sample

### This is a sample project to demonstrate creating wizards and other defined states using state machines with XState.

### The Editor section of this app is from this article: https://frontstuff.io/using-state-machines-in-vuejs-with-xstate

The idea is to remove the need to add boolean checks in our templates and instead rely on finite state machines.

This way we can declare the only available states of a process/flow and reduce the amount of possible bugs.

Another great thing about Xstate is that it provides a [visualizer](https://xstate.js.org/viz/), so you can see the available states for your application. 

This tool allows us to visualize the application states and this can be reviewed with users before coding the feature.


#### State Machines
There are 3 basic items each state machine needs.
-An initial state
-An object containing available states
-Clearly defined events which will change the current state


In your components, you will have to:
- Import the state machine you have created.
- Declare the state machine and initialize the **current** value in your component to the initial value of the state machine.
- Setup the **onTransition** handler in the created hook of the component _*This will update your current state when the state machine's state changes_
- Add a method to send events to the State machine, which will update the current state

##### *Note
State being referenced with State Machines is not to be confused with the application store/state that could contain API data and is usually handled by tools such as Vuex.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
