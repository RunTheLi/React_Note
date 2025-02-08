// ## Use the Lifecycle Method componentWillMount ##
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
      <div>
      console.log(componentWillMount)
      </div>
      // Change code above this line
    }
    render() {
      return <div />
    }
  };
  
  // ## Use the Lifecycle Method componentDidMount ## 
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }

// ## Add EventListene
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };


// ## Optimize Re-Renders with shouldComponentUpdate ##
  class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
      // Change code below this line
      return nextProps.value % 2 === 0;
      // Change code above this line
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>;
    }
  }
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState(state => ({
        value: state.value + 1
      }));
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value} />
        </div>
      );
    }
  }


// ## Introducing Inline Styles ##
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};

// ## Add Inline Styles in React ##
// Change code above this line
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};

class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};


// ## Use Advanced JavaScript in React Render Method ##
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    let randomIndex = Math.floor(Math.random() * possibleAnswers);
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
          {answer}
          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}

// ## Render with an If-Else Condition ##
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display){
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
};

// ## Use && for a More Concise Conditional ## 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>display!</h1>}
         <h1>Displayed!</h1>
       </div>
       
    );
  }
};

// ## Use a Ternary Expression for Conditional Rendering ## 
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}