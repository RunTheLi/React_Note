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