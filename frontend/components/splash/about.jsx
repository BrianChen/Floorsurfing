import React from 'react';
import { Link } from 'react-router';

import Footer from './footer';

class About extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      subPage: 'ABOUT'
    }
  }

  render() {
    return (
      <div id="about">
        <div id="about-header">
          <div className="about-img">
            <h3>Floorsurfing</h3>
            <h1>Take a journey and discover</h1>
          </div>
        </div>
        <div className="about-content">
          <div className="about-sidebar">
            <ul>
              <Link to={'/about'}><li>About</li></Link>
              <Link to={'/howitworks'}><li>How it works</li></Link>
              <Link to={'/safety'}><li>Safety</li></Link>
            </ul>
          </div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
