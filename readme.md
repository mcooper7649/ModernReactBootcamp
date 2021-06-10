## Welcome to the Modern React Bootcamp (Hooks, Context, NextJS, Router)
--

### Intro to react
---

Things were going to cover

1. What is React? 
    - A Popular and Powerful Front-End Framework/Library
    - Developed by Facebook
    - History and Goals
2. Components
    - What is a component?
        - Reusable pieces of JS logic and HTML
            - These 'Encapsulate" logic and html into a class
    - Noteable info
        - Normally when we designed sites we designed it using a seperation of concerns
            - Seperate JS/CSS/HTML files
        - Now we still kinda use seperation of concerns but more on a modular point of view
            - common componoents that would utilize all three:
                - button
                - datepicker
                - modal
                - list
                - list-item
                - media
        - This may seem confusing at first but it actually makes it more reusable and polished and easier to update/troubleshoot


## Is React a Library or Framework?
--

1. What is a Front End Framework?
    - Larger JS libraries
    -  Provide 'Blueprint" for apps
    - "Opinionated"
        - "This is how you shoudl design a JS app"

    - Its best to compare to another populare framework "angular"
        - When you look at "angular" you can see it markets itself as a framework and not a library
            - Angular has a whole ecosystem of features available and its alot heaver
            - While React is more lightweight and less feature rich out of the box
            - Most developers use tools with React to get the most out of it

2. Common Tools used in conjuction with React
    - react-router
    - Webpack, DOM, etc


3. An actual Framework built around React is Next.js
    - Much more opinionated


##  Introduction Components
--

[codesandbox-component-example](https://codesandbox.io/s/62x458v5pn)

"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. The page provides an introduction to the IDEA of components." -Reactjs 

1. These are the building blocks of react

2. The idea is to break down the components that make up whole application into smaller components


(a bit like this)
```
class Dog {
    constructor (name, color){
        this.name = name;
        this.color = color;
    }

    render(){
        return `<p>${this.name}</p>`
    }
}
```

3. Lets head over to our codesandbox link next and take a look at our star rating demo
    - We can see that we have two components inside our index.js APP
        - Star
        - Rating


## Setting Up your Server
--

1. For this module we are going to setup REACT from scratch, aka NOT using Create-React-App
    - Lets first make sure we have live server installed as an extendion in vscode
    
2. setup index.html with boilerplate
    - right-click on file, run as live-server (inside vscode)


## Writing our First Component
--
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>First Component</title>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>

  <script src="https://unpkg.com/babel-standalone"></script>
  <script src="index.js" type="text/jsx"></script>


</body>
</html>
```

1. Our first component will be a class based component

2. First we need to configure out index.html to read our react.
    - We can either install a local instance of the files or point to the react cdn
        - we are going with CDN for this project
    - As you can seee we have 4 script tags at the top of our body, our root
    - 3 of them point to our CDN
        - react
        - react-dom
        - babel-standalone
            - transpiles our jsx and turns into normal JS
        - index.js type="text/jsx" 
            - points to our normal index.js file with type="text/jsx" very important 
            
3. There are two types of components
    - functional
        - pretty standard function (well go over hooks later)
    - class based
        - feature rich components


index.js
```
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
```

4. Code Breakdown
    - in our index.html we can see our div with the id 'root'
        - this is where we are going to place our index.js code

    - in our index.js we can see that we are using a class based function name 'Hello".
    - extends React.component
    - in the ReactDOM,render()
        - First Argument is the 'What'
            - ``<Hello />``,
        - Second Argument is the 'Where'
            - document.getElementById('root')
    - Take a look at index.html via live server to confirm our component 'Hello' renders.
    - Great now if we duplicate our h1  we get an error on the console.
        - React can only render 1 element
            - To get around that we can wrap our code in a ``<div>``
    - Remember also if you have multiple lines of code the return code needs to be wrapped in () also. 

## Function vs Class Components
--

1. Class Components
    - The Traditional React Component
    - Write login in a JS Class
    - Must include a render method

``
class Dog extends React.Components {
    render(){
        return `<p> Hi everyone!</p>`
    }
}
``

2. Function Components
    - Historically used for simpler "dumb" components
    - Write your logic in a JS Fuctnion
    - No render method needed, just return content

``
function Hello (){
    return (
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
    )
}
``

3. Whats the difference?
    - Both can accept props and render content
    - Historically, funciton components coudn't use important features like:
        - State
        - Lifecycle Methods
    - With the intorductions of Hooks, we can now write-full-featured function components
    - we will cover Hooks in this course.


## JSX | The Basic Rules of JSX
--

[Babel] (babeljs.io)

1. JSX is the tool that lets us type HTML looking code directly into JavaScript

2. Babel under the hood, converts our JSX into normal JS/HTML
    - JSX is transpiled by BABEl

3. JSX is more strict than HTML - elements must either:
    - Have an explicit closing tag
    - Be explicitly self-closed

4. We can get any element to render on our class or function components but it can only be ONE
    - we must wrap everything in a single tag to avoid console errors
        - div tag works great for this but others can be used
            - section and nav or common too

5. How JSX works behind the scenes?
    - JSX just provides syntactic sugar for the React.createElement function
    - Checkout our Link above to babel to see how babel transpiles JSX
    
    
## Embedding JavaScipt in JSX
--

1. We can embed JS inside JSX when we need to by adding { } inside our JSX code. 
    - For example: ``<p>My favorite number is {8*1} </p>``
        - This this would render 8 instead of the equation

2. This allows us to pass properties, objects, loops, conditionals and there data.

3. If we create a simple function called getMood
    - We create an array of moods inside the function
    - We randomoly select a mood everytime the function is called
    - We used {} inside our JSX to call the function
    

4. Now you can see how powerful it is to create logic using JSX and React embedding.

## Conditionals in JSX (JSX_Conditionals)
--

```
function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num === 7) {
			msg =
				<div>
					<h2>CONGRATS YOU WIN!</h2>
					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
				</div>
		} else {
			msg = <p>Sorry You Lose!</p>
		}
		return (
			<div>
				<h1>Your number is: {num} </h1>
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));

```

1. There are many different types of conditionals that you can use with React, so I figured lets create a numPicker app to help you understand a little better

2. This will pick a random number
    - if it displays 7 it will display a message
    - if it dispalys another number it will display a different message

3. Commonn Conditionals
    - Boolean
    - If/else
    - Ternirary
    - Variable Creation and Modifications


## Standary React APP Layout
--


1. So far we haven't been following the standard react structure of an App. 
    - We will cover that in this module

2. It's conventional for the top-level component to be named App
    - This renders the other components

app.js
```
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumPicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

```

3. From the Components on the App component you may even have more sub-components

4. This is the Entry point to our code and readers will know where to start

5. This is usually the only rendered on index.js



## Properties aka props
--

1. A usefule component is a reusable one. This often means making it configurable or customizeable

2. For our example next, we want to render a greeting, "hi __ from __".
    - Lets make 2 properties, to and from
        - to 
            - Who we are greeting
        - from
            - Who our greeting is from 

3. Passing data down
    - In our index.js we have ``<Hello />`` twice
    - We can pass our properties down by adding them to the tag
    - Lets add a value to each to test
``<Hello to="Ringo" from="Paul" />``

4. Inside our Hello.js
    - remember classes prefer 'this' when working with props
    - sometimes you may runto people using props = this.propss
    - Lets use {this.props.to} to tap into the 'to' prop
    - Lets use {this.props.from} to tap into the 'from' prop

5. View the live server

6. Props are Immutable?
    - Properties are for configuring your component
    - Properties are immutable
        - You can't say 'this.props.page = 10' because its immutable
    - Changing data and values there are other ways but PROPS are immutable

7. Property Types
    - We've seen strings as props
    - We can pass other JS data types using embedded js express using the curly braces
    - functions
    - arrays
    - boolean (both are the same)
        - isFunny=true
        - isFunny
    - number 
        - bangs={10}
        - let bangs = "!".repeat(this.props.bangs)
        
    - image
        - img={"url"}
        - ``<img src= {this.props.img} />``
    
8. Looping in JSX
    - The most common way to loop through arrays youll see is using map.
    
    - Take a look at our examples below
    
    - We pass our name string props and our hobbies array (using {}) from our index.js

index.js 
```
class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name="Elton"
          hobbies={['Piano', 'Singing', 'Dancing']}
        />
        <Friend
          name="Frida"
          hobbies={['Drawing', 'Painting']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

9. Next we take our props and assign a const using hte same name as the props while dropping this.props, using es6
``const { name, hobbies } = this.props;``

10. Last we can use the map method to map each hobbie and create an li for each hobby per user. make sure to wrap {h} because it needs to be dynamic and without will just render 'h'.

11. Bonus note, you can create a const for our ``{hobbies.map(h => <li>{h}</li>)}`` and {} the const if you want to have the same output with a little cleaner code.

Friend.js

```
class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>
    )
  }
}
```

## Default Props
--

1. What are default values for props?
    - Components can specify default values for missing props
        - All we do is define an object called static 'defaultProps'
            - We put key/value pairs inside our defaultPropts
    
2. Why would we use defaultProps?
    - Say someone doesn't leave a name prop.
    - If we map through our Friend.js people will think its a bug or something similiar
        - We can specify a deafultProp of "Anonymous" and now it will at least display something.
            - this can be used many other ways, this is just one example


## Styling React
--

1. First we want to add a css stylesheet using the same code we normally would to our index.html except the ``href='app.css'``
    ``<link rel="stylesheet" href="app.css">

2. Adding the class properties are the same on the app.css side of things

app.css
```
.Machine {
	border: 2px solid black;
	background: lightblue;
}
```

3. Inside our Machine.js we want to add the class using
``className="Machine"`` instead of the hold ``class="Machine"`` like we used before in normal HTML.
- This generates DOM errors in the console
- class is a reserved words, remember class functions

4. Another notable change, is the ``for``, like the for property used in forms/labels. You will get more DOM errors. use htmlFor instead.

5. The style property
    - The inline style property can utilized still for styling but it now takes a JS object
    
6. What do we need to know about this object?
    ``<p style={{fontSize: '50px'}}>``
- Notice in our above example, when we need to inline style we pass an object
- Notice we use camelCase to set the key value pair
- Remember you can and may see people create a const for our styles and call it with jsx

Commong Styling useing const example
``const colors = {fontSize: '50px'}``
``<p style ={colors} >``

7. For our SLOT MACHINE example
    - We can use ternirary operator to apply our classes 'Win' or 'Lose'

app.css
```
.win {
	background: green;
	color: white;
}
.lose {
	color: white;
	background: red;
}
```

machine.js
```
render() {
		const { s1, s2, s3 } = this.props;
		const winner = s1 === s2 && s2 === s3;
		const colors = { fontSize: '50px', backgroundColor: 'purple' };

		return (
			<div className="Machine">
				<p style={colors}>
					{s1} {s2} {s3}
				</p>
				<p className={winner ? 'win' : 'lose'}>
				{winner ? 'Winner!' : 'Loser!'}
				</p>
			</div>
		);
	}
```

- In our code above you can see the ``<p>`` tag has 2 ternirary that both reference our const 'winner', and will apply a class and text accordingly




## Create React App
--

1. What is Create React App?
    - CRA is a utility script that:
        - Creates a skeleton react project
        - Sets it up so that JS fiels are run through Babel Automatically
        - Lets us use super-modern JavaScript features/idioms
        - Makes testing & deployment much easier

2. Before we get started.
    - Node will need to be installed (I have it already)
    - node -v to check node version
    - npm -v to check npm version

3. Lets get get started
    - ``npx create-react-app my_app_hellooooo``
    - This example above is how we use npm/npx and CRA to create our first app
    - Remember names must be all lower case
    
4. Alternativly if you have the "Create-React-App" Package installed you can type:
``create-react-app app-name``
- This will also spin up a project skeleton in the current directory

5. ``npm start`` from console, inside working directory, to start up our localhost development server


6. Want to see the complete list of commands available with CRA?
    - inside the skeleton project view the README.md and you can see all the additional commands and what they do

7. Our directory structure
    - you can se now we have node_modulees (we rarely touch)
    - public (stores our index.html)
        - we aren't usually modifying these files
    - src (this is where we spend the bulk of our time)
        - App.css
        - App.js
        - App.test.js
        - index.js
        - logo.svg
        - serviceWorker.js
    - .gitignore
        - /node_modules
    - package.json
        - dependencies 
    - README, usually you replace this after you app is ready.

8. Starting and Stopping our server
    - ``npm start``  // This starts the server 
        - opens localhost:3000 in a default browser
        - On the Network is great for collaboration


example output of npm start:

```
Compiled successfully!

You can now view my_app_helloworld in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.64:3000
```

## CRA and Webpack
--

1. CRA is built on top of "Webpack", a JS utility that:
    - Enables module importing/exporting
        - Packages up all CSS/images/JS into a single file for browser
        - Dramatically reduces # of HTTP reqeusts for performace
    - Hot reloading: 
        - When you change a source file it automatically reloads
    - Enables easy testing and deployment!

## Modules: Import & Export Crash Course
--

1. Modules
    - CRA uses es2015 "modules"
        - This a newer, standardized version of Node's require()
        - You use this to export/import classes/data/functions between files

2. How to export helpful.js
    - View our example below
        - its set as the default, the only export for this file

helpers.js
```
function helpful(){
    console.log("hi")
}

export default helpful

```

3. How to import helpful to index.js
    - Take note ./ after the from, this tells it to look in the fold hierarchy and NOT the node_modules
    - another note, the container helpful doesn't need to be named helpful, it could be h or whatever you like, because helpful was the default export for helpers
    
index.js
```
import helpful from './helpers'
helpful();
```

4. What if we have alot of functions? and want to export more than one?
    - ``export {helpful, helpful2, helpful3};``
        - This lets you specifically export named functions
    - `` import {helpful, helpful3} from './helpers';``
        - This lets you import specifically named functions

5. Can you have a default and name specific functions?
    - yes
        - ``export { helpful2, helpful3};``
        - ``export default helpful;``
        - `` import helpful, {helpful2, helpful3);``

5. The most common import we will see is something like this
    - ``import React, {Component} from 'react'``
        - This again, imports React as the default
        - This will import Component individiually from react

6. When to use default
    - Conventionally, default exports are used when theres a "most likely" thing to export
    - For example, in a React Component file, its common to have the component be the default export
    - You never need to make a default export, but it can be helpful to indicate the most important thing in a file


## Fruits Exerices Module
---

1. In this module we want to use CRA to create new project
2. Next we want to create 3 files only in our src folder and delete everything else in that folder
    - foods.js
    - helpers.js
    - index.js
3. We want foods to be an array of foods 
    - We want to export this as default
4. We want helpers to be two functions
    - choice
        - Chooses a fruit randomly
    - remove
        - looks through items array for item and removes if its in the array
        - The logic actually slices everything before our index item and everything after
        - then it combines the two back together with out the item

foods.js
```
const foods = ["apples", "oranges", "tomatoes", "pears", "grapes", "kiwis", "strawberrys", "watermelon"];


export default foods;
```

helpers.js
```
function choice(items){
    var index = Math.floor(Math.random() * items.length);

    
    return items[index]
}

function remove(items, item){
    for (let i = 0; i< items.length; i++){
        if(item[i] === item){
            return [ ...items.slice(0, i), ...items.slice(i+1) ];
        }
    }
}

export {choice, remove};
```

index.js
```
import foods from './foods'
import {choice, remove } from './helpers'

let fruit = choice (foods);

console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`)

console.log("May I have another?");

let remaining = remove(foods, fruit);

console.log(`I'm sorry we're all out. We have ${remaining.length} other foods left.`)
```

- CRA Conventions
    - Conventions are commong styling you will see
    - For example
        - Each React Component goes in a seperate file
            - src/Car.js for Car Component
            - src/House.js for House Component
            - notice the names match and the name is Capitalized
    - Components EXTEND Component (import from React)
        - Export the component as the default object
    - Skeleton assumes top object is App in App.js
        - Best to keep this structure


## Assets and CRA
--

1. When we create a NEW CRA from scratch
    - we may notice ``import logo from "./logo.svg"``
    - We may also notice ``import "./app.css"``

2. CSS
    - Make a CSS file for each React component
    - House.css for a Hosue component
    - Import it at the top of the House.js
        - CRA will automatically load that CSS
    - Conventional to add ``className="House"`` onto House div
        - and use that as a prefix for sub-items to styles
    - This makes it much more clearer to read the styles for other developers
    - Remember - When importing a css file no variable name is needed, just ``import ./Dog.css``
    - After imported we can apply the className="Dog" and the colors will still to the child elements
    - Also NOTE. don't use general names of classes like div, you can import and can run into styling conflicts because its imported everywhere
        - You can fix that with scoping tools

3. Images
    - Store image in src/folder with the components (usually you would create an images folder inside your src )
    - Load them where needed and use imported naem where path should go
        -  ``import logo from "./logo.svg"``
        - ``<img src={logo} />``
        - If i wanted to apply a className to this image next I would use ``Dog-img`` as it lets us differientiate our component/classes

## Pokedex Excercise
--

1. Intro to Pokedex Exercise
    - We are going to create a Pokedex inside of our App Component (This will not have any direct logic in it)
    - Pokedex
        - It will display a list of pokemon as cards    
            - You can style it how you like
        - Each card will have a set of properties
            - Name of Pokemon
            - Image of Pokemon
            - Type of Pokemon
            - Experience of Pokemon


2. Create PokeCard (in src for this project)
    - Export Default Pokecard
    - Import Pokecard to App.js

3. On App.js 
    - In between a ``<div>`` we need to ``<Pokecard />``
    - We can manually pass a set of props from our provided list through the ``<Pokecard />`` tag.

4. Now we can work on Pokecard
    - create a div with the class "Pokecard"
    - Next we will give the Pokecard structure
        - h1 this.props.name
        
5. Lets add an image
    - This is tricky because of a couple reasone
        - We need to create a const Poke_API with a url ROOT
        - then we need set a var named 'imgSrc' use embedded JSX interpolation with backticks and this.props.id to set the img.
        - then we set the ``<img src{imgSrc} />``


6. Lets add the type and exp as ``<div>`` tags next

7. We can import a stylesheet next, typically we create a stylesheet the same name as our components
    ``import './Pokecard.css'``

## Adding the Pokedex Component
--

1. Create Pokedex.js and Pokedex.css
    - export default Pokedex;

2. Lets add the defaultProps for data next above render inside our compoent

```
static defaultProps {
    pokemon: [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
}
```
3. lets ``Import Pokecard form './Pokecard'`` next
    
4. Now we need to map through our 'pokemon' and for each iteration we need to render a pokecard
    - Make sure to use this.props when mapping so you can tap into them
    - also make sure to create new props to passdown

```
                <div className="Pokedex-cards">
					{this.props.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
```

5. Yay now we meet basic requirements and cards are rendering.

## Styling hthe Pokecard and Pokedex
--

1. This module is pure css, no logic changes
    - Lets wrap our all our Pokecard in a new div with a className 'Pokedex-cards"
    - Now we can edit that class in our pokedex.css

2. Lets add display: flex as a .Pokedex-cards class
    - Next lets add 300px width for each .Pokecard

3. Back inside Pokedex.css, .Pokedex-cards class
    - Lets add justify-content: space-evenly;
    - then add flex-wrap: wrap

4. Pokecard.css
    - .Pokecard class
        - padding 10px
        - margin: 1rem
        - box-shadow: 7px 10px 12px -5px rgba(0,0,0,0.56);
        - text-align: center;
        - background-color: #ffffff;
        - border-radius: 3px; very small rounding of corners

5. Lets set the background-color for the whole app
    - recommended ot use the index.css for this
        - body
            - background-color: #eceff1;
            - color: #4d4d4d:


6. Lets add some classeses to our Pokecard components-  
    - h1 
        - Pokecard-title
    - div (both divs)
        - Pokecard-data

7. Now inside of our Pokecard.css
    - .Pokecard-data
        - font-size: 80%
        

## Adding Fancier Images
--

1. We need to add some logic to our Pokecard.js
    - We need to find our id
    - set the POKE_API to this:
    ``const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'``
    - take our id and pad it to 3 digits
        - meaning if your id was 4, its now 004
        - or if your id was 84 its now 084
        - or if your id was 111 its still 111
        - in our logic below you can see we add 00 to the id, then slice (from the right) 3 digits, so it it was 4, it turned into 004 then we sliced. Or if it was 55 then we have 0055 sliced = 055.
``let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);``



## Pokegame Component
--

1. Lets first create the Pokegame Component

2. We first will take the defaultProps and move it over
    - create hand1 as an array
    - create hand2 be an array with ``[...this.props.pokemon]``

3. Next we can import Pokegame on our App.js instead of Pokedex

4. We are going to create some logic that says
    - While hand1's length of array is less than hand2s length
        - let a randomindex pull a random card for hand2 array
        ``let randIdx = Math.floor(Math.random() * hand2.length);``
        - next we create randPokemon and splice from hand2 the index and push it to hand1

        - let exp1 = the reduced exp of hand1 pokemon 
        ``let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);``
        - same with exp2
        - in our return, we want to pass our Pokedex
            - is Components some props
                - pokemon
                    - hand1
                - exp
                    - exp1 logic
                - inWinner
                    - exp1 vs exp2 logic
                
        

## Styling Pokegame
--

1. We want to add a terniary as our ``<p>`` className
    - "Pokedex-winner"
    - "Pokedex-loster"

2. Now to clean up our code we can take our ternirary and remove it and instead create a variable named 'title'

3. we can use if/else(this.propsisWiiner)
```
let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-loser">Losing Hand</h1>;
		}
```

4. The we just add {title} to our Pokedex
```
return (
			<div className="Pokedex">
				{title}
				<h4>Total Experience: {this.props.exp}</h4>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
			</div>
		);
```

5. Next we can modify the classes to have red and green for winner/loser
    - Also text-align center for .Pokedex class0

6. we can get rid of our defaultProps in our Pokedex now, we're no longer using them

7. remove the h1 "Pokedex" lets replace with {title}

8. Lets add a class to our div tag .Pokemon-image
    - display: flex
    - justify-content: center;
    - align-items: center;
    - height: 250px
    - background-color: #eceff1;
    - border-radius: 3px;
    - margin-bottom: 1rem;

9. Add a hover effect
    - .Pokecard img:hover 
        - tranform: scale(1.25);
        - opacity: 0.7;
        
10. Lets slow the effect down
    - .Pokecard img
        transition: all ease 500
            - this mean all properties, ease, 500 miliseconds

11. Lets import our font on index.css
``@import url('https://fonts.googleapis.com/css?family=Work+Sans');``
```
body {
	margin: 0;
	padding: 0;
	font-family: 'Work Sans';
	|: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: #eceff1;
	color: #4d4d4d;
}
```

12. Lastly, our ".Pokecard-title"
```
.Pokecard-title {
	margin-bottom: 1rem;
	font-weight: bold;
	font-size: 1.5rem;
}
```


## React State
--


1. We currently have a react site that has props but the data isn't dynamic, nothing about them is changing.

2. Goals
    - Understand the concept of state in web applications
    - Learn how to model state in React
    - Use events to trigger state changes

3. Lets first take a closer look at REACT developer tools
    - We can open it inside the browser, rightclick inspect
        - Components is the name of the REACT tool we need
        - You can see it shows all the props and array information
    - We must remember in the following module, state, we will see these values change and that can be very helpful while developing


## State in General
--

1. What is state?
    - In any sufficiently advanced web application, the user inferface ahs to be stateful.
    - Some examples of state include
        - logged in users can see a different screen than logged-out users
        - clicking "edit profile" opens up a modal(pop-up) window
        - sections of a website can expand or collapse, for instance clicking "read more:
    The state of the client interface (frontend) is not always directly tied to state on the server.

2. State Changes
    - State is designed to constaly chagne in response to events.
    - A great way to think about state is to think of gaems, for instance chess. At any point in time, the baord is in a complex staet.

3. What Does State Track?
    - UI logic the changing state of the interfacee e.g., there is a modal open right now because i'm editing my profile.
    - Business logic the changing state of data e.g., in my inbox, messages are either read or unread, and this in turn affects how they display.

4. Vanilla/jQuery State
    - The way we kept track of state with jQuery was by  selecting DOM elements and seeing if they were displayed/hidden, or if they had certain styles or attributes.
    - In other words, we were inferring the state of the application from the DOM itself.

## Initializing State
--

1. Core React Concept Review
    - Components
        - Building Block of React
        - Combines JS logic and JSX presentation

    - prop
        - data passed to a component (or found via defaults)
        - immutable; component cannot change its own props
    - state
        - internal data specific to a component
        - data that changes over time

2. What is React State?
    - In React, state is an instance attribute on a component
    - its always an object(POJO), since you'll want to keep track of several key/values.

3. Initial State
    - State should be initialized as soon as the component is created.
        - So we set it in the constructor function
example state
        ```
        class ClickCount extends Component {
            constructor(props){
                super(props);
                this.state = {
                    numClicks: 0
                }
            }
        }
        ```

4. React Constructor Function
    - If your component is stateless, you can omit the constructor function
    - So this means if you want to a state, you cannot use a function component as they cannot have a constructor
    - If you are building a component with state, you need a standard React constructor
    - Construcotr takes one argument, props
    - you msut call super(props) at start of constructor, which "registers" your class as a React Component
    - Inside the instance methods, we can refer to this.state just like you did this.props

classic react constructor
```
constructor(props){
    super(props);
    this.state{
        key: value
    }
}
```

5. Alternate Syntax
--

1. There is another method to intialize state, it's not the standard, but utilizes babel.

2. we can remove the constructor and super methods and just leave state without 'this'

3. There are a few reasons why I don't recommend
    - This is non-standard JS and only works by DEFAULT because we are using CRA
    