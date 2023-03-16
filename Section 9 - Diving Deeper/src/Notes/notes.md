### If no value is provided to the prop we should set a default value to the prop so the component does not break

- There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string)

### Limitation of JSX and Fragment - Div Soup

- We have this requirement in JSX that return statement should have only one html element that is returned. We can not have two elements side by side returning at the same time. The reason is that JS only returns one thing at a time. This behavoir creates unnecassary div in the dom that also makes code verbose - div soup

- We can avoid this by using a wrapper component that will only return props.children and then wrapping that component around our other component where we want to return more than one element

- The second option is that we use <React.Fragment> / <></> around our component. This will not create unnecassary divs in our code

### Using Portals

- Semantically and from a "clean HTML structure" perspective, having this nested modal is not ideal. It is an overlay to the entire page after all (similar for side-drawers, other dialogs etc).

- If the modal is in middle of other code and you style it to be shown above everything else it can create some accessiblity issues for screen readers.

- Portals helps resolve this issue. You can write your component as usual for easy data flow and render it differently on the page

- Portal needs two things:

1. Place you want to PORT the component
2. Let the component know that it should be render at the place

### Using ref (references) in react - useRef

We can connect to any element/DOM node on our page using refs.
Refs returns an object with the dom node, and the object always have a "current" property.

Connecting ref is same as getting element using DOM API ex: document.querySelector().

It is not a best practice to change DOM and update state using refs. Only state should do that.

A good use case of ref is to connect refs with form input fields and get the data when the form is submitted. Using state and update state on onChange is bit redundent so we can use refs here

ref only returns one object so there is no setElement like we have in state

useRef(initialValue);

We have a special ref attribute/prop for every html element

If you only want to read the value and not update the state then using refs is fine

### Controlled & UnControlled Components

If we access value with refs it is called incontrolled component. So any input field that is accessed using refs is an uncontrolled component
