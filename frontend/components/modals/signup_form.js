import React from 'react';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3><br/>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update('name')} value={this.state.name}
            placeholder="Name"/><br/>
          <input type="text" onChange={this.update('email')} value={this.state.email}
            placeholder="Email"/><br/>
          <input type="password" onChange={this.update('password')} value={this.state.password}
            placeholder="Password"/><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default SignupForm;