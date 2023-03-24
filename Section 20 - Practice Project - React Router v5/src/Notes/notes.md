### Programmatic Navigation

We want to trigger a navigation action and nivagte the user away
programmatically in our code

So it is not a link which we will use but some action triggered
by our code when some other action finished

How to navigate away programmatically when an action has finished

React Router provides a hook that we can import that is useHistory hook

It allows us to change the browser history (the history of pages we visited)

const history = useHistory(); this gives us a history object which we can store in a variable

Now using this history object that we can use to trigger certain "History" changing actions

we can navigate around using the push() which pushes a new page on a stack of visited pages (history)

we can use replace() method that replaces the current page

The difference is that with push we can go back with the back button to the page we are coming from with replace we cann't go back

### Using prompt to warn user before leaving the page if the form has data

react router gives us a hook to prevent page change if the user is filling the form and accedentally click on a link or go back

This hook is called the prompt hook. We can attach focus listener of the form and if the user is on the form and accedently goes back will be prompted first.

first we have to determine when the user starts working on the form, when the form gains focus

then in second step we want to give a warning to the user if he tries leaves the page after starting work on that form.

Using onFocus will tell us if the form is in focus and the user is working on it

next we want to store that information that the form is in focus using state

from react-router-dom we can import a component developed espacially to handle this situation. This component will watch if we navigate away from the page

Prompt needs two props: 1. When prop in which we will pass true or false defining when this prompt should be shown if the user changes the url or not 2. Next we have a message prompt that takes a function that should return a string with a text shown to the user when the user tries to leave

Important: we have to update the entering state to false to disable the prompt before form submission. A separate click function handler will be used on the button to disable the the prompt on the button that will execute before the form is submitted

### Working with Query Parameters

Query parameters are especial parameters which you can add at the end of the URL.

In some URLs you have a question mark and then you have parameter here which basically extra page that was loaded

The difference between a regular route parameters (domain.com/:userId) and a query parameter is that the regular route parameters are mandatory in the url where as the query parameters are optional.

The ? does not change the route matching. It has no impact on which route is matched.

We can change behaivour of the page exapmle: sorting the data in ascending and decending order

### useLocation

useLocation hook will give us an object that contains the data of the page that we are currenlty at

We can use this object to get the data from the URL and do something with it

We should avoid using useHistory in this case when we want to 'search' key of the object because it is mutable and can create bugs

Query Parameter varaibles and their data can be accessed using search key in the useLocation obj

To get the data from query parameter we need to instantiate a new URLSearchParams() object

Using this we can easily access query params data from useLocation object

It is a built in constructor function built-in to the browser. It is not coming from react router but it is there provided by the browser

### Getting Creative with nested routes

we can check if we are on a certain page by checking the URL of the website and react route dom has this functionality

See load comments functionality for clarity - rendering component when the page URL is exactly /quotes/:quoteId/ in nested routes

### Writing more flexible routing code

Currently all of our routes are hardcoded ex: /quotes/:quoteId/comments. In this example /quotes/:quoteId is hard coded and in the future if we ever changes any thing in the base URL example /quote then we have to change it in every place where we have hard-coded the urls

There is a solution to this problem that react router gives us for nested routes that gives us the functionality to find out the for which url the parent component was rendered, so we donot need to repeat hardcoded url in our nested routes

We can use useRouteMatch() and we will get such a object

when we log to the console the object useRouteMatch() we can see we have a 'path' key that gives us the value of the nested routes

### Fetch and Get data using React Router
