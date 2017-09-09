import React from 'react';
import ReactDOM from 'react-dom';
import EmailForm from './components/email-form.js';
import { sendMessage } from './helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      this.state.password === 'kohactive' ? <EmailForm/> : 
      <div>
        <h1>please enter password</h1>
        <div className="pw-form">
          <input className="row pw-form" type="text" value={this.state.password} onChange={this.handlePassword}/>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));
