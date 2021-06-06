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
