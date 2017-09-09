import React from 'react';
import { sendMessage } from '../helpers.js';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      recipientEmail: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleRecipient = this.handleRecipient.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubject(event) {
    this.setState({
      subject: event.target.value
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
    this.setState({
      name: '',
      subject: '',
      recipientEmail: '',
      message: ''
    })
  }

  render() {
    return (
      
      <div>
        <h1>Russ Ward's Sample Email Service</h1>
        
        <form className="email-form" onSubmit={this.handleSubmit}>
          <div className="row"> 
          <h3>Send kind, interesting, and in no way spammy or unwanted emails</h3>
        </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>
                Subject:
              </label>
            </div>
            <div className="col span-2-of-3">
              <input type="text" value={this.state.subject} onChange={this.handleSubject} placeholder="ex. Hiring Russ Ward" required/>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-3">
              <label>
                Recipients Email:
              </label>
            </div>
            <div className="col span-2-of-3">
              <input type="email" value={this.state.recipientEmail} onChange={this.handleRecipient} placeholder="ex. hiringmanager@yourcompany.com" required/>
            </div>
          </div>
          <div className="row">
            <label>
              Message:
            </label>
            <div className="row">
              <textarea value={this.state.message} onChange={this.handleMessage} placeholder="ex. This Russ Ward guy is awesome!  Lets hire him before someone else does." required/>
            </div>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
};

export default EmailForm;
