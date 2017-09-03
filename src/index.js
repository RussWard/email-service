import React from 'react';
import ReactDOM from 'react-dom';
import { sendMessage } from './helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      senderEmail: '',
      recipientEmail: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSender = this.handleSender.bind(this);
    this.handleRecipient = this.handleRecipient.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSender(event) {
    this.setState({
      senderEmail: event.target.value
    });
  }

  handleRecipient(event) {
    this.setState({
      recipientEmail: event.target.value
    });
  }

  handleMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event) {
    sendMessage(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input value={this.state.name} onChange={this.handleName}/>
          </label>
        </div>
        <div>
          <label>
            Senders Email:
            <input value={this.state.sendersEmail} onChange={this.handleSender}/>
          </label>
        </div>
        <div>
          <label>
            Recipients Email:
            <input value={this.state.recipientEmail} onChange={this.handleRecipient}/>
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea value={this.state.message} onChange={this.handleMessage}/>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));
