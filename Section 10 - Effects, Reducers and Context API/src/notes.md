### Understanding useEffect hooks

useEffect is a lifecycle method introduced in react function components
and before that when we use class component we have to use class based lifecycle methods

During the life cycle of a component, there are three stages

1. Mount - when component mounts/loads
2. DidUpdate - when component props change
3. Unmount - when component unmounts/cleanup function (before the component is about to rerender it unmounts first)

The lifecycle of a component is like when ever the page loads a component renderes on to the page and then the user might interact with the page which may trigger a rerender but before the page is re-rendered, it unmounts that component and then it puts it back on the page.

So, first thing react would do is mount the component on the page so we see it, then it may receive some kind of interaction or change and that is gonna cause it to unmount the component and then remount it again.

We can run any code between these stages with useEffect that will handle any side effect

useEffect(() => {}); // this runs on every render
useEffect(() => {}, []); // this runs on first render only
useEffect(() => {}, [a, b]) // this runs on first render and everytime a dependency changes

Before the component is about the re-render it will unmount first, so the lifecycle that you have to expect is that when ever a page loads the component renders on the page (mounts), and then the user might interact with the page which may trigger a re-render but before the page re-paints
react (unmounts) that component, update the data and puts it back on the page (re-mount)

#### The Cleanup Function:

useEffect allows us to have a cleanup function that will run before the
component re-mounts or re-paints on the page

We can return a function in every single useEffect that is called a cleanup function that will basically run when the component unmounts

useEffect(() => {
console.log('whatever');

    return () => {
        // Cleanup...
        // before the component re-renders, react quickly unmounts the component so that it can re-render another one in its place
        // So we can run anything when the component unmounted and before it re-renders on to the page
    }

}, [dep]);

Why do you need a cleanup function?

### UseReducer()

useReducer is a react hook that lets you add a reducer to your component

const [state, dispatch] = useReducer(reducer, initialState);

useReducer returns an array with exactly two items

1. The current state of the variable which is initialy set to the initial state you provided

2. The dispatch function that lets you change it in response to interaction

To the update the state, call dispatch with an object representing what the user did, called an action:

function handleClick() {
dispatch({type: 'incremented_age'});
}

React will pass the current state and the action to your reducer function. Your reducer will calculate and return the next state.

React will store that next state, render your component with it, and update the UI.

Why the component is not rendering anything on initial render when we use state?
Situation:

const [emailState, dispatchEmail] = useReducer(emailReducer, {
value: "",
isValid: null
});

<!-- <input type="email" className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}/> -->

here on the initial render the default value of isValid is set to null.

Null in react does not render or return anything which may be useful sometimes if you donot want to render anything

useState() vs useReducer() -> when to use
useState is a basic hook for managing simple state management/transformation
useReducer is an additional hook for managing more complex state logic.

When you have simple value change mostly a primitive data or true/false state update you should use useState.

useState is for independent pieces of data and is great if state updates are easy and limited to a few kinds of updates

but, if you are managing state of objects and arrays where the latest snapshot of the code in required during the state update you should use useReducer.

If different propertis/values are related to each other you should use useReducer
