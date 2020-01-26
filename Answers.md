1. What problem does the context API help solve?
	-Context API allows us to not have to pass values all the way down a parent-child tree so the app doesn't become cumbersome. It keeps the state manageable.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
	Actions - An action a function that is passed to the reducer. It tells the reducer what to update in the original values. 
	Reducers - Reducers take a state and an action argument and return a new updated state. It's used to update the state without mutating the original value.
	Store - The store is an object that represents everything changed in the application state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
	-Any time a state can and is used through multiple contexts it should be considered Application state. Component state is for when the state is only going to be used in that component. Application state should be immutable while Component state may or may not be immutable. 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
	- redux-thunk allows us to use redux in an asynchronous way. It allows our action-creators to make API calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
	-So far I like Context API the best because I can pass state in multiple contexts and not just a single application wide context.