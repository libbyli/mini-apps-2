import Redux from 'redux';

const changeScore = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_SCORE':
      return action.score;
    default:
      return state;
  }
};

export default changeScore;
