import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import '../css/main.css';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((response) => {
        this.setState({
          labels: Object.keys(response.data.bpi),
          data: Object.values(response.data.bpi),
        });
      })
      .catch(error => console.log(error));
  }

  formatData() {
    return {
      labels: this.state.labels,
      datasets: [
        {
          label: 'BTC Prices as USD',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.data,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>BTC</h1>
        <Line data={() => this.formatData()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
