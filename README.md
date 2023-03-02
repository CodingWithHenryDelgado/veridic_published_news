# Front End Application for Veridic

## Uses React 18.2.0

### Usage

#### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like.

#### Install Dependencies

* Axios

npm install

#### App.js

* Feed Component is rendered 

#### Componentents - Feed - Feed.js

* componentDidMount fetches information from the Tech Crunch API.
* While it's fetching that information it displays the Loader component
* When finished fetching it stops displaying the Loader and displays the fetched articles 
* It maps the information using a Post component 

#### Componentents - Post - Post.js 

* Anchor element around the Div with the article link
* Title displayed
* Author and date displayed (Time in US format)
* Image element
* Description (Excerpt)
* Hover animation
