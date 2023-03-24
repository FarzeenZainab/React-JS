### React Router Version 5

with react router we want to load different component if the URL of the page has changed

www.our-domain.com => load/render component A
www.our-domain.com => load/render component B

step one {Route} import react-router-dom
create a new route inside app.js file

register a new route
<Route path="/products">
{/_domain.com/products_/}
<Products />
</Route>

In order React Router to work we need to go in our root file where we render the app component

import {BrowserRouter} from 'react-router-dom'
next, we simply need to wrap the over all App component inside <BrowserRouter></BrowserRouter> component

The <Link></Link> component will prevent the default re-loading behaviour of the anchor tag, manually updates the url for us and it will also change what we see on the page. This component will not send new request to the server instead react router will update the dom of the page

react router has an extra feature that helps us highlighting the link of the current page

Instead of using the regular Link we can use the NavLink component
NavLink works the same as Link component, the only difference is that it adds a css class that will highlight the current page link.

We just need to tell NavLink which class to add using activeClassName attr/prop

### Adding Dynamic Routes with Params

we can add dynamic routes in the url and show the based on the param provided in the URL

we have to first register the new route with the param as
/product-details/:productId (:productId is the key in the url)

next we have to import a custom hook from react-router-don that is useParams

after importing we have to use useParams() function that will return and object with the value of the param in the url as the property of the ket :productId

### Using Switch and Exacts in Routes

We have to use Switch hook when registering route so react donot show multiple pages on the same page. By default, react routes are not parsed in such a way that only one path is loaded at the same time. React will load all the components whose urls are matched

example:
react will load
/products and /products/:productId at the same time and show both on the screen because /products is the matching domain

this how react works

matching url/path means that all the pages' urls starting from ex:/products will be loaded and shown on the screen

to prevent this behaviour and have one route to execute one time then you ca use Switch hook

sometimes Switch will also not work because it will show pages based on the order of the routes defined in the App.js file

One fix is to move more specific urls ex:/products/:productId to the top and least specific at the bottom ex: /products

The other way of fixing the specificity issue in switch we can use the 'exact' prop on the Routes and in this solution order of the Route does not matter

### Nested Routes

there are same senarios where you want to have Route inside a component and not the app.js file

Example:
/products
/products/add
/products/edit
/product/delete

/welcome
/welcome/new-user

conside a component <Welcome/>
This component will greet a user in the app

This component will also load a route conditionally which will greet a new user only

So, to do that we have to use a nested route that if the current route is /welcome normal welcome page is show and if the url is /welcome/new-user then the welcome page should also show the greet message to the new user only

### In order to render nested route the parent Route should be rendered first

/welcome/new-user will never be rendered if we are not on /welcome page first

### Redirects in react router

we will use Redirect component from react-router-dom
then register a new Route
and use <Redirect to='/path' />
