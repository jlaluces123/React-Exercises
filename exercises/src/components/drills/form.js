import React, { useState, useEffect } from 'react';

/*

export class Profile extends Component {
  state = {
    name: "Backbencher",
    age: 23,
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            type="text"
            value={this.state.age}
            onChange={this.onAgeChange}
          />
          <h2>
            Name: {this.state.name}, Age: {this.state.age}
          </h2>
        </form>
      </div>
    );
  }
}

*/

const Form = () => {
    const [profile, setProfile] = useState({});

    return (
        <div>
            <h2>
                Name: {profile.name}, Age: {profile.age}
            </h2>
            <form action='POST'>
                <input
                    type='text'
                    name='name'
                    id='name'
                    // onChange={handleNameChange()}
                />
                <input
                    type='text'
                    name='age'
                    id='age'
                    // onChange={handleAgeChange()}
                />
            </form>
        </div>
    );
};

export default Form;
