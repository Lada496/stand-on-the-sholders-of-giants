## Understanding Redux

### Purpose

Redux prevent applications from losing controle over when, why and how of its state in complicated single page applications

### How

Redux way of approach is manage state mutations to be predictable to control how and when to update state

### Three Principles

- Single source of truth: The global state of your application is stored in an object tree within a single store (https://redux.js.org/understanding/thinking-in-redux/three-principles#single-source-of-truth)
  👍 makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the cloent with no extra coding ???
  👍 makes it easier to debug or inspect an application
  👍 enables you to persist your app's state in development, for a faster development cycle
- State is read-only: The only way to change the state is to emit an action, an object describing what happened. (https://redux.js.org/understanding/thinking-in-redux/three-principles#state-is-read-only)
  👍 ensure that neither the views nor the network callbalcks will ever write directly to the state
  👍 no subtle race contitions to watch out for
  👍 actions can be logged, serialized, stored, and later replayed for debugging or testing purposes because actions are plain objects

- Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducer. (https://redux.js.org/understanding/thinking-in-redux/three-principles#changes-are-made-with-pure-functions)
  👍 because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination
  🚨 remember to return new state objects, instead of mutating the previous state

ref: https://redux.js.org/understanding/thinking-in-redux/motivation
