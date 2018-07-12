import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';


const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        sup world
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
