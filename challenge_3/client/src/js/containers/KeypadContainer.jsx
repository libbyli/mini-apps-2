import { connect } from 'react-redux';
import Keypad from '../components/Keypad.jsx';
import changeScore from '../actions/actionTypes';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  handleKeypadClick: clickedScore => (
    dispatch(changeScore(clickedScore))
  ),
});

const KeypadContainer = connect(mapStateToProps, mapDispatchToProps)(Keypad);

export default KeypadContainer;
