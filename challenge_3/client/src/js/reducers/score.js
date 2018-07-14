import Redux from 'redux';

const score = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_SCORE':
      console.log(state);
      return action.score;
    default:
      return state;
  }
};

export default score;
