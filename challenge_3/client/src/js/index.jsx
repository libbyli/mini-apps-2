import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  createKeypad() {
    return (
      <table>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div>
        <h1>Bowling Scorecard</h1>
        <div>
          {this.createKeypad()}
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
