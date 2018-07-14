import Redux from 'redux';

const score = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_SCORE':
      return action.score;
    default:
      return state;
  }
};

export default score;
