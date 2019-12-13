1. What problem does the context API help solve?

Removes prop drilling when you need to pass down a prop perhaps in the middle of the tree, where a prop will not need to be shared into previous components. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events invoked by a user (user-experience) while the reducer updates the states after the action is called. Store holds the state tree which is also called the single source of truth. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global state while component state is a local state. (which can be passed down to child components)

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a middleware that allows async actions to dispatch to reducers as synchronous actions. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!


I like redux a lot so far. I think actions and reducers are a great way to create a nice flow to an application, but I can't say what my favorite state managment system is right now.