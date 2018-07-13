import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import '../css/main.css';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: [],
      date: new Date(),
    };

    this.onChange = this.onChange.bind(this);
    this.formatData = this.formatData.bind(this);
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

  onChange(date) {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json', {
      params: {
        start: JSON.stringify(date[0]).substring(1, 11),
        end: JSON.stringify(date[1]).substring(1, 11)
      }
    })
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
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#007bff',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#007bff',
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
      <div className="container">
        <h1>
          Bitcoin Prices Over Time
        </h1>
        <div className="row">
          <div className="col-4">
            <Calendar 
              onChange={(event) => this.onChange(event)}
              value={this.state.date}
              selectRange={true}
            />
          </div>
          <div className="col-8">
            <Line data={this.formatData} />
            <div className="d-flex flex-row-reverse">
              <a href="https://www.coindesk.com/price/">
                Powered by CoinDesk
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
