There are two ways you can get the value of the input

1. Listen to every keystroke and store the value in a state variable
2. Use a useRef to get the value directly from the DOM

When to use what?

- When you have to get the value only once when the form submits you can use Refs
- If you want to get the value on every keystroke for instant validation you should use useState
  - The other reason of using state is if you want to reset the entered input. We can do the same thing with ref but it is not a best practice becuase we are directly accessing the DOM and changing the value

How should we validate the input? and how should we best do that?

Case: 1
When the form is submitted we can validate by using if checks, same for keystrokes

Why you should not use state for validation?

- for example we have a state that checks if the input is empty. On the first render we set the state to true becuase we donot want to show the error msg before user starts typing

- technically, this is not a right approach because we are setting it to true and telling that the field is valid even though it is not valid on the initial render, it is empty

- now image there is a useEffect running that sends an http request if the input is valid on the first render and when ever the input changes.

- because the state is true useEffect will send the value that it should not.

- const [nameIsValid, setNameIsValid] = useState(true);

- useEffect(() => {
  if (nameIsValid) {
  // send http request
  }
  }, [nameInput]) // it sends the http request on the first render when the field was empty on the first page load

- to avoid this behaviour we have to check if the user touched the input field or not, means managing another state

Case 2:
Validate when input lost focus

- When the user touches the input and does not enter any value that means the input is invalid. We have to show the error when the user clicks out of the input field.

- To do this we can also use the onBlur event that will execute when the user clicks out of the field
