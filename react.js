// assign a div element to the constant JSX. Replace the div with an h1 element and add the text Hello JSX! inside it.
// Simple JSX element
const JSX = <h1>Hello JSX!</h1>;


// ## Complex JSX element ##
const JSX = <div>
  <h1>Paragraph One</h1>
  <p>Paragraph Two</p>
  <ul>
  <li></li>
  <li></li>
  <li></li>
  </ul>
</div>


// ## Add Comments in JSX ##
const JSX = (
    <div>
    {/* */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );


// ## Render HTML Elements to the DOM ##
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  
  // Add your code below this line
  ReactDOM.render(JSX, document.getElementById('challenge-node'));


// ## Define an HTML Class in JSX ##
const JSX = (
    <div class="myDiv">
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line

ReactDOM.render(JSX, document.querySelector('.myDiv'));


// ## Learn About Self-Closing JSX Tags ##
const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br>
      <p>Be sure to close all tags!</p>
      <hr></hr>
      </br>
    </div>
  );


// ## Create a Stateless Functional Component ##
const MyComponent = function() {
    // Change code below this line
  return (
      <div>
        Hello, this is my component!
      </div>
    );
    // Change code above this line
  }


// ## Create a React Component ##
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
            return (
            <div>
                <h1>Hello React!</h1>
            </div>
            );
  
      // Change code above this line
    }
  };


// ## Create a Component with Composition ##
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
          <ChildComponent />
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };


// ## Use React to Render Nested Components ##
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
  
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };


// ## Use React to Render Nested Components ##
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
          <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
            <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };