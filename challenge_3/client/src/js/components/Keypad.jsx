import React from 'react';

const Keypad = ({handleKeypadClick}) => (
  <table>
    <tbody>
      <tr>
        <td><button value="1" onClick={(event) => handleKeypadClick(event.target.value)}>1</button></td>
        <td><button value="2" onClick={(event) => handleKeypadClick(event.target.value)}>2</button></td>
        <td><button value="3" onClick={(event) => handleKeypadClick(event.target.value)}>3</button></td>
      </tr>
      <tr>
        <td><button value="4" onClick={(event) => handleKeypadClick(event.target.value)}>4</button></td>
        <td><button value="5" onClick={(event) => handleKeypadClick(event.target.value)}>5</button></td>
        <td><button value="6" onClick={(event) => handleKeypadClick(event.target.value)}>6</button></td>
      </tr>
      <tr>
        <td><button value="7" onClick={(event) => handleKeypadClick(event.target.value)}>7</button></td>
        <td><button value="8" onClick={(event) => handleKeypadClick(event.target.value)}>8</button></td>
        <td><button value="9" onClick={(event) => handleKeypadClick(event.target.value)}>9</button></td>
      </tr>
      <tr>
        <td />
        <td><button value="10" onClick={(event) => handleKeypadClick(event.target.value)}>10</button></td>
        <td />
      </tr>
    </tbody>
  </table>
);

export default Keypad;
